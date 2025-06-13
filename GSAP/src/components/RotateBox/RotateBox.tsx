import { useEffect, useRef } from "react";
import styles from "./RotateBox.module.css";
import gsap from "gsap";
import ProjectHeader from "./ProjectHeader";

const RotateBox = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boxRef) return;

    gsap.to(boxRef.current, {
      rotation: 360,
      duration: 5,
      repeat: -1,
    });
  }, []);

  return (
    <>
      <ProjectHeader
        name={"1. RotateBox"}
        description={"3초동안 회전하는 Box"}
      />
      <div ref={boxRef} className={styles.box}>
        Box
      </div>
    </>
  );
};

export default RotateBox;
