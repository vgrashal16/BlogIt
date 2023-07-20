import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
  return (
    <main>
        <Header/>
        <Outlet/>
    </main>
  )
}

export default Layout
