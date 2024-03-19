import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isLoading: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload;
    },
    removeUser: (state, action) => {
      state.currentUser = null;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addUser, removeUser , setIsLoading } = userSlice.actions;

export default userSlice.reducer;
