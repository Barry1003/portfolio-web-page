import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBookHalf} from 'react-icons/bs'
import  {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {MdContacts} from 'react-icons/md'
import { useState } from 'react'
import { TfiGallery} from 'react-icons/tfi'
 

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
     <nav>
      <a href="#" onClick = {()=> setActiveNav('#')} className = {activeNav === '#' ? 'active' : '' }> <FaHome/> </a>
      <a href="#about" onclck = {()=> setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : '' }><AiOutlineUser/></a>
      <a href="#services"><MdOutlineMiscellaneousServices/></a>
      <a href="#potfolio">< TfiGallery/></a>
      <a href="#testimonial"><BsBookHalf/></a>
      <a href="#contact"><MdContacts/></a>
     </nav>
  )
}

export default Nav