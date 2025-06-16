import { useEffect, useRef } from "react";
import ProjectHeader from "../ProjectHeader";
import styles from "./RotateBoxPause.module.css";
import { gsap } from "gsap";

const RotateBoxPause = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const handlePause = () => {
    tweenRef.current?.pause();
  };

  useEffect(() => {
    if (!boxRef.current) return;

    const tween = gsap.to(boxRef.current, {
      rotation: "+=360",
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
        name={"2. RotateBox2"}
        description={"hover시 움직이는 Box가 멈춤"}
      />
      <div ref={boxRef} className={styles.box} onClick={handlePause}>
        Box
      </div>
    </>
  );
};

export default RotateBoxPause;
