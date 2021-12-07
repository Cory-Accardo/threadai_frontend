import '../styles/login.scss';
import logo from '../styles/logo.png';
import Form from '../components/Form';
import Input from '../components/Input';
import axios from 'axios';
import {serverIp} from '../constants'
import Cookies from 'universal-cookie';
const cookies = new Cookies();


function Login({navigate}) {
    function validate(params) {
        if (params.test_dropdown === '' || !params.test_multi_autocomplete?.length) {
            return false;
        }
        return true;
    }


    const login = async({email, password}) =>{
        let res;
        console.log(email);
        console.log(password);
        try{
            res = await axios.post(`${serverIp}/login`, {
                username: email,
                password: password
            });
            if(res.status == 200){
                cookies.set('username', email);
                cookies.set('password', password);
                console.log("login successful");
                navigate('/');

            }
        }
        catch(e){
            alert("Bad login");
        }
    }

    return(
    <>
        <div className="login">
            <div className="logo">
                <a href="/home">
                    <img src={logo} height="100vh" width= "auto" minWidth= "0" minHeight= "0">
                    </img>
                </a>
            </div>
            <div className="form">
                <Form hasPills={true} action={login} styleName="loginForm">
                    <Input id='email' className='loginInput' promptText='Email'/>
                    <div/>
                    <Input id='password' className='loginInput' promptText='Password'/>
                    <div/>
                    <button id='login_button' className="submitButton">
                        Login
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