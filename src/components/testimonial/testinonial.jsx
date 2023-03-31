import React from 'react'
import './testimonial.css'
import AV1 from '../../assets/avatar1.jpg'
import AV2 from '../../assets/avatar2.jpg'
import AV3 from '../../assets/avatar3.jpg'
import AV4 from '../../assets/avatar4.jpg'

import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
     avart:AV1,
    name:'Tina Snow',
    reveiw: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at nam molestiae ut temporibus expedita! Dolor illo, asperiores nostrum quis sint, dolorum odit nobis porro recusandae ipsam incidunt velit molestias.'
  },
  {
   avart:AV4,
   name:'Ozioma',
   reveiw: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at nam molestiae ut temporibus expedita! Dolor illo, asperiores nostrum quis sint, dolorum odit nobis porro recusandae ipsam incidunt velit molestias.'
 },
 {
  avart:AV3,
  name:'Abdul-basit Seriki',
  reveiw: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at nam molestiae ut temporibus expedita! Dolor illo, asperiores nostrum quis sint, dolorum odit nobis porro recusandae ipsam incidunt velit molestias.'
},
{
  avart:AV2,
 name:'Emmah Abo',
 reveiw: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at nam molestiae ut temporibus expedita! Dolor illo, asperiores nostrum quis sint, dolorum odit nobis porro recusandae ipsam incidunt velit molestias.'
},

]


const Testinonial = () => {
  return (
     
    <section id="testimonials">
    
      <h5>Review from client</h5>
     <h2>Testimonial</h2>
     <Swiper className ='container testimonial_container '
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
     >
        {
          data.map(({avart, name, reveiw},index) =>{
            return(
              <SwiperSlide key = {index} className='testimoninals'>
              <div className="client_avatar">
                <img src = {avart}  />
              </div><h5> {name}</h5>
                 <small className='client_review'>
                    {reveiw}
                   </small>
            </SwiperSlide>
            )
          })
        }
     </Swiper>
    </section> 
  )
}

export default Testinonial