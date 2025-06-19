import { useContext, useState } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { TodoItemsStore } from "../../store/todoItemsStore";
function AddTodo() {
  const { addNewItem } = useContext(TodoItemsStore);

  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();

    addNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <form className="row pt-5" onSubmit={handleAddButtonClicked}>
      <div className="col-md-5">
        <input
          type="text"
          className="form-control"
          onChange={handleNameChange}
          value={todoName}
        ></input>
      </div>
      <div className="col-md-5">
        <input
          type="date"
          className="form-control"
          onChange={handleDateChange}
          value={dueDate}
        ></input>
      </div>
      <div className="col-md-2">
        <button type="submit" className="btn btn-success w-100">
          <MdOutlineAdd />
        </button>
      </div>
    </form>
  );
}
export default AddTodo;
