import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as Cart } from '../assets/images/icon-cart.svg'
import { toggleCart } from '../slices/cartSlice'

const CartIcon = () => {
  const dispatch = useDispatch()

  const showCart = () => {
    dispatch(toggleCart())
  }
  const cart = useSelector(state => state.cart)
  return (
    <div className='cart-icon' onClick={showCart}>
      <Cart/>
      <div className="items-count">{cart.products.length}</div>
    </div>
  )
}

export default CartIcon
