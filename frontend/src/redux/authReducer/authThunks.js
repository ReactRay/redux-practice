import { createAsyncThunk } from '@reduxjs/toolkit'

import { registerUser, loginUser } from '../../api/authApi'

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await registerUser(userData)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await loginUser(userData)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
