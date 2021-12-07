import React from 'react';
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


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path= "/login" element={<Login/>}/>
        <Route path= "/home" element={<ResumeHome/>}/>
        <Route path= "/preferences" element={<UserPreferences/>}/>
        <Route path= "/create" element={<ResumeBuilder/>}/>
        <Route path= "/test" element={<Testpage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
