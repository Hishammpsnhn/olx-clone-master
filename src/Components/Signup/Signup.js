import React,{useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Signup.css';
import {db} from "../../firebase/config"
import { addDoc, collection} from 'firebase/firestore'

import {getAuth,
createUserWithEmailAndPassword,
updateProfile
} from 'firebase/auth'

export default function Signup() {
  const [username,setUsername]= useState('')
  const [password,setPassword]= useState('')
  const [phoneno,setPhoneno]= useState('')
  const [email,setEmail]= useState('')

  const auth = getAuth();
  const navigate = useNavigate()

  
const handleSubmit=(e)=>{

  e.preventDefault()
  createUserWithEmailAndPassword(auth,email,password)
  .then((result)=>{

    updateProfile(auth.currentUser,{
      displayName:username
    }).then(()=>{

     const userRef = collection(db,"users")
     addDoc(userRef,{
       id:result.user.uid,
       username:username,
       phone:phoneno
       
     })
    })
    
    .then(()=>{
        navigate('/login')
       
      })
    })
  
  .catch((err)=>{
    alert(err.message)
  })
  
}

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phoneno}
            onChange={(e)=> setPhoneno(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
