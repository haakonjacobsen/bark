import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    accessToken: '',
  },
  reducers: {
    loginUser: (state, action: PayloadAction<string | undefined>) => {
      state.isLoggedIn = true
        if (action.payload){
          state.accessToken = action.payload
        }
    },
    logoutUser: (state) => {
      state.isLoggedIn = false
      state.accessToken = ''
    }
  },
})

export const { loginUser, logoutUser } = authSlice.actions

export default authSlice.reducer