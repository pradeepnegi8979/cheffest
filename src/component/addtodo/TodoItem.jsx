// import { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
// import TodoItemsStore from "../../store/todoItemsStore";
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="row mt-2">
      <div className="col-md-5">
        <div className="form-control">{todoName}</div>
      </div>
      <div className="col-md-5">
        <div className="form-control">{todoDate}</div>
      </div>
      <div className="col-md-2">
        <button
          type="button"
          className="btn btn-danger w-100"
          onClick={() => onDeleteClick(todoName)}
        >
          <MdOutlineDelete />
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
