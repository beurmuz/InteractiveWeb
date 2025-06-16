import styles from "./FullScreenLayout.module.css";

const FullScreenLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.layout_wrap}>{children}</div>;
};

export default FullScreenLayout;
