import { useEffect, useRef } from "react";
import ProjectHeader from "../ProjectHeader";
import styles from "./ScrollRevealSectionsEach.module.css";
import gsap from "gsap";

const ScrollRevealSectionsEach = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = containerRef.current.querySelectorAll(
      `.${styles.section}`
    );

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
            });
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
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

export default ScrollRevealSectionsEach;
