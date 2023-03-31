import React from 'react'
import './potfolio.css'
import IMG1 from '../../assets/pot1.jpg'
import IMG2 from '../../assets/pot2.jpg'
import IMG3 from '../../assets/pot3.jpg'
import IMG4 from '../../assets/pot4.jpg'
import IMG5 from '../../assets/pot5.jpg'
import IMG6 from '../../assets/pot6.jpg'

const data = [
  {
    id:1,
    img: IMG1,
    title:' Educational Based Website',
    github:'https://github.com/Barry1003',
    demo: ''
  },
  {
    id:2,
    img: IMG2,
    title:' Data Analyst Front Page',
    github:'https://github.com/Barry1003',
    demo: ''
  },
  {
    id:3,
    img: IMG3,
    title:'crypto currency Dashboard & Finicial Visualizatio',
    github:'https://github.com/Barry1003',
    demo: ''
  },{
    id:4,
    img: IMG4,
    title:'crypto Visualization',
    github:'https://github.com/Barry1003',
    demo: ''
  },
  {
    id:5,
    img: IMG5,
    title:'crypto currency Dashboard & Finicial Visualizatio',
    github:'https://github.com/Barry1003',
    demo: ''
  },
  {
    id:6,
    img: IMG6,
    title:' Bitcoin',
    github:'https://github.com/Barry1003',
    demo: ''
  },
]


const Potfolio = () => {
  return (
    <section id="potfolio">
      <h5>My Recent Work</h5>
       <h2>Portfolio</h2>

       <div className="container potfolio_container">
        {
          data.map(({id, img, title, github, demo}) => {
          return(
            <article className="potfolio_item">
          <div className="potfolio_img-item">
            <img src={img} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="potfolio_item-cta">
          <a href= {github} className='btn' target='_blank'>Github</a>
          <a href= {demo} className='btn btn-primary' target='_blank'>livedemo</a>
          </div>
          </article>
          )
        })

        }
        
       </div>
    </section>
  )
}

export default Potfolio