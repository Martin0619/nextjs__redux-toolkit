import { createSlice } from '@reduxjs/toolkit'
/**
 * @typedef Product
 * @property {string} id
 * @property {string=} image
 * @property {string} name
 * @property {string} description
 * @property {number} price
 * @property {boolean} favorite
 */

/**
 * @typedef ProductSliceObj
 * @property {Product[]} products
 * @property {number} productTotal
 */
/**@type {ProductSliceObj} */
const ProductInitailState = {
  products: [
    {
      id: '1',
      name: 'Next.js & React - The Complete Guide',
      description: 'Maximillian Schawarzmuller',
      price: 12.99,
      favorite: false,
    },
  ],
  productTotal: 1,
}

export const productSlice = createSlice({
  name: 'prodcut',
  initialState: ProductInitailState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = action.payload
      state.products.push(newProduct)
      state.productTotal += 1
    },
    favorite: (state, action) => {
      const productId = action.payload
      const product = state.products.find((p) => p.id === productId)
      if (product) {
        product.favorite = !product.favorite
      }
    },
    addTotal: (state, action) => {
      const amount = action.payload ?? 1
      state.productTotal += amount
    },
  },
})

export const { addProduct, favorite, addTotal } = productSlice.actions
