import React from "react";
import AddTodoForm from "../../components/addTodoForm";
import "../../components/common.css";
import TodoList from "../../components/todoList";
import TotalCompletedItems from "../../components/totalCompletedItems";

const Home = () => {
  return (
    <div>
      <AddTodoForm />
      <TodoList />
      <TotalCompletedItems />
    </div>
  );
};

export default Home;
