import styles from "./FullScreenLayout.module.css";

const FullScreenLayout = ({ children }) => {
  return <div className={styles.layout_wrap}>{children}</div>;
};

export default FullScreenLayout;
