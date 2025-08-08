import { configureStore } from "@reduxjs/toolkit";
import { rtkCarsSlice } from "../slices/rtkCarsSlice";

const rtkStore = configureStore({
  reducer: {
    cars: rtkCarsSlice.reducer,
  },
});

export default rtkStore;
