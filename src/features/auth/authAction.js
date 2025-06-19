import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {}, // Use an object to store user info
  isLogedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.login = action.payload; // Store user data in login
      state.isLogedIn = true;
    },
    signup: (state, action) => {
      state.userInfo = action.payload; // Store user data in login
      state.isLogedIn = true;
    },
  },
});

export const { login, signup } = authSlice.actions;

export const selectLoggedInUser = (state) => state.auth.login;

export default authSlice.reducer;
