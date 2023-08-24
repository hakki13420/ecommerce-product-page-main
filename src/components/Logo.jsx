import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

const Logo = () => {
  return (
    <div className="logo">
      <Link to='/'>
        <img src={logo} alt="logo-image" />
      </Link>
    </div>
  )
}

export default Logo
