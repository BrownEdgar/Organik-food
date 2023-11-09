import { Link } from 'react-router-dom'
import './Navbar.scss'
import ROUTES from '../../routes/routes'

export default function Navbar() {
  return (
    <header>
      <nav>
        <div>
          <Link>
            <img src="./Logo.png" alt="logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.ABOUT}>About</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>Pages</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>Shop</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>Projects</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>News</Link>
          </li>
        </ul>
      </nav>
      <div className="search">
        <form >
          <input type="search" />
          <span>
            <img src="./search-icon.png" alt="" />
          </span>
        </form>
        <div className="header-cart">
          <span className="icon">
            <img src="./Icon.png" alt="" />
          </span>
          <span className='cart'>Cart(0)</span>
        </div>
      </div>
    </header>
  )
}
