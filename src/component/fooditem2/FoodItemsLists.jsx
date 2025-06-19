import { useState } from "react";
import styles from "./Fragments.module.css";
import Item from "./Item";
const FoodItemsLists = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (item) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <>
      <ul className={`${styles.listGroup} list-group`}>
        {items.map((item) => (
          <Item
            key={item}
            foodItem={item}
            bought={activeItems.includes(item)}
            //handleBuyClickButton={() => `${item} bought `}
            // handleBuyButton={() => console.log(`${item} bought`)}
            handleBuyButton={(event) => onBuyButton(item, event)}
          />
        ))}
      </ul>
    </>
  );
};
export default FoodItemsLists;
