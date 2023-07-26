import React, { useState } from 'react'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
function RegisterPage() {

  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const[redirect, setRedirect] = useState(false);

  const url = "http://localhost:8000/register";

  const toastStyle = {style: {
    border: '0',
    borderBottom: '2px solid #660066',
    borderRadius: '16px',
    color: '#000000',
  },
  iconTheme: {
    primary: '#000000',
    secondary: '#FFFFFF',
  },
  duration: 2000,}

  const handleSubmit = () => {
    axios.post(url, { username, password })
      .then((res) => {
        if (res.data === "True") { 
          toast.error("Username already taken, please choose another username", toastStyle);
        }
        else if(res.data === "Done") {
          toast.success("Registration successful", toastStyle);
          setTimeout(() => setRedirect(true), 2000);
        }
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };
  
  if(redirect){
    return <Navigate to={'/login'}/>
  }
  return (
    <>
    <Toaster 
    position="top-center"
    />
    <form className='register'>
      <h1>Register</h1>
      <input type='text' value = {username} placeholder='username' onChange={(e)=>{setUsername(e.target.value)}}/>
        <input type='password' value = {password} placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type='button' onClick={handleSubmit}>Register</button>
    </form>
    </>
  )
}

export default RegisterPage
