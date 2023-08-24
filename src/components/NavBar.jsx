import Logo from './Logo'
import Nav from './Nav'
import NavBarRight from './NavBarRight'
import hamborger from '../assets/images/icon-menu.svg'
import { useState } from 'react'

const NavBar = () => {
  const [menu, setMenu] = useState(false)
  const openMenu = () => {
    setMenu(true)
  }
  return (
    <div className='nav-bar'>
      <img src={hamborger} onClick={openMenu} className='menu-icon' alt="icon-menu" />
      <Logo />
      <Nav menu={menu} setMenu={setMenu}/>
      <NavBarRight/>
    </div>
  )
}

export default NavBar
