import { createSlice } from '@reduxjs/toolkit'
import { registerThunk, loginThunk } from './authThunks.js'

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    logout(state) {
      state.user = null
      state.token = null
      state.isAuthenticated = false
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },
    loadUser(state) {
      const token = localStorage.getItem('token')
      const user = localStorage.getItem('user')

      if (token && user) {
        state.token = token
        state.user = JSON.parse(user)
        state.isAuthenticated = true
      }
    },
  },

  extraReducers: (builder) => {
    //register cases
    builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user
      state.token = payload.token
      state.isAuthenticated = true
      localStorage.setItem('token', payload.token)
      localStorage.setItem('user', JSON.stringify(payload.user))
    })

    builder.addCase(loginThunk.rejected, (state, action) => {
      state.error = action.error.message
    })

    //login cases
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user
      state.token = payload.token
      state.isAuthenticated = true
      localStorage.setItem('token', payload.token)
      localStorage.setItem('user', JSON.stringify(payload.user))
    })

    builder.addCase(loginThunk.rejected, (state, action) => {
      state.error = action.error.message
    })
  },
})

export const { logout, loadUser } = authSlice.actions

export default authSlice.reducer
