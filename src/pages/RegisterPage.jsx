import React from 'react'

function RegisterPage() {
  return (
    <form className='register'>
      <h1>Register</h1>
        <input type='text' placeholder='username'/>
        <input type='password' placeholder='password'/>
        <button type='submit'>Register</button>
    </form>
  )
}

export default RegisterPage
