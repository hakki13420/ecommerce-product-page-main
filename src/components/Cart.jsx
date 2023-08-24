import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as Trush } from '../assets/images/icon-delete.svg'
import { removeFromCart } from '../slices/cartSlice'

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const deleteItem = (id) => {
    dispatch(removeFromCart({
      id
    }))
  }
  return (
    <div className='cart'>
      <div className="cart-header">
        <h1>cart</h1>
      </div>
      <div className="cart-body">
        {!cart.products.length
          ? <span>your cart is empty!</span>
          : cart.products.map(cartItem => (
            <div key={cartItem.id} className="cart-item">
              <div className="item-image">
                <img src={cartItem.image} alt="cartItemImage" />
              </div>
              <div className="item-infos">
                <h1>{cartItem.title}</h1>
                <div className="price-quantity">
                  <span className='price'>{cart.currency}{cartItem.price.toFixed(2)}</span>
                  <span>x</span>
                  <span className='quantity'>{cartItem.qte}</span>
                  <span className='sub-total'>{cart.currency}{cartItem.subTotal.toFixed(2)}</span>
                </div>
              </div>
              <Trush className="delete-icon" onClick={() => deleteItem(cartItem.id)}/>
            </div>
          ))
        }
        {cart.products.length ? <button>CheckOut</button> : ''}
      </div>
    </div>
  )
}

export default Cart
