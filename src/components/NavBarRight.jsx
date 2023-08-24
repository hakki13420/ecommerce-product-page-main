import Avatar from './Avatar'
import CartIcon from './CartIcon'
import avatarImage from '../assets/images/image-avatar.png'
import Cart from './Cart'
import { useSelector } from 'react-redux'

const NavBarRight = () => {
  const displayCart = useSelector(state => state.cart.displayCart)
  return (
    <div className='nav-bar-right'>
      <CartIcon/>
      {displayCart && <Cart/>}
      <Avatar image={avatarImage} />
    </div>
  )
}

export default NavBarRight
