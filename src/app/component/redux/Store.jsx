import { configureStore } from '@reduxjs/toolkit';
import filterReducer  from "../searchbar/FilteredSlice";


export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});