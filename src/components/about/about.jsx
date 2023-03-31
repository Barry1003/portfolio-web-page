import React from 'react'
import './about.css'
import Me from '../../assets/Me.jpeg'
import {FaAward} from 'react-icons/fa'
import{BsPeopleFill} from 'react-icons/bs'
import {BsFolder} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About ME</h2>
      <div class="container about_container">
          <div className='about_me'>
            <div className='about_me-image'>
             <img src={Me} alt/>
          </div>
          </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>experience</h5>
             <small>1+year</small>
            </article>
            <article className='about_card'>
              <BsPeopleFill className='about_icon'/>
              <h5>client</h5>
             <small>200+Worldwide</small>
            </article>
            <article className='about_card'>
              < BsFolder className='about_icon'/>
              <h5>Project</h5>
             <small>20+Completed</small>
            </article>
          </div>
            <p>
              I am a fully committed, knowledge and confident software engineer who possesses the necessary skills, qualities and experience to meet the demands of the job description. I take great pride in the work I carry out as a software engineer and I believe the problem-solving capabilities, the communication and interpersonal skills, and the attention to detail I possess will ensure I make a fast and immediate impact wherever i go.
            </p>
            <a href="#contact" className='btn btn-primary ctn' >Let's Talk</a>

        </div>
     </div>
    </section>
  )
}

export default About