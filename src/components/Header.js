function Header(props) { //Expects props.isAuthenticated boolean
    return (
      <div className="">
          {props.isAuthenticated === true ? <h1>Welcome back!</h1> : <h1>Sign in.</h1>}
      </div>
    );
  }
  
  export default Header;