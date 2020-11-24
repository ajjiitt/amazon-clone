import React ,{useState} from "react";
import "./css/login.css";
import { Link } from "react-router-dom";
function Login() {
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const signIn = e =>{
    e.preventDefault()
}
const register= e =>{
    e.preventDefault();
}
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form className="login__form">
          <h5>Email</h5>
          <input type="text" value={email} onChange={e=>{setEmail(e.target.value)}} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={e=>{setPassword(e.target.value)}}/>
          <button className="login__signInButton" onClick={signIn}>Sign-in</button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onclick ={register}className="login__registerButton">Create New Account</button>
      </div>
    </div>
  );
}

export default Login;
