import { useEffect, useRef } from "react";
import ProjectHeader from "../ProjectHeader";
import styles from "./ScrollSlideUpCards.module.css";
import gsap from "gsap";

const ScrollSlideUpCards = () => {
  const cardListRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardListRef.current) return;

      //   console.log("이벤트 발생")
      const cards = cardListRef.current.querySelectorAll(`.${styles.card}`);

      if (scrollY > 100 && !hasAnimated.current) {
        hasAnimated.current = true;

        cards.forEach((card, idx) => {
          gsap.fromTo(
            card,
            {
              y: -50,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.in",
              delay: idx * 0.2,
            }
          );
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
        name="ScrollSlideUpCards"
        description="스크롤 시 아래에서 위로 슬라이드 등장하는 카드"
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
export default ScrollSlideUpCards;
