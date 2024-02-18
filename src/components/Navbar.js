import logo from '../images/jumbo_logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar" id="main">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="Jumbo" />
          <h3>
            <a href="https://www.tufts.edu/" target="_blank" rel="noreferrer">
              Tufts University
            </a>
          </h3>
        </div>
        <div className="nav-links">
          <h3>
            <a href="#">Facilities</a>
          </h3>
          <h3>
            <a href="#">About</a>
          </h3>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
