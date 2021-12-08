import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {FilterState} from "../../types/PostProps";
import {InitialFilter} from "../../types/PostProps";

const initialState: FilterState = InitialFilter;

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleFavorites: (state) => {
      state.myFavorites = !state.myFavorites;
    },
    togglePuppies: (state) => {
      state.onlyPuppies = !state.onlyPuppies;
    },
    toggleCertifiedBreeders: (state) => {
      state.certifiedBreeders = !state.certifiedBreeders;
    },
    updatePriceInterval: (state, action) => {
      state.priceInterval = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleFavorites, togglePuppies, toggleCertifiedBreeders, updatePriceInterval} = filterSlice.actions

export default filterSlice.reducer