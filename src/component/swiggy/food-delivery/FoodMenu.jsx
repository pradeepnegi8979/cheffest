import { IoIosArrowUp } from "react-icons/io";
import styles from "./foodmenu.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  setHotelInformation,
} from "../../../features/cart/cartSlice";

import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";

const FoodMenu = ({ currentData }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cart); // get items from redux
  const hotelInfo = useSelector((state) => state.cart.hotelInfo); // get hotel info from redux

  const handleAddToCart = (item, data) => {
    if (!hotelInfo) {
      dispatch(setHotelInformation(data)); // only set hotel info once
    }

    const existingItem = cartItems.find((i) => i.item_id === item.item_id);
    if (existingItem) {
      dispatch(
        addToCart(
          cartItems.map((i) =>
            i.item_id === item.item_id
              ? { ...i, count: i.count + 1 }
              : i
          )
        )
      );
    } else {
      dispatch(addToCart([...cartItems, { ...item, count: 1 }]));
    }

    toast.success(`Item Added: ${item.itemName}`);
  };

  const handleIncrement = (item) => {
    const updatedItems = cartItems.map((i) =>
      i.item_id === item.item_id ? { ...i, count: i.count + 1 } : i
    );
    dispatch(addToCart(updatedItems));
  };

  const handleDecrement = (item) => {
    const existingItem = cartItems.find((i) => i.item_id === item.item_id);

    if (!existingItem) return;

    if (existingItem.count === 1) {
      const filteredItems = cartItems.filter(
        (i) => i.item_id !== item.item_id
      );
      dispatch(addToCart(filteredItems));
    } else {
      const updatedItems = cartItems.map((i) =>
        i.item_id === item.item_id
          ? { ...i, count: i.count - 1 }
          : i
      );
      dispatch(addToCart(updatedItems));
    }

    toast.error(`Item Removed: ${item.itemName}`);
  };

  const getCount = (item) =>
    cartItems.find((i) => i.item_id === item.item_id)?.count ?? 0;

  return (
    <>
      <ToastContainer />
      <div className={styles.foodMenuOuter}>
        <div className="accordian">
          <div className="accordianList">
            <div className={styles.accorHeading}>
              <h4>
                Crazy Deal Combos ({currentData.hotel_item_lists.length})
              </h4>
              <IoIosArrowUp />
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
                      <p className={styles.itemDescription}>
                        {item.itemDescription}
                      </p>
                    </div>

                    <div className={styles.itemImage}>
                      <img src={item.itemImage} alt={item.itemName} />

                      {!getCount(item) ? (
                        <button
                          className={styles.addBtn}
                          onClick={() =>
                            handleAddToCart(item, currentData)
                          }
                        >
                          ADD
                        </button>
                      ) : (
                        <div className={styles.quantityBtn}>
                          <span
                            className="decrementBtn"
                            onClick={() => handleDecrement(item)}
                          >
                            <FiMinus />
                          </span>
                          <span>{getCount(item)}</span>
                          <span
                            className="incrementBtn"
                            onClick={() => handleIncrement(item)}
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
