import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { toggleCompleteAsync, deleteTodoAsync } from "../redux/dataSlice";

const TodoItem = (props: any) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(
      toggleCompleteAsync({
        id: props.id,
        completed: !props.completed,
      })
    );
  };
  const handleDeleteClick = () => {
    dispatch(
      deleteTodoAsync({
        id: props.id,
      })
    );
  };
  return (
    <div>
      <div className="itemTodoContainer">
        <div className="details">
          <div className="checkContain">
            <input
              type="checkbox"
              className="checkBox"
              checked={props.completed}
              onChange={handleCompleteClick}
            />
          </div>
          <div className="detailContainer">
            <div className="userDeatils">UserName:{props.userName}</div>
            <div className="userDeatils">mobile:{props.mobile}</div>
            <div className="userDeatils">Address:{props.address}</div>
          </div>
        </div>
        <div className="removeBtn">
          <button className="removeButton" onClick={handleDeleteClick}>
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
