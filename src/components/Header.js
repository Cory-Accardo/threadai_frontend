import '../styles/nav.scss';
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import logo from '../styles/logo.png';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

function Header() {

    const navigate = useNavigate();


    return (
      <div className="navbar">
          <a href="/">
            <img src={logo} height="100vh" width= "auto" minwidth= "0" minheight= "0">
            </img>
          </a>
          {
            cookie.get('isAuthenticated') === 'true' ?
              <div>
                <h1>
                  <i> Welcome, </i>
                  <a className="welcome" href="/user">
                    {cookie.get('firstName') === 'null' ||  cookie.get('firstName') === 'undefined'? cookie.get('username') : cookie.get('firstName')}
                  </a>
                  <button className="logout" onClick={() =>{
                    cookie.remove('username');
                    cookie.remove('password');
                    cookie.remove('isAuthenticated');
                    window.location.reload();
                    navigate('/')
                  }}>
                  Log out
                  </button>
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
