import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="d-flex justify-content-evenly align-items-center">
    <Link className="navbar-brand" to="#">
        <Logo/>
    </Link>
    
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav d-none d-lg-block">
        <SearchBar/>
        
      </ul>
    </div>
    <Link to='/trackingorder'> <span className="bi bi-geo"></span>Tracking Order</Link>    
  </div>
</nav>
  )
}

export default Header
