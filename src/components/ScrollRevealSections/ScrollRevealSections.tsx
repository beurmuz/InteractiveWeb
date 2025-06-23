import ProjectHeader from "../ProjectHeader";
import styles from "./ScrollRevealSections.module.css";

const ScrollRevealSections = () => {
  return (
    <>
      <ProjectHeader
        name="ScrollRevealSections"
        description="긴 페이지를 스크롤할 때마다 각 섹션이 아래에서 위로 서서히 나타나는 애니메이션"
      />
      <div className={styles.container}>
        <section className="section">Section 1</section>
        <section className="section">Section 2</section>
        <section className="section">Section 3</section>
      </div>
    </>
  );
};
export default ScrollRevealSections;
