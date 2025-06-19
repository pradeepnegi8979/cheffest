import styles from "./Calculator.module.css";
function ButtonContainer({ onButtonClick }) {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div id="button-container" className={styles.buttonContainer}>
      {buttons.map((buttons, button) => (
        <button
          key={button}
          className={styles.buttonStyle}
          onClick={() => onButtonClick(buttons)}
        >
          {buttons}
        </button>
      ))}
    </div>
  );
}
export default ButtonContainer;
