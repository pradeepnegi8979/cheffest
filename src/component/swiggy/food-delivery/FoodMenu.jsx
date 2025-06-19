import { IoIosArrowUp } from "react-icons/io";
import styles from "./foodmenu.module.css";

import { useDispatch } from "react-redux";
import {
  addToCart,
  setHotelInformation,
} from "../../../features/cart/cartSlice";

import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const FoodMenu = ({ currentData }) => {
  // const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  // const { cart } = useSelector((state) => state.cart);
  //const { hotelInfo } = useSelector((state) => state.cart);
  // const items = [{ list }];
  // const handleIncrement = () => setQuantity((prev) => prev + 1);
  // const handleDecrement = () => quantity > 1 && setQuantity((prev) => prev - 1);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    dispatch(addToCart(selectedItems));
  }, [selectedItems]);

  const handleAddToCart = (items, data) => {
    if (selectedItems?.length === 0) {
      dispatch(setHotelInformation(data));
      setSelectedItems([{ ...items, count: 1 }]); // Add the count key
    } else {
      const existingIndex = selectedItems.findIndex(
        (item) => item.item_id === items.item_id
      );

      if (existingIndex !== -1) {
        // Item already exists, increment the count
        setSelectedItems((prev) =>
          prev.map((item, index) =>
            index === existingIndex ? { ...item, count: item.count + 1 } : item
          )
        );
      } else {
        // Item does not exist, add with count 1
        setSelectedItems((prev) => [...prev, { ...items, count: 1 }]);
      }
    }
    toast.success(`Item Added ${items.itemName}`);

    //setQuantity(1);
  };
  const handleIncrement = (items) => {
    if (selectedItems?.length === 0) {
      setSelectedItems([{ ...items, count: 1 }]); // Add the count key
    } else {
      const existingIndex = selectedItems.findIndex(
        (item) => item.item_id === items.item_id
      );

      if (existingIndex !== -1) {
        // Item already exists, increment the count
        setSelectedItems((prev) =>
          prev.map((item, index) =>
            index === existingIndex ? { ...item, count: item.count + 1 } : item
          )
        );
      } else {
        // Item does not exist, add with count 1
        setSelectedItems((prev) => [...prev, { ...items, count: 1 }]);
      }
    }
  };
  const handleDecrement = (items) => {
    if (!selectedItems || selectedItems.length === 0) {
      // If the cart is empty, ensure no negative values
      console.log("Cart is empty. Cannot decrement.");
      return;
    }

    const existingIndex = selectedItems.findIndex(
      (item) => item.item_id === items.item_id
    );

    if (existingIndex !== -1) {
      setSelectedItems((prev) =>
        prev.map((item, index) =>
          index === existingIndex
            ? {
                ...item,
                count: Math.max(item.count - 1, 0), // Ensure count doesn't go below 0
              }
            : item
        )
      );
    } else {
      console.log("Item not found in cart. Cannot decrement.");
    }

    // Optional: Remove item from the cart if count reaches 0

    setSelectedItems((prev) => prev.filter((item) => item.count > 0));
    toast.error(`Item Remove ${items.itemName}`);
  };

  const getCount = (itemss) => {
    return selectedItems?.find((s) => s?.item_id === itemss?.item_id)?.count;

    // selectedItems?.filter((item) => {
    //   return 1;
    //   // if (item?.item_id === itemss?.item_id) {
    //   //   return 1;
    //   // }
    // });
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.foodMenuOuter}>
        <div className="accordian">
          <div className="accordianList">
            <div className={styles.accorHeading}>
              <h4>Crazy Deal Combos ({currentData.hotel_item_lists.length})</h4>
              <IoIosArrowUp />
            </div>
            <div className={styles.accordianData}>
              <ul>
                {currentData?.hotel_item_lists?.map((itemList) => (
                  <li key={itemList.item_id}>
                    <div className={styles.itemLabel}>
                      <label
                        className={`${
                          itemList.itemSymbol === "veg"
                            ? styles.vegIcon
                            : styles.nonVegIcon
                        }`}
                      ></label>
                      <p className={styles.itemName}>{itemList.itemName}</p>
                      <p className={styles.itemPrice}>
                        Rs.{itemList.itemPrice}
                      </p>
                      <p className={styles.itemDescription}>
                        {itemList.itemDescription}
                      </p>
                    </div>
                    <div className={styles.itemImage}>
                      <img src={itemList.itemImage} />

                      {!getCount(itemList) ? (
                        <button
                          className={styles.addBtn}
                          onClick={() => handleAddToCart(itemList, currentData)}
                        >
                          ADD
                        </button>
                      ) : (
                        <div className={styles.quantityBtn}>
                          <span
                            className="incrementBtn"
                            onClick={() => handleDecrement(itemList)}
                          >
                            <FiMinus />
                          </span>
                          <span>{getCount(itemList) ?? 0}</span>
                          <span
                            className="dicrementBtn"
                            onClick={() => handleIncrement(itemList)}
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
