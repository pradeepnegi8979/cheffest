export const TodoItemsStore = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
const todoItemReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};
const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };
  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsStore.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsStore.Provider>
  );
};
import React, { useContext, useReducer } from "react";
import { TodoItemsStore } from "./TodoItemsContextProvider";

const TodoList = () => {
  const { todoItems, addNewItem, deleteItem } = useContext(TodoItemsStore);

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todoItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.dueDate}
            <button onClick={() => deleteItem(item.name)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addNewItem("New Task", "2024-12-31")}>
        Add New Item
      </button>
    </div>
  );
};

export default TodoList;
