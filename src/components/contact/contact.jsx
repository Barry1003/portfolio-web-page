import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {ImWhatsapp} from 'react-icons/im'
const contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>isholausaamah@gmail.com</h5>
            <a href="isholausaamah@gmail.com" target='_blank'>Send a mesage</a>
            </article>
            <article className="contact_option">
            <ImWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+2348068751203</h5>
            <a href=" https://wa.me/+2348068751203"target='_blank'>Send a mesage</a>
            </article>
            <article className="contact_option">
            <BsLinkedin className='contact_option-icon'/>
            <h4>Linkendin</h4>
            <h5>Usaamah Ishola</h5>
            <a href="https://www.linkedin.com/in/usaamah-ishola-503703208/" target='_blank'>Send a mesage</a>
            </article>
            </div>
            <div>
            <form action="">
              <input type="text" name='email' placeholder='Your Full Name' required/>
              <input type="email" name='email' placeholder='Your email' required/>
              <textarea name="message"  rows="10" placeholder='Your meassage' required></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
          </div>
      </div>
    </section>
  )
}

export default contact