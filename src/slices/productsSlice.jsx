import { createSlice } from '@reduxjs/toolkit'
import prd1 from '../assets/images/image-product-1.jpg'
import prd2 from '../assets/images/image-product-2.jpg'
import prd3 from '../assets/images/image-product-3.jpg'
import prd4 from '../assets/images/image-product-4.jpg'

import prdthumb1 from '../assets/images/image-product-1-thumbnail.jpg'
import prdthumb2 from '../assets/images/image-product-2-thumbnail.jpg'
import prdthumb3 from '../assets/images/image-product-3-thumbnail.jpg'
import prdthumb4 from '../assets/images/image-product-4-thumbnail.jpg'

const initialState = {
  products: [
    {
      id: 1,
      company: 'SNEAKER COMPANY',
      title: 'Fall Limited Edition Sneakers',
      description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
      qte: 20,
      price: 250,
      currency: '$',
      discount: 50,
      images: [
        {
          id: 1,
          image: prd1,
          thumbnail: prdthumb1
        },
        {
          id: 2,
          image: prd2,
          thumbnail: prdthumb2
        },
        {
          id: 3,
          image: prd3,
          thumbnail: prdthumb3
        },
        {
          id: 4,
          image: prd4,
          thumbnail: prdthumb4
        }
      ]
    }
  ],
  selectedProduct: 0,
  showPreview: false,
  selectedImage: 0

}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    openPreview (state, action) {
      return {
        ...state,
        showPreview: true
      }
    },
    closePreview (state, action) {
      return {
        ...state,
        showPreview: false
      }
    },
    selectImage (state, action) {
      return {
        ...state,
        selectedImage: action.payload.selectedImage
      }
    },
    previousImage (state, action) {
      const index = state.selectedImage > 0
        ? state.selectedImage - 1
        : state.products[state.selectedProduct].images.length - 1
      return {
        ...state,
        selectedImage: index
      }
    },
    nextImage (state, action) {
      const index = state.selectedImage === state.products[state.selectedProduct].images.length - 1
        ? 0
        : state.selectedImage + 1
      return {
        ...state,
        selectedImage: index
      }
    }
  }
})

export const { openPreview, closePreview, selectImage, previousImage, nextImage } = productsSlice.actions
export default productsSlice.reducer
