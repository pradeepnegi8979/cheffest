import styles from "./Fragments.module.css";
const Item = ({ foodItem, handleBuyButton, bought }) => {
  // const handleBuyClickButton = (event) => {
  //   console.log(event);
  //   console.log(`${foodItem} item being bought`);
  // };
  return (
    <>
      <li
        className={`${styles.listItem} list-group-item ${bought && "active "}`}
      >
        {foodItem}
        <button
          className={styles.buyBtn}
          onClick={handleBuyButton}
          //onClick={(event) => handleBuyClickButton(event)}
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default Item;
