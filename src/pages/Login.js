import Header from '../components/Header'

function Login() {
    return(
        <div>
            <Header isAuthenticated={false}/>
            <h1>
                Hello, I am the login page.
            </h1>
        </div>
    );
}

export default Login;