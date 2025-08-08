import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const carInitialValue = [
  {
    make: "Toyota",
    quantity: 10,
    id: 1,
  },
  {
    make: "Honda",
    quantity: 10,
    id: 2,
  },
  {
    make: "Nissan",
    quantity: 10,
    id: 3,
  },
];

export const fetchInitialCarData = createAsyncThunk(
  "cars/fetchInitialCarData",
  async () => {
    const response = new Promise((resolve) => {
      setTimeout(() => {
        resolve(carInitialValue);
      }, 2000);
    });
    return response;
  }
);

export const rtkCarsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    loading: false,
  },
  reducers: {
    sell: (state, action) => {
      const car = state.cars.find((c) => c.id === action.payload);
      if (car) car.quantity--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialCarData.fulfilled, (state, action) => {
      console.log("thunk action payload", action.payload);
      state.cars = action.payload;
      state.loading = false;
      console.log("rtk car state", state);
    });
    builder.addCase(fetchInitialCarData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchInitialCarData.rejected, (state) => {
      state.loading = true;
    });
  },
});

export const { sell } = rtkCarsSlice.actions;
