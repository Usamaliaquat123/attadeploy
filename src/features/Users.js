import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

var d = axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  return res;
});

export const userSlice = createSlice({
  name: "users",
  initialState: { value: [] },
  reducers: {
    addUsers: (state, actions) => {
      console.log("actions", actions);
      state.value.push(actions.payload); // write code for adding users
    },
    deleteUsers: (state, action) => {
      console.log("state", state);
      state.value = state.value.filter((User) => User.id !== action.payload.id);
    },
    updateUserTitle: (state, action) => {
      state.value = state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.title = action.payload.title;
        }
        return user;
      });
    },
    getUsersApi: (state, action) => {
      state.value = action.payload.maal;
    },
  },
});
export const { addUsers, deleteUsers, updateUserTitle, getUsersApi } =
  userSlice.actions;
export default userSlice.reducer;
