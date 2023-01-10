import { configureStore } from '@reduxjs/toolkit'
import { fakesApi } from './api'

export const store = configureStore({
  reducer: {
    [fakesApi.reducerPath]: fakesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakesApi.middleware),
})

// setupListeners(store.dispatch)