import styles from "./Fragments.module.css";
const ErrorMessage = ({ items }) => {
  return (
    <>
      {items.length === 0 && (
        <div className={`${styles["error-message"]}`}>I am still hungry.</div>
      )}
    </>
  );
};
export default ErrorMessage;
