import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"],
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

//export const { increment, decrement, incrementByAmount } = carSlice.actions;

export const selectCars = (state) => state.counter.cars;

export default carSlice.reducer;
