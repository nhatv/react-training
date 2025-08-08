import { configureStore } from "@reduxjs/toolkit";
import { rtkTodoSlice } from "../slices/rtkTodoSlice";

const rtkTodoStore = configureStore({
  reducer: {
    todo: rtkTodoSlice.reducer,
  },
});

export default rtkTodoStore;
