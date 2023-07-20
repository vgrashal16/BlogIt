import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
    <Link to="/" className="logo">BlogIt</Link>
    <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
    </nav>
  </header>
  )
}

export default Header
