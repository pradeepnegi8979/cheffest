import { useState } from "react";
import styles from "./Calculator.module.css";
import Display from "./Display";
import ButtonContainer from "./ButtonContainer";
function Calculator() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
    //console.log(buttonText);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-4">
          <div className={styles.calculator}>
            <div id="calculator">
              <Display displayValue={calVal} />
              <ButtonContainer onButtonClick={onButtonClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
