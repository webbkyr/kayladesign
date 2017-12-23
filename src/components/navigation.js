import React from 'react'
import './navigation.css'
import Header from './header';

export default function Navigation() {
  return (
  <div className='navSpacer col-3'>
    <Header />
    <nav> 
      <ul className='navList col-3'>
      <img id='logomain' src='../images/kd-logo'/>
        <li className='navAbout'><a id='about' href='#'>About</a></li>
        <li className='navServ'><a id='services' href='#'>Services</a></li>
        <li className='navPort'><a id='portfolio' href='#'>Portfolio</a></li>
        <li className='navCon'><a id='contact' href='#'>Contact</a></li>
      </ul>
    </nav>
  </div>
  )
}