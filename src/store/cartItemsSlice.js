import { createSlice } from "@reduxjs/toolkit";

const cartItemSlice = createSlice({
  name: "item",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const exictingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!exictingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          title: newItem.title,
          totalPrice: newItem.price,
        });
      } else {
        exictingItem.quantity++;
        exictingItem.totalPrice = exictingItem.totalPrice + newItem.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const exictingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (exictingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exictingItem.quantity--;
        exictingItem.totalPrice = exictingItem.totalPrice - exictingItem.price;
      }
    },
  },
});

export const cartItemActions = cartItemSlice.actions;
export default cartItemSlice;
