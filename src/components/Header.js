import '../styles/nav.scss';
import logo from '../styles/logo.png';

function Header({isAuthenticated, firstName}) {
    return (
      <div className="navbar">
          <a href="/home">
            <img src={logo} height="100vh" width= "auto" minwidth= "0" minheight= "0">
            </img>
          </a>
          {
            isAuthenticated === true ?
              <div>
                <h1>
                  <i> Welcome, </i>
                  <a className="welcome" href="/home">
                    {firstName}
                  </a>
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
