import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  hotelInformation: {},
  cart: [],
};
createSlice;
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setHotelInformation: (state, action) => {
      state.hotelInformation = action.payload;
    },
    addToCart: (state, action) => {
      //console.log("", action.payload);
      state.cart = action.payload;
    },
  },
});

export const { addToCart, setHotelInformation } = cartSlice.actions;
export const selectCartCount = (state) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0);
export default cartSlice.reducer;
