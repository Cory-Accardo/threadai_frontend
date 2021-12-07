import '../styles/login.scss';
import logo from '../styles/logo.png';
import Form from '../components/Form';
import Input from '../components/Input';

function Login() {
    function validate(params) {
        if (params.test_dropdown === '' || !params.test_multi_autocomplete?.length) {
            return false;
        }
        return true;
    }

    function handleResponse(response) {
        console.log(JSON.stringify(response));
    }

    return(
    <>
        <div className="login">
            <div className="logo">
                <a href="/home">
                    <img src={logo} height="100vh" width= "auto" minwidth= "0" minheight= "0">
                    </img>
                </a>
            </div>
            <div className="form">
                <Form hasPills={true} action="https://www.google.com" method='get' validation={validate} onResponse={handleResponse} styleName="loginForm">
                    <Input id='email' className='loginInput' promptText='Email'/>
                    <div/>
                    <Input id='password' className='loginInput' promptText='Password'/>
                    <div/>
                    <button id='submit_button' className="submitButton">
                        Submit
                    </button>
                </Form>
            </div>
            <div className="signup">
                new to CVAI? Sign up <a href="/signup" className="link">here</a>
            </div>
        </div>
    </>
    );
}

export default Login;
