import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import moviesSlice from './moviesSlice'
import GPTSlice from './GPTSlice'
import configSlice from './configSlice'

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
    gpt: GPTSlice,
    config: configSlice
  },
})

export default appStore
