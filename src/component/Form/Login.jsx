import styles from "./form.module.css";
const Login = () => {
  const Lofinform = (e) => {
    e.preventDefault();

    console.log("clicked login");
  };
  return (
    <div className="login_form">
      <p>Enter login details or create an account</p>
      <form onSubmit={Lofinform}>
        <div className={styles.formGroup}>
          <input type="text" className={`form-control ${styles.formInput}`} />
        </div>
        <button type="submit" className={styles.loginBtn}>
          Login
        </button>
        <p className={styles.termsPrivacy}>
          By clicking on Login, I accept the
          <b>Terms & Conditions</b>& <b>Privacy Policy</b>
        </p>
      </form>
    </div>
  );
};
export default Login;
