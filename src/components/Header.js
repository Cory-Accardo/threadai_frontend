import '../styles/nav.scss';
import logo from '../styles/logo.png';
import Pill from '../components/Pill'

const styling = {

  backgroundColor: 'white',
  fontSize: '10px',
  width: '40px',
  border: '2px solid',
  borderRadius: '20px'

}

function Header({isAuthenticated}) {
    return (
      <div className="navbar">
          <img src={logo} height="100%"></img>
          {
            isAuthenticated === true ?
              <div>
                <h1>
                  <i> Welcome, </i>
                  <strong> Bridget</strong>
                </h1>
              </div> :
              <div>
              <div>Login</div> 
              <div>Sign Up</div>

              </div>

// ^ css flex container?
// /* Sign up deets from figma*/
// position: absolute;
// width: 137px;
// height: 70px;
// left: 1241px;
// top: 52px;

// font-family: Lato;
// font-style: normal;
// font-weight: bold;
// font-size: 40px;
// line-height: 48px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #FFFFFF;


          }
      </div>
    );
  }

  export default Header;