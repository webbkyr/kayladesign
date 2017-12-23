import React from 'react'
import './navigation.css'

export default function Navigation() {
  return (
    <nav>
      <ul className='navList col-3'>
        <li className='navAbout'><a id='about' href='#'>About</a></li>
        <li className='navServ'><a  id='services' href='#'>Services</a></li>
        <li className='navPort'><a id='portfolio' href='#'>Portfolio</a></li>
        <li className='navCon'><a id='contact' href='#'>Contact</a></li>
      </ul>
    </nav>
  )
}