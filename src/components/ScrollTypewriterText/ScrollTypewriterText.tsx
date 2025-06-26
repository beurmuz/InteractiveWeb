import { useEffect, useRef } from "react";
import ProjectHeader from "../ProjectHeader";
import styles from "./ScrollTypewriterText.module.css";
import gsap from "gsap";

const ScrollTypewriterText = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElements = textRef.current;
    if (!textElements) return;

    // 기존 텍스트 저장
    const textContent = textElements.textContent || "";
    textElements.textContent = "";

    // 글자마자 span으로 감싸기
    const letters = textContent.split("").map((char, idx) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0";
      span.className = styles.letter;
      textElements.appendChild(span);
      return span;
    });

    // IntersectionObserver로 감지하기
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(letters, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: "power2.out",
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(textElements);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ProjectHeader
        name="ScrollTypewriterText"
        description="스크롤에 따라 텍스트가 타자 효과처럼 하나씩 나타나는 애니메이션"
      />
      <div className={styles.container}>
        <div ref={textRef} className={styles.text}>
          Hello, I am GSAP Typing!
        </div>
      </div>
    </>
  );
};
export default ScrollTypewriterText;
