import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Signup from './pages/Signup';
import UserPreferences from './pages/UserPreferences'
import Testpage from './pages/Testpage';
import Login from './pages/Login';
import ResumeBuilder from './pages/ResumeBuilder';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ResumeHome from './pages/ResumeHome';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { serverIp } from './constants';


const App = () =>{

  const cookies = new Cookies();


  const [isAuthorized, setIsAuthorized] = useState(false);
  const [username, setUsername] = useState(cookies.get('username'));


  useEffect(() => {
    setUsername(cookies.get('username'));
  }, [isAuthorized])

  useEffect(() => {
    isLoggedIn();
  }, [])

  const isLoggedIn = async() =>{
  const username = cookies.get('username');
  const password = cookies.get('password');


  try{
      const res = await axios.post(`${serverIp}/login`, {
          username: username,
          password: password
      });
      if(res.status == 200){
          cookies.set('username', username);
          cookies.set('password', password);
          setIsAuthorized(true);
      }
  }
  catch(e){
    //login failed

  }
  
  }
  
  return(
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage isAuthorized = {isAuthorized} username={username}/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path= "/login" element={<Login/>}/>
        <Route path= "/home" element={<ResumeHome/>}/>
        <Route path= "/preferences" element={<UserPreferences/>}/>
        <Route path= "/create" element={<ResumeBuilder/>}/>
        <Route path= "/test" element={<Testpage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  )

}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
