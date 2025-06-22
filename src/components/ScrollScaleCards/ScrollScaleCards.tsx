import { useEffect, useRef } from "react";
import ProjectHeader from "../ProjectHeader";
import styles from "./ScrollScaleCards.module.css";
import gsap from "gsap";

const ScrollScaleCards = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      if (window.scrollY > 100 && !hasAnimated.current) {
        hasAnimated.current = true;

        gsap.fromTo(
          cardRef.current,
          {
            scale: 0.5,
            opacity: 0,
          },
          {
            scale: 1.5,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          }
        );
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
        name="ScrollScaleCards"
        description="스크롤하면 카드가 확대되며 등장하는 효과"
      />
      <div ref={cardRef} className={styles.card}>
        card
      </div>
      <div className={styles.space}></div>
    </>
  );
};
export default ScrollScaleCards;
