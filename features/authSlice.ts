import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserProps {
    userId : string;
    userEmail : string;
    userImage : string;
    username : string;
}

export interface IAuthState {
  authState: boolean;
  userData : null | UserProps
}

const initialState: IAuthState = {
  authState: false,
  userData: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LoginUser : (state, action: PayloadAction<IAuthState>) => {
      state.authState = action.payload.authState;
      state.userData = action.payload.userData;
    },

    LogoutUser : (state) => {
        state.authState = false;
        state.userData = null;
    }
  },
});

export const { LoginUser, LogoutUser } = authSlice.actions;
export const authReducer = authSlice.reducer;