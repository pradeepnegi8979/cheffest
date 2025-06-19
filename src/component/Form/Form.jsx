import styles from "../swiggy/food-delivery/foodmenu.module.css";

import { FaRegUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Login from "./Login";
import SignUp from "./SignUp";
import { useState } from "react";
//import { useState } from "react";

const FormSection = () => {
  const [activeBtn, setactiveBtn] = useState("login");
  const loginFormOpen = () => {
    setactiveBtn("login");
  };
  const signUpFormOpen = () => {
    setactiveBtn("signup");
  };

  return (
    <>
      <div className={styles.accountouter}>
        <ul>
          <li className={styles.mainOuter}>
            <div className={styles.accicon}>
              <FaRegUser />
            </div>
            <div className={styles.acouter}>
              <h4>Account</h4>
              <h6>
                To place your order now, log in to your existing account or sign
                up.
              </h6>
              <div className={styles.loginSignupBtn}>
                <button
                  className={`${styles.accountBtn} ${
                    activeBtn === "login" && "active"
                  }`}
                  onClick={loginFormOpen}
                >
                  <p>Have an account:</p>
                  <h5>LOG IN</h5>
                </button>
                <button
                  className={`${styles.accountBtn} ${
                    activeBtn === "signup" && "active"
                  }`}
                  onClick={signUpFormOpen}
                >
                  <p>New to swiggy?</p>
                  <h5>SIGN UP</h5>
                </button>
              </div>
              {activeBtn === "login" ? <Login /> : <SignUp />}
            </div>
          </li>

          <li className={styles.mainOuter}>
            <div className={styles.accicon}>
              <IoLocationSharp />
            </div>
            <div className={styles.acouter}>
              <h4>Delivery address</h4>
              <h6>
                To place your order now, log in to your existing account or sign
                up.
              </h6>
              <div className={styles.loginSignupBtn}>
                <button className={styles.accountBtn}>
                  <p>Have an account:</p>
                  <h5>LOG IN</h5>
                </button>
                <button className={styles.accountBtn}>
                  <p>New to swiggy?</p>
                  <h5>SIGN UP</h5>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default FormSection;
