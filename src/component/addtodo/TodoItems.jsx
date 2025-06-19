import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsStore } from "../../store/todoItemsStore";
const TodoItems = () => {
  const { todoItems, deleteItem } = useContext(TodoItemsStore);

  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick={deleteItem}
          />
        ))}
      </div>
    </>
  );
};
export default TodoItems;
