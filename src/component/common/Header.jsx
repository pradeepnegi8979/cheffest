import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import mainLogo from "../../assets/mainLogo.png";
import styles from "../common/header.module.css";
import { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { login, signup } from "../../features/auth/authAction";

// import { SiAsda } from "react-icons/si";
function Header() {
  const { cart } = useSelector((state) => state.cart);
  const { userInfo, isLogedIn } = useSelector((state) => state.login);
  const [activeTab, setActiveTab] = useState("login");

  const showSignupForm = () => {
    setActiveTab("signup");
  };
  const showLoginForm = () => {
    setActiveTab("login");
  };
  //const modalOpen = () => {};
  const dispatch = useDispatch();
  const userNumberElement = useRef();
  const userNameElement = useRef();
  const userEmailElement = useRef();

  const handleSignup = (e) => {
    e.preventDefault();

    const userNumber = userNumberElement.current.value;
    const userName = userNameElement.current.value;
    const userEmail = userEmailElement.current.value;

    dispatch(signup({ userNumber, userName, userEmail }));
    userNumberElement.current.value = "";
    userNameElement.current.value = "";
    userEmailElement.current.value = "";
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert("working login");

    const userNumber = userNumberElement.current.value;
    const userName = userNameElement.current.value;
    const userEmail = userEmailElement.current.value;
    dispatch(login({ userNumber, userName, userEmail }));
  };

  console.log("bds", isLogedIn);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <Link to={"/"} className="navbar-brand header-logo">
              <img src={mainLogo} alt="Logo" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end w-100">
                <li className="nav-item">
                  <Link
                    to={"/"}
                    className="nav-link active"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="currentColor"
                    >
                      <path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z"></path>
                    </svg>
                    Cheffest Corporate
                  </Link>
                </li>
                {/* {localStorage.getItem("userName")} */}
                <li className="nav-item">
                  <Link
                    to={"/home"}
                    className="nav-link active"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="currentColor"
                    >
                      <path d="M10.0544 2.0941C11.1756 1.13856 12.8248 1.13855 13.9461 2.09411L15.2941 3.24286C15.4542 3.37935 15.6533 3.46182 15.8631 3.47856L17.6286 3.61945C19.0971 3.73663 20.2633 4.9028 20.3805 6.37131L20.5214 8.13679C20.5381 8.34654 20.6205 8.54568 20.757 8.70585L21.9058 10.0539C22.8614 11.1751 22.8614 12.8243 21.9058 13.9456L20.757 15.2935C20.6206 15.4537 20.538 15.6529 20.5213 15.8627L20.3805 17.6281C20.2633 19.0967 19.0971 20.2628 17.6286 20.3799L15.8631 20.5208C15.6533 20.5376 15.4542 20.6201 15.2941 20.7566L13.9461 21.9053C12.8248 22.8609 11.1756 22.8608 10.0543 21.9053L8.70631 20.7566C8.54615 20.6201 8.34705 20.5376 8.1373 20.5209L6.37184 20.3799C4.9033 20.2627 3.73716 19.0966 3.61997 17.6281L3.47906 15.8627C3.46232 15.6529 3.37983 15.4538 3.24336 15.2936L2.0946 13.9455C1.13905 12.8243 1.13904 11.1752 2.09458 10.0539L3.24334 8.70589C3.37983 8.54573 3.46234 8.34654 3.47907 8.13678L3.61996 6.3713C3.73714 4.90278 4.90327 3.73665 6.3718 3.61946L8.13729 3.47857C8.34705 3.46183 8.54619 3.37935 8.70636 3.24286L10.0544 2.0941ZM12.6488 3.61632C12.2751 3.29782 11.7253 3.29781 11.3516 3.61632L10.0036 4.76509C9.5231 5.17456 8.92568 5.42201 8.29637 5.47223L6.5309 5.61312C6.04139 5.65219 5.65268 6.04089 5.61362 6.53041L5.47272 8.29593C5.4225 8.92521 5.17505 9.52259 4.76559 10.0031L3.61683 11.3511C3.29832 11.7248 3.29831 12.2746 3.61683 12.6483L4.76559 13.9963C5.17506 14.4768 5.4225 15.0743 5.47275 15.7035L5.61363 17.469C5.65268 17.9585 6.04139 18.3473 6.53092 18.3863L8.29636 18.5272C8.92563 18.5774 9.5231 18.8249 10.0036 19.2344L11.3516 20.3831C11.7254 20.7016 12.2751 20.7016 12.6488 20.3831L13.9969 19.2343C14.4773 18.8249 15.0747 18.5774 15.704 18.5272L17.4695 18.3863C17.959 18.3472 18.3478 17.9585 18.3868 17.469L18.5277 15.7035C18.5779 15.0742 18.8253 14.4768 19.2349 13.9964L20.3836 12.6483C20.7022 12.2746 20.7021 11.7249 20.3836 11.3511L19.2348 10.0031C18.8253 9.52259 18.5779 8.92519 18.5277 8.2959L18.3868 6.53041C18.3478 6.0409 17.959 5.65219 17.4695 5.61312L15.704 5.47224C15.0748 5.42203 14.4773 5.17455 13.9968 4.76508L12.6488 3.61632ZM14.8284 7.75718L16.2426 9.1714L9.17154 16.2425L7.75733 14.8282L14.8284 7.75718ZM10.2322 10.232C9.64641 10.8178 8.69667 10.8178 8.11088 10.232C7.52509 9.6463 7.52509 8.69652 8.11088 8.11073C8.69667 7.52494 9.64641 7.52494 10.2322 8.11073C10.818 8.69652 10.818 9.6463 10.2322 10.232ZM13.7677 15.8889C14.3535 16.4747 15.3032 16.4747 15.889 15.8889C16.4748 15.3031 16.4748 14.3534 15.889 13.7676C15.3032 13.1818 14.3535 13.1818 13.7677 13.7676C13.1819 14.3534 13.1819 15.3031 13.7677 15.8889Z"></path>
                    </svg>
                    Offers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/contact-us"}
                    className="nav-link active"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="currentColor"
                    >
                      <path d="M3.16113 4.46875C5.58508 2.0448 9.44716 1.9355 12.0008 4.14085C14.5528 1.9355 18.4149 2.0448 20.8388 4.46875C23.2584 6.88836 23.3716 10.741 21.1785 13.2947L13.4142 21.0858C12.6686 21.8313 11.4809 21.8652 10.6952 21.1874L10.5858 21.0858L2.82141 13.2947C0.628282 10.741 0.741522 6.88836 3.16113 4.46875ZM4.57534 5.88296C2.86819 7.59011 2.81942 10.3276 4.42902 12.0937L4.57534 12.2469L12 19.6715L17.3026 14.3675L13.7677 10.8327L12.7071 11.8934C11.5355 13.0649 9.636 13.0649 8.46443 11.8934C7.29286 10.7218 7.29286 8.8223 8.46443 7.65073L10.5656 5.54823C8.85292 4.17713 6.37076 4.23993 4.7286 5.73663L4.57534 5.88296ZM13.0606 8.71139C13.4511 8.32086 14.0843 8.32086 14.4748 8.71139L18.7168 12.9533L19.4246 12.2469C21.1819 10.4896 21.1819 7.64032 19.4246 5.88296C17.7174 4.17581 14.9799 4.12704 13.2139 5.73663L13.0606 5.88296L9.87864 9.06494C9.51601 9.42757 9.49011 9.99942 9.80094 10.3919L9.87864 10.4792C10.2413 10.8418 10.8131 10.8677 11.2056 10.5569L11.2929 10.4792L13.0606 8.71139Z"></path>
                    </svg>
                    Help
                  </Link>
                </li>
                <li className="nav-item">
                  {isLogedIn > 0 ? (
                    <Link className="nav-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="currentColor"
                      >
                        <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
                      </svg>
                      {userInfo.userName}
                    </Link>
                  ) : (
                    <Link
                      data-toggle="modal"
                      data-target="#myModal"
                      className="nav-link active"
                      aria-current="page"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="currentColor"
                      >
                        <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
                      </svg>
                      sign in
                    </Link>
                  )}
                </li>
                <li className="nav-item position-relative">
                  <Link
                    to={"/cart"}
                    className="nav-link active"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="currentColor"
                    >
                      <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path>
                    </svg>
                    Cart ({cart?.length})
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="modal fade" id="myModal">
        <div className={`${styles.loginModal} modal-dialog modal-lg`}>
          <div className={`${styles.ModalContentCstm} modal-content`}>
            <div className="modal-header">
              <button
                type="button"
                className={styles.closeBtn}
                data-dismiss="modal"
              >
                <IoClose />
              </button>
            </div>
            <div className="modal-body">
              {activeTab === "login" ? (
                <div className={styles.loginSec}>
                  <div className={styles.topSection}>
                    <h4>Login</h4>
                    <p>
                      or{" "}
                      <span onClick={() => showSignupForm()}>
                        create an account
                      </span>
                    </p>
                  </div>
                  <div className={styles.mainSec}>
                    <form onSubmit={handleLogin}>
                      <div className={styles.formGroup}>
                        <p>Phone Number</p>
                        <input
                          type="text"
                          className={`form-control ${styles.formInput}`}
                          placeholder="Phone Number"
                          // ref={userLoginNumberElement}
                          id="userLoginNumber"
                        />
                      </div>
                      <button type="submit" className={styles.loginBtn}>
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <div className={styles.loginSec}>
                  <div className={styles.topSection}>
                    <h4>Signup</h4>
                    <p>
                      or{" "}
                      <span onClick={() => showLoginForm()}>
                        login to your account
                      </span>
                    </p>
                  </div>
                  <div className={styles.mainSec}>
                    <form onSubmit={handleSignup}>
                      <div className={styles.formGroup}>
                        <p>Phone Number</p>
                        <input
                          type="text"
                          className={`form-control ${styles.formInput}`}
                          placeholder="Phone Number"
                          ref={userNumberElement}
                          id="userNumber"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <p>Name</p>
                        <input
                          type="text"
                          className={`form-control ${styles.formInput}`}
                          placeholder="Name"
                          ref={userNameElement}
                          id="userName"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <p>Email</p>
                        <input
                          type="Email"
                          className={`form-control ${styles.formInput}`}
                          placeholder="Email"
                          ref={userEmailElement}
                          id="userEmail"
                        />
                      </div>
                      <button type="submit" className={styles.loginBtn}>
                        Continue
                      </button>
                    </form>
                  </div>
                </div>
              )}
              <p className={styles.cstmFont}>
                By clicking on Login I accept the
                <span> Terms & Conditions</span> &<span> Privacy Policy </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
