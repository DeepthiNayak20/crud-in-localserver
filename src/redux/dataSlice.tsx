import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const getTodoAsync: any = createAsyncThunk(
  "displayData/getTodoAsync",
  async () => {
    const response = await fetch(`http://localhost:5000/displayData`);
    if (response.ok) {
      const data = await response.json();
      return { data };
    }
  }
);

export const addTodoAsync: any = createAsyncThunk(
  "displayData/addTodoAsync",
  async (payload: any) => {
    const response = await fetch(`http://localhost:5000/displayData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: payload.userName,
        mobile: payload.mobile,
        address: payload.address,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      return { data };
    }
  }
);

export const toggleCompleteAsync: any = createAsyncThunk(
  "displayData/toggleCompleteAsync",
  async (payload: any) => {
    const response = await fetch(
      `http://localhost:5000/displayData/${payload.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: payload.completed,
        }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      return { id: data.id, completed: data.completed };
    }
  }
);

export const deleteTodoAsync: any = createAsyncThunk(
  "displayData/deleteTodoAsync",
  async (payload: any) => {
    const response = await fetch(
      `http://localhost:5000/displayData/${payload.id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      // const data = await response.json();
      return { id: payload.id };
    }
  }
);

export const dataSlice = createSlice({
  name: "displayData",
  initialState: [],

  reducers: {
    addTodo: (state: any, action: any) => {
      const newData = {
        id: Date.now(),
        userName: action.payload.userName,
        mobile: action.payload.mobile,
        address: action.payload.address,
        completed: false,
      };
      state.push(newData);
    },
    toggleComplete: (state: any, action: any) => {
      const index = state.findIndex(
        (item: any) => item.id === action.payload.id
      );
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state: any, action: any) => {
      return state.filter((todo: any) => todo.id !== action.payload.id);
    },
  },

  extraReducers: {
    [getTodoAsync.pending]: (state: any, action: any) => {
      console.log("fetching Data...");
    },
    [getTodoAsync.fulfilled]: (state: any, action: any) => {
      console.log("fetched Data Successfully");
      return action.payload.data;
    },
    [addTodoAsync.fulfilled]: (state: any, action: any) => {
      state.push(action.payload.data);
    },
    [toggleCompleteAsync.fulfilled]: (state: any, action: any) => {
      const index = state.findIndex(
        (todo: any) => todo.id === action.payload.id
      );
      state[index].completed = action.payload.completed;
    },
    [deleteTodoAsync.fulfilled]: (state: any, action: any) => {
      return state.filter((todo: any) => todo.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, toggleComplete, deleteTodo } = dataSlice.actions;

export default dataSlice.reducer;
