import { useDispatch, useSelector } from "react-redux";
import {
  setHotelInformation,
  addItemToCart,
  incrementItem,
  decrementItem,    // Make sure to import decrementItem here
} from "../../../features/cart/cartSlice";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import styles from "./foodmenu.module.css";
import { toast, ToastContainer } from "react-toastify";

const FoodMenu = ({ currentData }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const hotelInformation = useSelector((state) => state.cart.hotelInformation);

  const getCount = (item) => {
    const cartItem = cart.find((i) => i.item_id === item.item_id);
    return cartItem ? cartItem.count : 0;
  };

  const handleAddToCart = (item) => {
    if (!hotelInformation.hotel_id) {
      dispatch(setHotelInformation(currentData));
    }
    dispatch(addItemToCart(item));
    toast.success(`Item Added: ${item.itemName}`);
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.foodMenuOuter}>
        <div className="accordian">
          <div className="accordianList">
            <div className={styles.accorHeading}>
              <h4>Crazy Deal Combos ({currentData.hotel_item_lists.length})</h4>
            </div>
            <div className={styles.accordianData}>
              <ul>
                {currentData?.hotel_item_lists?.map((item) => (
                  <li key={item.item_id}>
                    <div className={styles.itemLabel}>
                      <label
                        className={`${
                          item.itemSymbol === "veg"
                            ? styles.vegIcon
                            : styles.nonVegIcon
                        }`}
                      ></label>
                      <p className={styles.itemName}>{item.itemName}</p>
                      <p className={styles.itemPrice}>Rs.{item.itemPrice}</p>
                      <p className={styles.itemDescription}>{item.itemDescription}</p>
                    </div>
                    <div className={styles.itemImage}>
                      <img src={item.itemImage} alt={item.itemName} />
                      {!getCount(item) ? (
                        <button
                          className={styles.addBtn}
                          onClick={() => handleAddToCart(item)}
                        >
                          ADD
                        </button>
                      ) : (
                        <div className={styles.quantityBtn}>
                          {/* Decrement button fixed here */}
                          <span
                            className="decrementBtn"
                            onClick={() => dispatch(decrementItem(item.item_id))}
                          >
                            <FiMinus />
                          </span>

                          <span>{getCount(item)}</span>

                          <span
                            className="incrementBtn"
                            onClick={() => dispatch(addItemToCart(item))}
                          >
                            <IoMdAdd />
                          </span>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodMenu;
