import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [username, setUsername] = useState(null);
  const url = "http://localhost:8000/profile";
  const url2 = "http://localhost:8000/logout";


  useEffect(() =>{
    // axios.get(url, {withCredentials: true})
    fetch(url, {credentials: 'include'}).then(res => {
      res.json().then((userInfo)=>{
        setUsername(userInfo.username);
      })
    })
  },[]);


  const handleLogout = () => {
    fetch(url2, {credentials: 'include', method: 'POST'});
    setUsername(null);
  }
  return (
    <header>
    <Link to="/" className="logo">BlogIt</Link>
    <nav>
        {username && (
          <>
            <Link to='/create'>Create New Post</Link>
            <a onClick={handleLogout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

    </nav>
  </header>
  )
}

export default Header
