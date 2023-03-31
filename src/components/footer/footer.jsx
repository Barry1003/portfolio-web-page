import React from 'react'
import './footer.css'
import {BsTwitter} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { ImWhatsapp } from 'react-icons/im'

const Footer = () => {
  return (
     <footer>
      <a href="#" className='footer_logo'></a>
      <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#eexpirience">Expirence</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#potfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li> 
      </ul>

      <div className='footer_socials'>
        <a href="https://www.linkedin.com/in/usaamah-ishola-503703208/" target='_blank'><BsLinkedin/></a>
        <a href="https://twitter.com" target='_blank'><BsTwitter/></a>
        <a href="https://github.com/Barry1003" target='_blank'><BsGithub/></a>
        <a href=" https://wa.me/+2348068751203"target='_blank'><ImWhatsapp/></a>
      </div>

      <div className="footer_copy-right">
        <small>&copy; IShola Usaamah Portfolio, All right reserverd</small>
      </div>
     </footer>
  )
}

export default Footer