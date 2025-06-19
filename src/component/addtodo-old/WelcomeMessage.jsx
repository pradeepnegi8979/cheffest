import styles from "./Todo.module.css";
const WelcomeMessage = () => {
  return (
    <>
      <div className={styles.messageOuter}>
        <h2 className={styles.welcomeMessage}>Enjoy your day</h2>
      </div>
    </>
  );
};
export default WelcomeMessage;
