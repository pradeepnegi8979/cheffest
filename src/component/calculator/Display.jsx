import styles from "./Calculator.module.css";
function Display({ displayValue }) {
  return (
    <input
      type="number"
      className={`${styles["display-screen"]} form-control`}
      id="display"
      value={displayValue}
      readOnly
    ></input>
  );
}
export default Display;
