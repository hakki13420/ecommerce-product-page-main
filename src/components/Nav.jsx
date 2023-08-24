import { ReactComponent as Close } from '../assets/images/icon-close.svg'

const Nav = ({ menu, setMenu }) => {
  return (
    <nav className='nav' style={{ transform: menu ? 'translatex(200px)' : '' }}>
      <div className="navigation">
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="close-container">
        <Close className='close' onClick={() => setMenu(false)} />
      </div>
    </nav>
  )
}

export default Nav
