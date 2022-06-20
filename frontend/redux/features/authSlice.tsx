import { createSlice } from '@reduxjs/toolkit'
import {InitialFilter} from "../../types/PostProps";

export const authSlice = createSlice({
  name: 'filter',
  initialState: InitialFilter,
  reducers: {
    loginUser: (state) => {
      state.myFavorites = !state.myFavorites;
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginUser } = authSlice.actions

export default authSlice.reducer