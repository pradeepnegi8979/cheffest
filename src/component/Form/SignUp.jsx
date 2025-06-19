import styles from "./form.module.css";
const SignUp = () => {
  const submitForm = (e) => {
    e.preventDefault();
    console.log("clicked signup");
  };
  return (
    <div className={styles.LoginForm}>
      <p> Sign up or log in to your account </p>
      <form onSubmit={submitForm}>
        <div className={styles.formGroup}>
          <input
            type="phone"
            className={`form-control ${styles.formInput}`}
            placeholder="Phone Number"
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            className={`form-control ${styles.formInput}`}
            placeholder="Name"
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="mail"
            className={`form-control ${styles.formInput}`}
            placeholder="Email"
          />
        </div>
        <button type="submit" className={styles.loginBtn}>
          Sign up
        </button>
        <p className={styles.termsPrivacy}>
          By clicking on Login, I accept the
          <b>Terms & Conditions</b>& <b>Privacy Policy</b>
        </p>
      </form>
    </div>
  );
};
export default SignUp;
