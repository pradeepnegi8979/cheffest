
// import { configureStore } from "@reduxjs/toolkit";

// import cartReducer from "../features/cart/cartSlice";
// import authReducer from "../features/auth/authAction";
// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     login: authReducer,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authAction";
import { loadState, saveState } from "../store/localStorage"; // ✅ helper import

// 🔁 Step 1: Load cart state from localStorage
const persistedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: authReducer,
  },
  preloadedState: {
    cart: persistedState?.cart || {
      items: [],
      hotelInfo: {},
    },
  },
});

// 🔁 Step 2: Save cart to localStorage on change
store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
  });
});

export default store;
