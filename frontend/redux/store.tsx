import { configureStore } from '@reduxjs/toolkit'
import filterReducer from "./features/filterSlice";
import searchReducer from "./features/searchSlice";
import authReducer from "./features/authSlice";


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    search: searchReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch