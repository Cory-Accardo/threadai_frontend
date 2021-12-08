import Header from '../components/Header';
import { ethnicities, jobs, roles, locations } from '../inputs.js';
import '../styles/preferences.scss';
import {useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { serverIp } from '../constants';
const cookies = new Cookies();

function User() {


    const [response, setResponse] = useState({
        firstName: 'Loading...',
        lastName: 'Loading...',
        age: 'Loading...',
        gender: 'Loading...',
        ethnicity: 'Loading...',
        homeCity: 'Loading...'

    });

    useEffect(async ()=>{
        const {data} = await axios.post(`${serverIp}/get_resume`, {username: cookies.get('username'), password: cookies.get('password')})
        setResponse(data);
    },[])

    return (
        <div>
            <Header isAuthenticated={true} firstName={"Name"}/>
            <div className="grayspace"></div>
            <hr/>
            <div className="userBody">
                <div className="resumeButtonSpacing">
                    <h1>{response.firstName}</h1>
                    <h1>{response.lastName}</h1>
                    <h1>{response.age}</h1>
                    <h1>{response.gender}</h1>
                    <h1>{response.ethnicity}</h1>
                    <h1>{response.homeCity}</h1>
                </div>
            </div>
            <div className="grayspace"></div>
            <div className="grayspace"></div>
            <div className="grayspace"></div>
        </div>
    );
}

export default User;
