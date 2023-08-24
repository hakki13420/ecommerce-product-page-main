import plus from '../assets/images/icon-plus.svg'
import minus from '../assets/images/icon-minus.svg'

import { ReactComponent as CartIcon } from '../assets/images/icon-cart.svg'
import { useDispatch } from 'react-redux'
import { addToCart } from '../slices/cartSlice'
import { useState } from 'react'

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const addProduct = () => {
    const newPrice = product.price * (1 - (product.discount / 100))
    dispatch(addToCart({
      id_product: product.id,
      company: product.company,
      title: product.title,
      image: product.images[0].image,
      qte: quantity,
      price: newPrice,
      subTotal: quantity * newPrice
    }))
  }

  const increaseQte = () => {
    setQuantity(qte => qte + 1)
  }
  const decreaseQte = () => {
    setQuantity(qte => qte - 1)
  }

  return (
    <div className="product-details">
      <h1 className='company'>{product.company}</h1>
      <h1 className='title'>{product.title}</h1>
      <p className="description">
        {product.description}
      </p>
      <div className="numbers">
        <div className="numbers-top">
          <span className="price">{`${product.currency}${(product.price * (1 - (product.discount / 100))).toFixed(2)}`}</span>
          <span className="discount">{product.discount}%</span>
        </div>
        <div className="numbers-bottom">
          <span className="old-price">
            {`${product.currency}${product.price.toFixed(2)}`}
          </span>
        </div>
      </div>
      <div className="product-details-bottom">
        <div className="options">
          <img src={minus} alt="minus" onClick={decreaseQte} />
          <span className='count'>{quantity}</span>
          <img src={plus} alt="plus" onClick={increaseQte} />
        </div>
        <button onClick={addProduct}>
          <CartIcon />
          <span>
                        Add To Cart
          </span>
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
