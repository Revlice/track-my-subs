import { createSlice } from '@reduxjs/toolkit';

export const loginAuth = createSlice({
    name: "loginAuth",
    initialState: {
        login: false,
        loginTime: null,
    },
    reducers: {
        handleLogin: (state, action) => {
            state.login = action.payload.login;
            state.loginTime = action.payload.loginTime;
        },
        handleLogOut: (state) => {
            state.login = false;
            state.loginTime = null;
            localStorage.removeItem('token');
            localStorage.removeItem('loginTime');
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('loginTime');
        },
        checkSession: (state) => {
            const currentTime = new Date().getTime();
            if (state.loginTime && currentTime - state.loginTime > 10 * 60 * 1000) {
                state.login = false;
                state.loginTime = null;
                localStorage.removeItem('token');
                localStorage.removeItem('loginTime');
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('loginTime');
            }
        }
    }
});

export const { handleLogin, handleLogOut, checkSession } = loginAuth.actions;
export default loginAuth.reducer;
