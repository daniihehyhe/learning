import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface CounterState {
  value: boolean
}

const initialState: CounterState = {
  value: false,
}

export const themeSice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
     state.value = !state.value
  },}
})

export const { toggleTheme} = themeSice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.reducer.value

export default themeSice.reducer