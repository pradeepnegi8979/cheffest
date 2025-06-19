import { useContext } from "react";
import styles from "./ToDo.module.css";
import { TodoItemsStore } from "../../store/todoItemsStore";
const WelcomeMessage = () => {
const { todoItems } = useContext(TodoItemsStore);
//const todoItems = contextObj.todoItems;
return (
    <div>
      {todoItems?.length == 0 && (
        <div className={styles.messageOuter}>
          <h2 className={styles.welcomeMessage}>Enjoy your day</h2>
        </div>
      )}
    </div>
  );
};
export default WelcomeMessage;
