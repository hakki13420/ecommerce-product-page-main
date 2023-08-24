import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  products: [],
  qte: 0,
  totalAmount: 0,
  currency: '$',
  displayCart: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart (state, action) {
      let prods
      if (state.products.length) {
        prods = state.products.map(prd => {
          const newQte = prd.qte + action.payload.qte
          const newSubTotal = prd.subTotal + (action.payload.qte * prd.price)
          return prd.id_product === action.payload.id_product
            ? { ...prd, qte: newQte, subTotal: newSubTotal }
            : {
              id_product: action.payload.id_product,
              title: action.payload.title,
              company: action.payload.company,
              image: action.payload.image,
              qte: action.payload.qte,
              price: action.payload.price,
              subTotal: action.payload.subTotal
            }
        }
        )
      } else {
        prods = [
          {
            id_product: action.payload.id_product,
            title: action.payload.title,
            company: action.payload.company,
            image: action.payload.image,
            qte: action.payload.qte,
            price: action.payload.price,
            subTotal: action.payload.subTotal
          }
        ]
      }

      return {
        ...state,
        products: prods,
        total: state.total + action.payload.subTotal
      }
    },
    removeFromCart (state, action) {
      const products = state.products.filter(prod => prod.id !== action.payload.id)
      return {
        ...state,
        products
      }
    },
    toggleCart (state, action) {
      return {
        ...state,
        displayCart: !state.displayCart
      }
    }
  }

})

export const { addToCart, removeFromCart, toggleCart } = cartSlice.actions
export default cartSlice.reducer
