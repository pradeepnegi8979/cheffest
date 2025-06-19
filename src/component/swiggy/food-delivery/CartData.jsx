import { useSelector } from "react-redux";

import styles from "./foodmenu.module.css";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

import store from "../../../store/store";
import { addToCart } from "../../../features/cart/cartSlice";

const CartData = () => {
  const gstRate = 18;
  const deliveryPartnerFee = 45;
  const platformFee = 8;
  const restaurantCharge = 10;
  const hotelInformation = useSelector((state) => state.cart);
  //console.log(hotelInformation, "sdfsadfadsfadsfsadfsdds");

  const cart = useSelector((state) => state.cart.cart);

  const itemsPrice = cart.reduce(
    (total, item) => total + item.itemPrice * item.count,
    0
  );

  const gst = (itemsPrice * gstRate) / 100;
  const totalPrice =
    itemsPrice + deliveryPartnerFee + platformFee + restaurantCharge + gst;

  const handleIncrement = (itemList) => {
    console.log(itemList, "list of item");

    const newCount = itemList.count + 1;
    const newValue = { ...itemList, count: newCount };

    // Use map to update the specific item in the cart
    const updated = cart.map((item) => {
      if (item.item_id === newValue.item_id) {
        return { ...item, ...newValue }; // Update only the matching item
      } else {
        return item; // Keep the other items unchanged
      }
    });

    store.dispatch(addToCart(updated));
    // console.log(updated);
  };

  const handleDecrement = (itemList) => {
    if (itemList.count <= 1) {
      // Remove the item from the cart if the count reaches 0
      const updated = cart.filter((item) => item.item_id !== itemList.item_id);
      store.dispatch(addToCart(updated));
    } else {
      // Decrement the count for the matching item
      const updated = cart.map((item) =>
        item.item_id === itemList.item_id
          ? { ...item, count: item.count - 1 }
          : item
      );
      console.log(updated, "fadsfadsfadsfdsa==>>>>");

      store.dispatch(addToCart(updated));
    }
  };
  return (
    <>
      <div className={styles.resdtl}>
        <div className={styles.resImg}>
          <img src={hotelInformation.hotelInformation.hotel_image} alt="" />
        </div>
        <div className={styles.nameDtl}>
          <h4>{hotelInformation.hotelInformation.hotel_name}</h4>
          <p>{hotelInformation.hotelInformation.hotel_location}</p>
        </div>
      </div>
      <div>
        <ul className={styles.CartList}>
          {cart.map((itemList) => (
            <li key={itemList.item_id}>
              <div className={styles.vgctPrice}>
                <span
                  className={`${
                    itemList.itemSymbol === "veg"
                      ? styles.vegIcon
                      : styles.nonVegIcon
                  }`}
                ></span>
                <span>{itemList.itemName}</span>
              </div>

              <div
                className={styles.quantityBtn}
                style={{
                  width: "100px",
                  transform: "translate(0px, 0px)",
                }}
              >
                <span
                  className="incrementBtn"
                  onClick={() => handleDecrement(itemList)}
                >
                  <FiMinus />
                </span>
                <span>{itemList?.count}</span>
                <span
                  className="dicrementBtn"
                  onClick={() => handleIncrement(itemList)}
                >
                  <IoMdAdd />
                </span>
              </div>

              <div>
                <span>Rs{itemList?.itemPrice * itemList?.count} </span>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.BillDetails}>
          <h3>Bill Details</h3>
          <ul>
            <li>
              <div className={styles.totBill}>
                <span>Item Total</span>
                <span>Rs{itemsPrice}</span>
              </div>
              <div className={styles.totBill}>
                <span>Delivery partner fee</span>
                <span> Rs{deliveryPartnerFee}</span>
              </div>
            </li>
            <li>
              <div className={styles.totBill}>
                <span>Delivery Tip</span>
                <span>Add tip</span>
              </div>
              <div className={styles.totBill}>
                <span>Platform fee</span>
                <span> Rs{platformFee}</span>
              </div>
              <div className={styles.totBill}>
                <span>GST and Restaurant Charges</span>
                <span>Rs{gst} </span>
              </div>
            </li>
            <li>
              <div className={styles.totBillPay}>
                <span>TO PAY</span>
                <span>Rs{itemsPrice ? totalPrice : 0}</span>
              </div>
            </li>
          </ul>
          <div className="paySec">
            <button className={styles.payBtn}> Confirm</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartData;
