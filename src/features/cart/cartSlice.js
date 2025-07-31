import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotelInformation: {},
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setHotelInformation: (state, action) => {
      state.hotelInformation = action.payload;
    },

    addItemToCart: (state, action) => {
      const item = action.payload;
      const existingIndex = state.cart.findIndex(
        (i) => i.item_id === item.item_id
      );

      if (existingIndex !== -1) {
        state.cart[existingIndex].count += 1;
      } else {
        state.cart.push({ ...item, count: 1 });
      }
    },

    incrementItem: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((i) => i.item_id === itemId);
      if (item) item.count += 1;
    },

    decrementItem: (state, action) => {
      const itemId = action.payload;
      const index = state.cart.findIndex((i) => i.item_id === itemId);
      if (index !== -1) {
        if (state.cart[index].count > 1) {
          state.cart[index].count -= 1;
        } else {
          state.cart.splice(index, 1);
        }
      }
    },

    clearCart: (state) => {
      state.cart = [];
      state.hotelInformation = {};
    },
  },
});

export const {
  setHotelInformation,
  addItemToCart,
  incrementItem,
  decrementItem,
  clearCart,
} = cartSlice.actions;

export const selectCartCount = (state) =>
  state.cart.cart.reduce((total, item) => total + item.count, 0);

export default cartSlice.reducer;

