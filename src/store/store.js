import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import cartItemSlice from "./cartItemsSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartItems: cartItemSlice.reducer,
  },
});

export default store;
