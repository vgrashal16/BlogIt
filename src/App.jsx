import { useState } from 'react'
import './App.css'
import Post from "./components/Post"
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={    
          <div className="seePosts">
            <IndexPage/>
          </div>  
          }/>
        <Route path={'/login'} element={<LoginPage/>}/>
        <Route path={'/register'} element={<RegisterPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
