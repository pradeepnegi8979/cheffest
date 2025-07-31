import { useSelector, useDispatch } from "react-redux";
import {
  incrementItem,
  decrementItem,
  clearCart,
} from "../../../features/cart/cartSlice";
import styles from "./foodmenu.module.css";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

const CartData = () => {
  const dispatch = useDispatch();
  const gstRate = 18;
  const deliveryPartnerFee = 45;
  const platformFee = 8;
  const restaurantCharge = 10;

  const hotelInformation = useSelector((state) => state.cart.hotelInformation);
  const cart = useSelector((state) => state.cart.cart);

  const itemsPrice = cart.reduce(
    (total, item) => total + item.itemPrice * item.count,
    0
  );
  const gst = (itemsPrice * gstRate) / 100;
  const totalPrice =
    itemsPrice + deliveryPartnerFee + platformFee + restaurantCharge + gst;

  const handleIncrement = (itemId) => {
    dispatch(incrementItem(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementItem(itemId));
  };

  return (
    <>
      <div className={styles.resdtl}>
        <div className={styles.resImg}>
          <img src={hotelInformation.hotel_image} alt={hotelInformation.hotel_name} />
        </div>
        <div className={styles.nameDtl}>
          <h4>{hotelInformation.hotel_name}</h4>
          <p>{hotelInformation.hotel_location}</p>
        </div>
      </div>

      <ul className={styles.CartList}>
        {cart.map((item) => (
          <li key={item.item_id}>
            <div className={styles.vgctPrice}>
              <span
                className={`${
                  item.itemSymbol === "veg" ? styles.vegIcon : styles.nonVegIcon
                }`}
              ></span>
              <span>{item.itemName}</span>
            </div>

            <div className={styles.quantityBtn} style={{ width: "100px" }}>
              <span className="incrementBtn" onClick={() => handleDecrement(item.item_id)}>
                <FiMinus />
              </span>
              <span>{item.count}</span>
              <span className="decrementBtn" onClick={() => handleIncrement(item.item_id)}>
                <IoMdAdd />
              </span>
            </div>

            <div>
              <span>Rs{item.itemPrice * item.count}</span>
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
              <span>Rs{deliveryPartnerFee}</span>
            </div>
          </li>
          <li>
            <div className={styles.totBill}>
              <span>Delivery Tip</span>
              <span>Add tip</span>
            </div>
            <div className={styles.totBill}>
              <span>Platform fee</span>
              <span>Rs{platformFee}</span>
            </div>
            <div className={styles.totBill}>
              <span>GST and Restaurant Charges</span>
              <span>Rs{gst.toFixed(2)}</span>
            </div>
          </li>
          <li>
            <div className={styles.totBillPay}>
              <span>TO PAY</span>
              <span>Rs{itemsPrice ? totalPrice.toFixed(2) : 0}</span>
            </div>
          </li>
        </ul>
        <div className="paySec">
          <button className={styles.payBtn}>Confirm</button>
        </div>
      </div>
    </>
  );
};

export default CartData;
