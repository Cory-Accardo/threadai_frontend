function Header({isAuthenticated}) {
    return (
      <div className="">
          {isAuthenticated === true ? <h1>Welcome back!</h1> : <h1>Sign in.</h1>}
      </div>
    );
  }
  
  export default Header;