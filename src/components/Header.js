import '../styles/nav.scss';
import logo from '../styles/logo.png';

function Header({isAuthenticated}) {
    return (
      <div className="navbar">
          <div className="logo">
            <img src={logo} height="100vh"></img>
          </div>
          <div>
            {isAuthenticated === true ? <h1>Welcome back!</h1> : <h1>Sign in.</h1>}
          </div>

      </div>
    );
  }

  export default Header;