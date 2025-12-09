import { createSlice } from '@reduxjs/toolkit'

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
})

export const { logout, loadUser } = authSlice.actions

export default authSlice.reducer
