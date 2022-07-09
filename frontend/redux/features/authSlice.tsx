import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    accessToken: '',
  },
  reducers: {
    loginUser: (state) => {
      state.isLoggedIn = true
    },
    logoutUser: (state) => {
      state.isLoggedIn = false
      state.accessToken = ''
    }
  },
})

export const { loginUser, logoutUser } = authSlice.actions

export default authSlice.reducer