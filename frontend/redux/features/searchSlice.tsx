import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {PostProps, SearchState} from "../../types/PostProps";

const initialState: SearchState = {
  displayType: 1,
  searchQuery: "",
  searchResults:[],
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setDisplayType: (state) => {
      if (state.displayType === 4){
        state.displayType = 1;
      } else {
        state.displayType += 1;
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    resetSearchResults:( state) => {
      state.searchResults = [];
    },
    addSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDisplayType, setSearchQuery, resetSearchResults, addSearchResults } = searchSlice.actions

export default searchSlice.reducer