import { useEffect, useRef } from "react";
import ProjectHeader from "../ProjectHeader";
import styles from "./ScrollRevealSections.module.css";
import gsap from "gsap";

const ScrollRevealSections = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || hasAnimated.current) return;

      const sections = containerRef.current.querySelectorAll(
        `.${styles.section}`
      );

      if (window.scrollY > 100) {
        hasAnimated.current = true;

        sections.forEach((section, idx) => {
          gsap.fromTo(
            section,
            {
              opacity: 0,
              y: 70,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: idx * 0.5,
              ease: "power2.out",
            }
          );
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ProjectHeader
        name="ScrollRevealSections"
        description="긴 페이지를 스크롤할 때마다 각 섹션이 아래에서 위로 서서히 나타나는 애니메이션"
      />
      <div ref={containerRef} className={styles.container}>
        <section className={styles.section}>Section 1</section>
        <section className={styles.section}>Section 2</section>
        <section className={styles.section}>Section 3</section>
        <section className={styles.section}>Section 4</section>
        <div className={styles.space}></div>
      </div>
    </>
  );
};

export default ScrollRevealSections;
