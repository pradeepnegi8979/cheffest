import EmptyImage from "../../common/image";
import FoodDelivery from "./FoodDelivery";
import styles from "./foodmenu.module.css";
const NoCartData = () => {
  return (
    <>
      <div className={styles.noData}>
        <img src={EmptyImage.emptycard} />
        <h4>Your cart is empty</h4>
        <p>You can view more restaurants</p>
      </div>
      <FoodDelivery />
    </>
  );
};
export default NoCartData;
