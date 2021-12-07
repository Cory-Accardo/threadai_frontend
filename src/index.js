import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from 'react-router';
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
const cookies = new Cookies();


const App = () =>{


  const [isAuthenticated, setisAuthenticated] = useState(cookies.get('isAuthenticated'));
  const location = useLocation();

  useEffect(() => {
    getUser();
  }, [location, isAuthenticated])

  useEffect(() => {
    isLoggedIn();
  }, [location])

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
            setisAuthenticated(true);
            cookies.set('isAuthenticated', true);  
        }
    }
    catch(e){
      //login failed
      cookies.set('isAuthenticated', false);
    }
  }

  const getUser = async() =>{
    const username = cookies.get('username');
    const password = cookies.get('password');
  
  
    try{
        const res = await axios.post(`${serverIp}/get_user`, {
            username: username,
            password: password
        });
        if(res.status == 200){
            cookies.set('firstName', res.data.firstName);  
        }
    }
    catch(e){
      //getUser failed
  
    }
    
    }
  
  return(
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path= "/login" element={<Login/>}/>
        <Route path= "/home" element={<ResumeHome/>}/>
        <Route path= "/preferences" element={<UserPreferences/>}/>
        <Route path= "/create" element={<ResumeBuilder/>}/>
        <Route path= "/test" element={<Testpage/>}/>
      </Routes>
  )

}


ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
