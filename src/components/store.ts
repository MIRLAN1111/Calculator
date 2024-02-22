import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { calculatorReducer } from './calculatorReducer';



const rootReducer = combineReducers({
  calculator: calculatorReducer.reducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = setupStore();