import React, {useEffect,useState} from 'react';
import Login from './Components/Login';
import firebase from './firebase';
import Home from './Components/Home';
import './App.css'

const App =() => {
  const[user,setUser] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword]=useState("");
  const[emailError,setEmailError]=useState("");
  const[passwordError,setPasswordError]=useState("");
  const[hasAccount,setHasAccount]=useState("");

  const clearInputs = () =>{
    setEmail("");
    setPassword("");
  }
  const clearErrors= ()=>{
    setEmailError("");
    setPasswordError("");
  }

  const hadleLogin =()=>{
    clearErrors()
    firebase
    .auth().signInWithEmailAndPassword(email,password)
    .catch((err)=>{
      // eslint-disable-next-line default-case
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  const handleSignup = () =>{
    clearErrors();
    firebase
    .auth().createUserWithEmailAndPassword(email,password)
    .catch((err)=>{
      // eslint-disable-next-line default-case
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    });
  }

  const handleLogOut =() =>{
    firebase.auth().signOut();
    console.log("hi");
  }


  const authListner=()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      console.log(user);
      if(user){
        clearInputs()
        setUser(user);
      }else{
        setUser("");
      }
    });
  };

  useEffect(()=>{
    authListner();
  },[]);
  return (
    <div className="App">
    {user ? (
      <Home handleLogOut={handleLogOut}/>
    ):
    <Login 
      email={email} 
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword} 
      hadleLogin={hadleLogin}
      handleSignup={handleSignup}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError} 

      />
    }
    </div>
  );
}

export default App;
