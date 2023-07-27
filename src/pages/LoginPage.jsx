import React, {useState} from 'react'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

function LoginPage() {

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[redirect, setRedirect] = useState(false);

    const url = "http://localhost:8000/login";

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
      axios.post(url, {username, password},{ withCredentials: true })
      .then((res) => {
        if(res.status === 200){
          toast.success("Login success, logging you in...", toastStyle);
          setTimeout(() => setRedirect(true), 2000);
        }
        else{
          toast.error("username/password may be incorrect", toastStyle);
        }
      })
    }

    if(redirect){
      return <Navigate to={'/'}/>
    }

  return (
    <>
    <Toaster 
    position="top-center"
    />
    <form className='login'>
        <h1>Login</h1>
        <input type='text' value={username} placeholder='username' onChange={(e)=>{setUsername(e.target.value)}}/>
        <input type='password' value={password} placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type='button' onClick={handleSubmit}>Login</button>
    </form>
    </>
  )
}

export default LoginPage
