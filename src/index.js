import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Signup from './pages/Signup'
import Homepage from './pages/Homepage'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ResumePage from './pages/ResumePage';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path= "/landing" element={<LandingPage/>}/>
        <Route path= "/resumes" element={<ResumePage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

