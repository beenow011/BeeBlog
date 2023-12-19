import {configureStore} from '@reduxjs/toolkit';
import authSlice, { login,logout } from './authSlice';
const store = configureStore({
    reducer: authSlice,
})

export default store;