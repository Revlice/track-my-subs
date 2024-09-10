import { createSlice } from '@reduxjs/toolkit';

export const loginAuth = createSlice({
    name: "loginAuth",
    initialState: {
        login: false,
    },
    reducers: {
        handleLogin: (state, action) => {
            state.login = action.payload; // login state'ini güncelle
        },
        handleLogOut: (state) => {
            state.login = false; // login state'ini false yap
        }
    }
});

export const { handleLogin, handleLogOut } = loginAuth.actions;

export default loginAuth.reducer;
