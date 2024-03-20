import './Header.scss'
import { Link } from 'react-router-dom'; 
function Header() {

  return (
  
    <header>
      <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
        <div className="container-fluid d-flex">
          <div className="logo mt-1 ">
            {/* <Link to={'/'}>
              <i className="fa-solid fa-b"></i>
            </Link> */}
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-2" id="navbarColor01">
            {/* <ul className="navbar-nav me-auto">
              <li className="nav-item me-2">
                <Link to={'/featured-items'}>Featured items</Link>
              </li>
              <li className="nav-item me-2">
                <Link to={'/featured-items'}>Pricing</Link> 
              </li>
              <li className="nav-item me-2">
                <Link to={'/featured-items'}>About</Link> 
              </li>
            </ul> */}
            <button className="custom-btn">Sign-in</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
