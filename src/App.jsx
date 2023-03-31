 import React from 'react'

 import Header from './components/header/Header' 
 import Nav from './components/nav/nav' 
 import  About from './components/about/about'
 import  Expirience from './components/expirience/expirience' 
 import Services from './components/services/services'
 import Potfolio from './components/Potfolio/Potfolio' 
 import Testimonial from './components/testimonial/testinonial' 
 import Contact from './components/contact/contact'
 import Footer from './components/footer/footer'

 const App = () => {
   return (
  <>
    <Header/>
    <Nav/>
    <About/>
    <Expirience/>
    <Services/>
    <Potfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>     
 </>
   )
 }
 
 export default App