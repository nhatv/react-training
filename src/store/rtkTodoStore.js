import { configureStore } from "@reduxjs/toolkit";
import { rtkTodoSlice } from "../slices/rtkTodoSlice";
import { rtkCarsSlice } from "../slices/rtkCarsSlice";

const rtkTodoStore = configureStore({
  reducer: {
    todo: rtkTodoSlice.reducer,
    cars: rtkCarsSlice.reducer,
  },
});

export default rtkTodoStore;
