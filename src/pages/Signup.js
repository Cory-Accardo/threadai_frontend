import Form from '../components/Form';
import Input from '../components/Input';
import logo from '../styles/logo.png';
import { useState } from 'react';

function SignupPage() {

    // Four different subpages on the signup page: 0 (username and password), 1 (personal info), 2 (job info), and 3 (location info)
    const [currentPage, setCurrentPage] = useState(0);

    let pageContent;

    if (currentPage === 0) {
        pageContent =
            <div>
                <div className="grayspace"></div>
                <div className="grayspace"></div>
                <div className="grayspace"></div>
                <img src={logo} height="100vh" width= "auto" minWidth= "0" minHeight= "0"/>
                <div className="grayspace"></div>
                <Form
                    id='signup_username_form'
                    action='/signup/username'
                    method='POST'
                    onResponse={(response) => setCurrentPage(1)}>
                        <div>
                            <Input id='signup_username' className='signup_input'/>
                            <div className="grayspace"></div>
                            <Input id='signup_password' className='signup_input'/>
                            <div className="grayspace"></div>
                            <Input id='signup_password_repeat' className='signup_input'/>
                        </div>
                </Form>
                <div className="grayspace"></div>
                <p>Already a CVAI user? Login <a href='/login'>here</a></p>
            </div>
    }

    return pageContent;
}

export default SignupPage;
