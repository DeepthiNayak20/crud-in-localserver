import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../redux/dataSlice";

const AddTodoForm = () => {
  // const [value, setvalue] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e: any) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const mobile = e.target.mobile.value;
    const address = e.target.address.value;

    const userData = {
      userName,
      mobile,
      address,
    };

    console.log("value", userData);
    dispatch(
      addTodoAsync({
        userName: userData.userName,
        mobile: userData.mobile,
        address: userData.address,
      })
    );
  };
  return (
    <div>
      <form action="" className="formContainer" onSubmit={submitHandler}>
        <div className="inputContainer">
          <input
            type="text"
            className="inputDesign"
            name="userName"
            placeholder="user name"
          />
          <input
            type="number"
            className="inputDesign"
            name="mobile"
            placeholder="mobile no"
          />
          <input
            type="text"
            className="inputDesign"
            name="address"
            placeholder="address"
          />
          <div className="buttonItem">
            <button className="addButton">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
