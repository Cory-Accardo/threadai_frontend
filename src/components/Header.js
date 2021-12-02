import '../styles/nav.scss';
import logo from '../styles/logo.png';
import Pill from '../components/Pill'

function Header({isAuthenticated}) {
    return (
      <div className="navbar">
          <img src={logo} height="100%"></img>
          {
            isAuthenticated == true ?
              <div>
                <h1>
                  <i> Welcome, </i>
                  <strong> Bridget</strong>
                </h1>
              </div> :
              <div>
                text1
                text2
              </div>

          }
      </div>
    );
  }

  export default Header;