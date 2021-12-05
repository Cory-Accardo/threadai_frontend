import Header from '../components/Header'

function Login() {
    return(
    <>
        <div style={{ display: 'flex', height: 'calc(100vh - 130px)', backgroundColor: '#393939' }}>
            <Header isAuthenticated={false} />
            <h1>
                Hello, I am the login page.
            </h1>
        </div>
    </>
    );
}

export default Login;
