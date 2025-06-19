import styles from "./Fragments.module.css";
const FoodInput = ({ handleKeyDown }) => {
  //   const handleOnChange = (event) => {
  //     console.log(event.target.value);
  //   };
  return (
    <>
      <input
        type="text"
        className={`${styles.foodInput} form-control`}
        placeholder="Enter food item here"
        onKeyDown={handleKeyDown}
      ></input>
    </>
  );
};
export default FoodInput;
