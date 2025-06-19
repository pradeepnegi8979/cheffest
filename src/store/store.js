// import FoodMenu from "../component/swiggy/food-delivery/FoodMenu";
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authAction";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: authReducer,
  },
});

export default store;
