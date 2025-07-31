import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authAction";
import { loadState, saveState } from "./localStorage"; // corrected import

// 🔁 Load state from localStorage
const persistedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: authReducer,
  },
  preloadedState: {
    cart: persistedState?.cart || {
      cart: [],
      hotelInformation: {},
    },
  },
});

// 🔁 Save to localStorage on every store update
store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
  });
});

export default store;
