import Form from '../components/Form';
import Input from '../components/Input';
import DropdownInput from '../components/DropdownInput';
import MultiDropdownInput from '../components/MultiDropdownInput';
import MultiAutocomplete from '../components/MultiAutocomplete';
import logo from '../styles/logo.png';
import { useState } from 'react';
import { ethnicities, jobs, roles, locations } from '../inputs.js';
import '../styles/login.scss';

function SignupPage() {

    // Four different subpages on the signup page: 0 (username and password), 1 (personal info), 2 (job info), and 3 (location info)
    const [currentPage, setCurrentPage] = useState(0);

    let pageContent;

    function usernameValidation(params) {
        if (params.signup_username && params.signup_password && params.signup_password === params.signup_password_repeat) {
                return true;
        }
        return false;
    }

    function personalValidation(params) {
        // Age is optional, but if included it should be an integer and at least 18
        if (params.signup_first_name && params.signup_last_name && (!params.signup_age || (Number.isInteger(Number(params.signup_age)) && Number(params.signup_age) >= 18))) {
            return true;
        }
        return false
    }

    if (currentPage === 0) {
        pageContent =
            <div className = "login">
                <div className="logo">
                    <a href="/home">
                        <img src={logo} height="100vh" width= "auto" minWidth= "0" minHeight= "0">
                        </img>
                    </a>
                </div>
                <Form
                    id='signup_username_form'
                    action='/signup/username'
                    method='POST'
                    validation={usernameValidation}
                    onResponse={(response) => setCurrentPage(1)}
                    styleName="loginForm">
                        <Input id='signup_username' className='loginInput' promptText='email'/>
                        <div/>
                        <Input id='signup_password' className='loginInput' promptText='password'/>
                        <div/>
                        <Input id='signup_password_repeat' className='loginInput' promptText='re-enter password'/>
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
                    action='/signup/personal'
                    method='POST'
                    validation={personalValidation}
                    onResponse={(response) => setCurrentPage(2)}
                    styleName="signupForm"
                >
                        <div className="signupRow">
                            <Input id='signup_first_name' className='signupInput' promptText='First name'/>
                            <Input id='signup_middle_initial' className='signupInput' promptText='M.I.'/>
                            <Input id='signup_last_name' className='signupInput' promptText='Last name'/>
                        </div>
                        <div className="signupRow">
                            <Input id='signup_age' className='signupInput' promptText='Age'/>
                            <DropdownInput id='signup_gender' className='signupInput' promptText='Gender' options={['Male', 'Female', 'Nonbinary/Queer']}/>
                            <DropdownInput id='signup_ethnicity' className='signupInput' promptText='Ethnicity' options={ethnicities}/>
                        </div>
                        <button id='signup_personal_submit' className="nextButton">Next</button>
                </Form>
                break;
            case 2:
            infoPrompt = <p key={2} className="signupText">Tell us a bit about the jobs you're interested in:</p>
            infoForm = <Form
                id='signup_job_form'
                key={3}
                action='/signup/jobs'
                method='POST'
                onResponse={(response) => setCurrentPage(3)}
                styleName="signupForm"
            >
                    <div className="signupRow">
                        <MultiDropdownInput id='signup_jobs' className='multiDropdown' pillClassName='pillInput' promptText='What&apos;s your industry?' options={jobs} maxInputs={3}/>
                    </div>
                    <div className="signupRow">
                        <MultiDropdownInput id='signup_roles' className='multiDropdown' pillClassName='pillInput' promptText='What&apos;s your dream role?' options={roles} maxInputs={3}/>
                    </div>
                    <button id='signup_jobs_submit' className="nextButton">Next</button>
                </Form>
            break;
            case 3:
            infoPrompt = <p key={4} className="signupText">Tell us a bit about where you're located:</p>
            infoForm = <Form
                id='signup_location_form'
                key={5}
                action='/signup/location'
                method='POST'
                onResponse={(response) => console.log('Done with signup')}
                styleName="signupForm"
            >
                <div className="signupRow">
                    <MultiAutocomplete id='signup_location' className='multiDropdown' promptText="Pick up to 3 counties" pillClassName='signup_input_pill' options={locations} maxInputs={3}/>
                </div>
                <button id='signup_location_submit' className="nextButton">Sign up</button>
                </Form>
            break;
        }
        pageContent =
            <div className="login">
                <div className="logo">
                    <a href="/home">
                        <img src={logo} height="100vh" width= "auto" minWidth= "0" minHeight= "0">
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
