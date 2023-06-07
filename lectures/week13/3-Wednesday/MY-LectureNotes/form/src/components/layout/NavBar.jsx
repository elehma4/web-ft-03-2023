import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/forms'>Forms</Link></li>
        <li><Link to='/class'>Forms Class</Link></li>
        <li><Link to='/about'>About Us</Link></li>
    </ul>
  )
}

export default NavBar