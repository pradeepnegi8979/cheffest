import Header from "../../common/Header";
import { useSelector } from "react-redux";
import styles from "./foodmenu.module.css";

import FormSection from "../../Form/Form";
import CartData from "./CartData";
import NoCartData from "./noCartData";
import Footer from "../../common/Footer";
import AddressData from "./Address";

//import { useState } from "react";

const CheckOut = () => {
  const cart = useSelector((state) => state.cart.cart);
  const { isLogedIn } = useSelector((state) => state.login);
  return (
    <>
      <Header />
      <section className={styles.checkout}>
        <div className="container">
          <div className="row">
            {cart.length === 0 ? (
              <NoCartData />
            ) : (
              <>
                <div className="col-8">
                  {isLogedIn ? <AddressData /> : <FormSection />}
                </div>
                <div className="col-4">
                  <CartData />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default CheckOut;
