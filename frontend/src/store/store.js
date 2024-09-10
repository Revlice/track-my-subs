import {configureStore} from '@reduxjs/toolkit';
import loginAuth from './loginAuth.js';

export const store = configureStore({
    reducer:{
        login:loginAuth
    }
});

