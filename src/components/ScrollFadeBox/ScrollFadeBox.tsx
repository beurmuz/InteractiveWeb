import { useEffect, useRef } from "react";
import ProjectHeader from "../ProjectHeader";
import styles from "./ScrollFadeBox.module.css";
import gsap from "gsap";

const ScrollFadeBox = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!boxRef.current) return;

      if (window.scrollY > 150) {
        gsap.to(boxRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ProjectHeader
        name="ScrollFadeBox"
        description="scroll하면 상단에서 아래로 살짝 나타나는 Box 애니메이션"
      />
      <div className={styles.container}>
        <div ref={boxRef} className={styles.box}>
          Box
        </div>
        <div className={styles.space}></div>
      </div>
    </>
  );
};

export default ScrollFadeBox;
