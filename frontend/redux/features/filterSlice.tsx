import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {FilterState} from "../../types/PostProps";

const initialState: FilterState = {
  myFavorites: false,
  priceInterval:[0,1000000],
  onlyPuppies: false,
  certifiedBreeders: false,
  dogBreeds:[],
  //area: GeoJSON
}

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
  },
})

// Action creators are generated for each case reducer function
export const { toggleFavorites, togglePuppies, toggleCertifiedBreeders } = filterSlice.actions

export default filterSlice.reducer