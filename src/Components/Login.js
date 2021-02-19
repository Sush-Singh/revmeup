import React, {useEffect,useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = (props) => {
    const {
        setEmail,
        setPassword,
        hadleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError} = props;
  return (
    <selection className="login">
    <div className="loginContainer">
      
        <label for="email" hidden>Email</label>
        <input 
        type="email" 
        required
        name="email" 
        id="email" 
        placeholder="Email" 
        onChange={(e)=>setEmail(e.target.value)}
        />
        <p>{emailError}</p>
    
        <label for="password" hidden>Password</label>
        <input 
        type="password" 
        required
        name="password" 
        id="password" 
        placeholder="Password" 
        onChange={(e)=>setPassword(e.target.value)}
        />
        <p>{passwordError}</p>
      <div className="btnContainer">
          {hasAccount ? (
              <>
                <button
                    onClick={hadleLogin}
                 >Sign In</button>
                <p>Don't have an Account ? <span onClick={()=> setHasAccount(!hasAccount)}>Sign Up</span></p>
              </>
          ):(
            <>
                <Button
                    onClick={handleSignup}>Sign Up</Button>
                <p>Have an Account ? <span onClick={()=> setHasAccount(!hasAccount)}>Sign In</span></p>
              </>

          )}
      </div>
    </div>
    </selection>
  );
}

export default Login;