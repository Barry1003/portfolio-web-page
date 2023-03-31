import React from 'react'
import './expirience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const expirience = () => {
  return (
    <section id="expirience">
      <h5>What skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container expirience_container">
        <div className="expirience_frontend">
          <h3>Frontend Development</h3>
          <div className="expirience_content">
            <article className = 'expirience_details'>
              <div>
              <BsFillPatchCheckFill className='expirience_details-icon'/>
              <h4>HTML</h4>
              <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className = 'expirience_details'>
              <div>
              <BsFillPatchCheckFill className='expirience_details-icon'/>
              <h4>HTML</h4>
              <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className = 'expirience_details'>
              <div>
              <BsFillPatchCheckFill className='expirience_details-icon'/>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className = 'expirience_details'>
              <div>
              <BsFillPatchCheckFill className='expirience_details-icon'/>
              <h4>Jvascript</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className = 'expirience_details'>
             <div>
             <BsFillPatchCheckFill className='expirience_details-icon'/>
              <h4>Bootstrap</h4>
              <small className="text-light">Itermediate</small>
             </div>
            </article>
            <article className = 'expirience_details'>
              <div>
              <BsFillPatchCheckFill className='expirience_details-icon'/>
              <h4>React js</h4>
              <small className="text-light">Experinced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="expirience_backend">
        <div className="expirience_content">
            <article className = 'expirience_details'>
              <div>
              <BsFillPatchCheckFill className='expirience_details-icon'/>
              <h4>C</h4>
              <small className="text-light">Imtermidiate</small>
              </div>
            </article>
            <article className = 'expirience_details'>
              <div>
              <BsFillPatchCheckFill className='expirience_details-icon'/>
              <h4>Python</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className = 'expirience_details'>
              <div>
              <BsFillPatchCheckFill className='expirience_details-icon'/>
              <h4>SQL </h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default expirience