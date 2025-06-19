// import AppName from "./AppName";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";

import WelcomeMessage from "./WelcomeMessage";
import TodoItemsContextProvider from "../../store/todoItemsStore";

function Todo() {
  return (
    <TodoItemsContextProvider>
      <div className="Todo-Container">
        <center>
          <div className="container">
            <div className="row ">
              <div className="col-md-8 offset-md-2 pt-5">
                {/* <AppName /> */}
                <AddTodo />
                <WelcomeMessage />
                <TodoItems />
              </div>
            </div>
          </div>
        </center>
      </div>
    </TodoItemsContextProvider>
  );
}
export default Todo;
