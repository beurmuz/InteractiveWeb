import { useEffect, useRef } from "react";
import ProjectHeader from "../ProjectHeader";
import styles from "./BounceCardHover.module.css";
import gsap from "gsap";

const BounceCardHover = () => {
  const cardListRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const target = e.currentTarget;
    gsap.to(target, {
      scale: 1.1,
      duration: 1,
      ease: "bounce.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const target = e.currentTarget;
    gsap.to(target, {
      scale: 1,
      ease: "power1.out",
    });
  };

  useEffect(() => {
    if (!cardListRef.current) return;

    const cards = cardListRef.current.querySelectorAll(`.${styles.card}`);

    gsap.to(
      cards,
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
        name={"BounceCardHover"}
        description="Hover시 통통 튀기는 카드 애니메이션"
      />
      <div ref={cardListRef} className={styles.cardList}>
        <div
          className={styles.card}
          onMouseEnter={(e: React.MouseEvent) => handleMouseEnter(e)}
          onMouseLeave={(e: React.MouseEvent) => handleMouseLeave(e)}
        >
          card 1
        </div>
        <div
          className={styles.card}
          onMouseEnter={(e: React.MouseEvent) => handleMouseEnter(e)}
          onMouseLeave={(e: React.MouseEvent) => handleMouseLeave(e)}
        >
          card 2
        </div>
        <div
          className={styles.card}
          onMouseEnter={(e: React.MouseEvent) => handleMouseEnter(e)}
          onMouseLeave={(e: React.MouseEvent) => handleMouseLeave(e)}
        >
          card 3
        </div>
      </div>
    </>
  );
};

export default BounceCardHover;
