import styles from "./Fragments.module.css";
const Container = ({ children }) => {
  return <div className={styles.containerCss}>{children}</div>;
};
export default Container;
