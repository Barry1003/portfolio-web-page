import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'
const Services = () => {
  return (
    <section id="services">
       <h5>What I Offer</h5>
       <h2>Services</h2>

        <div className="container services_container">
        <article className='services'>
          <div className="secrvice_head">
            <h3> Frontend Development</h3>
          </div>
          <ul className="service_list">
             <li>
               <BsCheck2 className='service_list-icom'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.
                </p>
             </li>
             <li>
               <BsCheck2 className='service_list-icom'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.
                </p>
             </li>
             <li>
               <BsCheck2 className='service_list-icom'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.
                </p>
             </li>
             <li>
               <BsCheck2 className='service_list-icom'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.
                </p>
             </li>
          </ul>
          {/* End of front end */}

        </article>
        {/* END OF FRONTEND  */}
        <article className='services'>
          <div className="secrvice_head">
      <h3>Backend Development</h3>
          </div>
          <ul className="service_list">
             <li>
               <BsCheck2 className='service_list-icom'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.
                </p>
             </li>
             <li>
               <BsCheck2 className='service_list-icom'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.
                </p>
             </li>
             <li>
               <BsCheck2 className='service_list-icom'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.
                </p>
             </li>
             <li>
               <BsCheck2 className='service_list-icom'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.
                </p>
             </li>
          </ul>
        </article>
        </div>
    </section>
  )
}

export default Services