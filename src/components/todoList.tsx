import React, { useEffect } from "react";
import TodoItem from "./todoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodoAsync } from "../redux/dataSlice";

const TodoList = () => {
  const todoItems = useSelector((state: any) => state.displayData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoAsync());
  }, [dispatch]);

  return (
    <div>
      {todoItems.map((item: any, i: any) => {
        return (
          <div key={i}>
            {" "}
            <TodoItem
              id={item.id}
              userName={item.userName}
              mobile={item.mobile}
              address={item.address}
              completed={item.completed}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
