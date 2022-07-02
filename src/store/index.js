import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './product.slice'

export default function makeStore() {
  const store = configureStore({
    reducer: {
      product: productSlice.reducer,
    },
  })

  return store
}
