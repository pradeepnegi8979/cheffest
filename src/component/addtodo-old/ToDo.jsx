import AppName from "./AppName";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import { useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
function Todo() {
  const initialTodoItems = [
    { name: "Go to Park", dueDate: "2/12/2010" },
    { name: "Go to School", dueDate: "4/10/2015" },
    { name: "Go to college", dueDate: "4/10/2020" },
    { name: "Go to market", dueDate: "8/12/2022" },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added:${itemName} ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];

    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    console.log(`Item Deleted:${todoItemName}`);
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <div className="Todo-Container">
      <center>
        <div className="container">
          <div className="row ">
            <div className="col-md-8 offset-md-2 pt-5">
              <AppName />
              <AddTodo onNewItem={handleNewItem} />
              {todoItems.length === 0 && <WelcomeMessage />}
              <TodoItems
                todoItems={todoItems}
                onDeleteClick={handleDeleteItem}
              />
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}
export default Todo;
