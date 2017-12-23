import React from 'react'
import './navigation.css'

export default function Navigation() {
  return (
    <nav>
      <ul className='navList col-3'>
        <li className='navAbout'>About</li>
        <li className='navServ'>Services</li>
        <li className='navPort'>Portfolio</li>
        <li className='navCon'>Contact</li>
      </ul>
    </nav>
  )
}