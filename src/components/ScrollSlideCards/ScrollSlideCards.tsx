import { useEffect, useRef } from "react";
import ProjectHeader from "../ProjectHeader";
import styles from "./ScrollSlideCards.module.css";
import gsap from "gsap";

const ScrollSlideCards = () => {
  const cardListRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardListRef.current) return;

      const cards = cardListRef.current.querySelectorAll(`.${styles.card}`);

      if (window.scrollY > 100 && !hasAnimated.current) {
        hasAnimated.current = true;

        cards.forEach((card, idx) => {
          gsap.fromTo(
            card,
            {
              x: idx % 2 === 0 ? -80 : 80,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              delay: idx * 0.2,
            }
          );
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 이벤트 회수
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ProjectHeader
        name="ScrollSlideCards"
        description="Scroll 시 좌우로 슬라이딩 등장하는 카드"
      />
      <div ref={cardListRef} className={styles.cardList}>
        <div className={styles.card}>card 1</div>
        <div className={styles.card}>card 2</div>
        <div className={styles.card}>card 3</div>
        <div className={styles.card}>card 4</div>
        <div className={styles.card}>card 5</div>
      </div>
      <div className={styles.space}></div>
    </>
  );
};
export default ScrollSlideCards;
