import { useEffect, useRef } from "react";
import ProjectHeader from "../ProjectHeader";
import styles from "./BoxFadeInSequence.module.css";
import { gsap } from "gsap";

const BoxFadeInSequence = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const boxes = containerRef.current.querySelectorAll(`.${styles.box}`);

    gsap.fromTo(
      boxes,
      // 시작 상태
      {
        opacity: 0,
      },
      // 끝 상태
      {
        opacity: 1,
        duration: 2, // ✅ 더 부드럽고 느리게
        stagger: 0.5, // ✅ 하나씩 간격을 두고
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <>
      <ProjectHeader
        name={"4. BoxFadeInSequence"}
        description={"Box가 순서대로 나타나는 애니메이션"}
      />
      <div ref={containerRef} className={styles.container}>
        <div className={styles.box}>box1</div>
        <div className={styles.box}>box2</div>
        <div className={styles.box}>box3</div>
      </div>
    </>
  );
};

export default BoxFadeInSequence;
