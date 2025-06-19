import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item, itemsl) => (
          <TodoItem
            key={itemsl}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
};
export default TodoItems;
