import styles from "./RotateBoxMouseover.module.css";
import ProjectHeader from "../ProjectHeader";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const RotateBoxMouseover = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.play();
  };

  useEffect(() => {
    if (!boxRef.current) return;

    const tween = gsap.to(boxRef.current, {
      rotation: 360,
      duration: 3,
      repeat: -1,
    });

    tweenRef.current = tween;

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <>
      <ProjectHeader
        name={"3. RotateBoxMouseover"}
        description={"box 위에 마우스를 올리면 멈추고, 떼면 다시 동작"}
      />
      <div
        ref={boxRef}
        className={styles.box}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        box
      </div>
    </>
  );
};

export default RotateBoxMouseover;
