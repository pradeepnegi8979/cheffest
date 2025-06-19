import styles from "./modal.module.css";
const Modal = () => {
  return (
    <>
      <div className={styles.modalOuter}>
        <div className="container">
          <div className={styles.modalInner}>
            <h4>Items already in cart</h4>
            <p>
              Your cart contains items from other restaurant. Would you like to
              reset your cart for adding items from this restaurant?
            </p>
            <div className={styles.buttonSec}>
              <button className={styles.exisBtn}>NO</button>
              <button className={styles.exisBtn}>YES, START A FRESH</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.overlay}></div>
    </>
  );
};
export default Modal;
