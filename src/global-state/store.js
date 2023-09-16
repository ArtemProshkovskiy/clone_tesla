import { configureStore, combineReducers } from "@reduxjs/toolkit"
import {ShoppingCartSlice} from "../features/shopingCart/shoppingCartSlice";

// Combine your reducers
const rootReducer = combineReducers({
  shoppingCart: ShoppingCartSlice.reducer, // Your first reducer
});

export const store = configureStore({
  reducer: rootReducer,
});