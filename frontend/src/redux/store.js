import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authReducer/authSlice.js'
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})
