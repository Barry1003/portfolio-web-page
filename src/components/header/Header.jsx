import React from 'react'
import  './header.css'
import  CTA from './CTA'
import  Scoials from './socials'
import Me from '../../assets/Me.jpeg'
import Ba from '../../assets/Barry.png'

const Header = () => {
  return (
     <header>
        <img src= {Ba} alt="" className='logo' />
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ishola Usaamah</h1>
        <h5 className="text-light">Frontend Developer</h5>
      
         <CTA/>
         <Scoials/>
         <div className="me">
          <img src={Me}alt="" />
        </div>
        <div >
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
      </div>
      
     </header>
     
  )
}

export default Header