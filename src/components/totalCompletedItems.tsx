import React from "react";
import { useSelector } from "react-redux/es/exports";

const TotalCompletedItems = () => {
  const completedTodos = useSelector((state: any) =>
    state.displayData.filter((item: any) => item.completed === true)
  );
  return <div>Total Completed Items:{completedTodos.length}</div>;
};

export default TotalCompletedItems;
