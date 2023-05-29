import { configureStore } from '@reduxjs/toolkit'
import { themeSice } from './slice/ThemeSlice'
// ...
const store = configureStore({
  reducer: {
    reducer: themeSice.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store