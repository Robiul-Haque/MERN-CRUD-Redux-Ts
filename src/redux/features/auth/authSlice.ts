import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type TAuthState = {
    user: null | object;
    token: null | string;
    email: null | string;
}

const initialState: TAuthState = {
    user: null,
    token: null,
    email: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
        resetAccountEmail: (state, action) => {
            const { email } = action.payload;
            state.email = email;
        },
        removeAccountEmail: (state) => {
            state.email = null;
        }
    }
});

export const { setUser, logout, resetAccountEmail } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;