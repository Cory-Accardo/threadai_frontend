import React, {Component} from 'react';
import Header from '../components/Header'
import LandingPageBody from '../components/LandingPageBody';


const LandingPage = ({isAuthorized, username}) =>{

    console.log(isAuthorized);
    console.log(username)
    return(
        <div>
            <Header isAuthenticated={isAuthorized} firstName={username}/>
            <LandingPageBody/>
        </div>
    );
}



export default LandingPage;

