import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "userData",
  initialState: {
    userDetails: {},
    userEmail: "",
    loginStatus: false,
    errorMessage: "",
  },
  reducers: {
    addUserData: (state, action) => {
      const key = Object.keys(action.payload)[0];
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          [key]: action.payload[key],
        },
      };
    },
    verifyUser: (state, action) => {
      if (
        action.payload["userName"] === "admin" &&
        action.payload["password"] === "12345"
      ) {
        state.loginStatus = true;
      } else {
        state.errorMessage = "Wrong username or password";
      }
    },
  },
});

export const { addUserData, verifyUser } = userSlice.actions;
export default userSlice.reducer;
