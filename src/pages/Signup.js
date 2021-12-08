import Form from '../components/Form';
import Input from '../components/Input';
import DropdownInput from '../components/DropdownInput';
import MultiDropdownInput from '../components/MultiDropdownInput';
import MultiAutocomplete from '../components/MultiAutocomplete';
import logo from '../styles/logo.png';
import { useState, useEffect } from 'react';
import { ethnicities, jobs, roles, locations } from '../inputs.js';
import '../styles/login.scss';
import axios from 'axios';
import {serverIp} from '../constants'
import Cookies from 'universal-cookie';
import {useNavigate} from 'react-router-dom'

function SignupPage() {

    // Four different subpages on the signup page: 0 (username and password), 1 (personal info), 2 (job info), and 3 (location info)
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();


    useEffect( async ()=>{
        const username = cookies.get('username');
        const password = cookies.get('password');
        let page = 0;
        let res;
        try{
            res = await axios.post(`${serverIp}/login`, {
                username: username,
                password: password
            });
            console.log(res)
            if(res.status == 200){ //That means a user does exist
                res = await axios.post(`${serverIp}/get_user`, {
                    username: username,
                    password: password
                });
                const {firstName, lastName, age, gender, ethnicity, homeCity} = res.data;
                page++;
                if(firstName && lastName && age && gender && ethnicity){ //Then we know they completed the first page
                    page++;
                    res = await axios.post(`${serverIp}/get_resume`, {
                        username: username,
                        password: password
                    });
                    const { email } = res.data;
                    if(email){ //then we know they completed the third page
                        page++;
                        if(homeCity){ //This means they completely filled out the signup
                            page++;
                            navigate('/');
                        }
                    }

                }
            }
        }
        catch(e){
            //getUser failed
          
        }
        finally{
            console.log(page);
            setCurrentPage(page);
        }
          
    },[])

    function usernameValidation(params) {
        let errors = '';
        if (!params.signup_username) {
            errors += 'You must enter an email.\n';
        }
        if (!params.signup_password) {
            errors += 'You must create a password.\n';
        }
        if (params.signup_password && !params.signup_password_repeat) {
            errors += 'You must re-enter your password.\n';
        }
        if (params.signup_password && params.signup_password !== params.signup_password_repeat) {
            errors += 'Passwords do not match.\n';
        }
        if (errors !== '') {
            alert(errors);
            return false;
        }
        return true;
    }

    function personalValidation(params) {
        // Age is optional, but if included it should be an integer and at least 18
        if (params.signup_first_name && params.signup_last_name && (!params.signup_age || (Number.isInteger(Number(params.signup_age)) && Number(params.signup_age) >= 18))) {
            return true;
        }
        return false
    }



    const cookies = new Cookies();

    let pageContent;

    const signup = async({signup_username, signup_password}) =>{
        try{
            const res = await axios.post(`${serverIp}/signup`, {
                username: signup_username,
                password: signup_password
            });
            if(res.status == 200){
                cookies.set('username', signup_username);
                cookies.set('password', signup_password);
                setCurrentPage(1);
            }
        }
        catch(e){
            alert(e.message);
        }
    }

    //SUBMIT CALLS

    const personalSubmit = async({signup_first_name, 
        signup_last_name, signup_age, signup_gender, signup_ethnicity}) =>{
        try{
            const res = await axios.post(`${serverIp}/update_user`, {
        
                username: cookies.get('username'),
                password: cookies.get('password'),
                firstName: signup_first_name,
                lastName: signup_last_name,
                age: signup_age,
                gender: signup_gender,
                ethnicity: signup_ethnicity
            });
            if(res.status == 200){
                setCurrentPage(2);
            }
        }
        catch(e){
            alert(e.message);
        }
    }

    const jobSubmit = async({signup_jobs, signup_roles}) =>{
        console.log({
            username: cookies.get('username'),
            password: cookies.get('password'),
            skills: signup_jobs,
            experiences: signup_roles,
            email: cookies.get('username')
        })
        try{
            const res = await axios.post(`${serverIp}/create_resume`, {
                username: cookies.get('username'),
                password: cookies.get('password'),
                skills: signup_jobs,
                experiences: signup_roles,
                email: cookies.get('username')
            });
            if(res.status == 200){
                setCurrentPage(3);
            }
        }
        catch(e){
            alert(e.message);
        }
    }

    const locationSubmit = async({signup_location}) =>{
        try{
            const res = await axios.post(`${serverIp}/update_user`, {
                username: cookies.get('username'),
                password: cookies.get('password'),
                homeCity: signup_location
            });
            if(res.status == 200){
                navigate('/');
            }
        }
        catch(e){
            alert(e.message);
        }
    }

    //PAGE CONTENT


    if (currentPage === 0) {
        pageContent =
            <div className = "login">
                <div className="logo">
                    <a href="/home">
                        <img src={logo} height="100vh" width= "auto" minwidth= "0" minheight= "0">
                        </img>
                    </a>
                </div>
                <Form
                    id='signup_username_form'
                    action={signup}
                    validation={usernameValidation}
                    styleName="loginForm">
                        <Input id='signup_username' className='loginInput' promptText='email'/>
                        <div/>
                        <Input id='signup_password' className='loginInput' promptText='password' type='password'/>
                        <div/>
                        <Input id='signup_password_repeat' className='loginInput' promptText='re-enter password' type='password'/>
                        <div/>
                        <button id='signup_username_submit' className="submitButton">
                            Sign up
                        </button>
                </Form>
                <p className="signup">
                    Already a CVAI user? Login <a href='/login' className="link">here</a>
                </p>
            </div>
    } else {
        let infoPrompt;
        let infoForm;
        switch (currentPage) {
            case 1:
                infoPrompt = <p key={0} className="signupText">Let's get started. Tell us a bit about yourself:</p>
                infoForm = <Form
                    id='signup_personal_form'
                    key={1}
                    action={personalSubmit}
                    validation={personalValidation}
                    styleName="signupForm">
                        <div className="signupRow">
                            <Input id='signup_first_name' className='signupInput' promptText='First name'/>
                            <Input id='signup_middle_initial' className='signupInput' promptText='M.I.'/>
                            <Input id='signup_last_name' className='signupInput' promptText='Last name'/>
                        </div>
                        <div className="signupRow">
                            <Input id='signup_age' className='signupInput' promptText='Age'/>
                            <DropdownInput id='signup_gender' className='signupDropdownInput' promptText='Gender' options={['Male', 'Female', 'Nonbinary/Queer']}/>
                            <DropdownInput id='signup_ethnicity' className='signupDropdownInput' promptText='Ethnicity' options={ethnicities}/>
                        </div>
                        <button id='signup_personal_submit' className="nextButton">Next</button>
                </Form>
                break;
            case 2:
            infoPrompt = <p key={2} className="signupText">Tell us a bit about the jobs you're interested in:</p>
            infoForm = <Form
                id='signup_job_form'
                key={3}
                action={jobSubmit}
                styleName="signupForm">
                    <div className="signupRow">
                        <MultiAutocomplete id='signup_jobs' className='multiDropdown' promptText='What&apos;s your profession?' options={jobs} maxInputs={3}/>
                    </div>
                    <div className="signupRow">
                        <MultiAutocomplete id='signup_roles' className='multiDropdown' promptText='What type of role are you looking for?' options={roles} maxInputs={3}/>
                    </div>
                    <button id='signup_jobs_submit' className="nextButton">Next</button>
                </Form>
            break;
            case 3:
            infoPrompt = <p key={4} className="signupText">Tell us a bit about where you're located:</p>
            infoForm = <Form
                id='signup_location_form'
                key={5}
                action={locationSubmit}
                styleName="signupForm">
                <div className="signupRow">
                    <DropdownInput id='signup_location' className='multiDropdown' promptText='What is your home city' options={locations}/>
                </div>
                <button id='signup_location_submit' className="nextButton">Sign up</button>
                </Form>
            break;
        }
        pageContent =
            <div className="login">
                <div className="logo">
                    <a href="/home">
                        <img src={logo} height="100vh" width= "auto" minwidth= "0" minheight= "0">
                        </img>
                    </a>
                </div>
                {infoPrompt}
                {infoForm}
            </div>
    }

    return pageContent;
}

export default SignupPage;
