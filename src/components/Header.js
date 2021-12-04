import '../styles/nav.scss';
import logo from '../styles/logo.png';

function Header({isAuthenticated, firstName}) {
    return (
      <div className="navbar">
          <a href="/home">
            <img src={logo} height="100vh" width= "auto" minWidth= "0" minHeight= "0">
            </img>
          </a>
          {
            isAuthenticated === true ?
              <div>
                <h1>
                  <i> Welcome, </i>
                  <strong> {firstName}</strong>
                </h1>
              </div> :
              <div>
                <a className="button" href="/login">
                  Login
                </a>
                <a className="button" href="/signup">
                  Sign Up
                </a>
              </div>
          }
      </div>
    );
  }

  export default Header;