import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";

interface Playactuon {
  id: number;
  name: string;
}

interface Calculator {
  value: Playactuon | null;
}

const initialState: Calculator = {
  value: null,
};

const calculatorReducer = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    appluse: (state, action: PayloadAction<{ playactuon: Playactuon }>) => {
      state.value = action.payload.playactuon;
    },
  },
});

const selectCalculator = (state: { calculator: Calculator }) => state.calculator;

const selectCalculatorValue = createSelector(
  selectCalculator,
  (calculator: Calculator) => calculator.value
);

export { calculatorReducer, selectCalculatorValue };























