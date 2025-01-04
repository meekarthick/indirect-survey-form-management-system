import React from 'react'
import Imageslider from '../landingpage/Imageslider'
import slider1 from '../assets/images/slider1.jpg'
import slider2 from '../assets/images/slider2.jpg'
import slider3 from '../assets/images/slider3.jpg'
import slider4 from '../assets/images/slider4.jpg'
import NavBar from '../landingpage/NavBar'
import MainContent from '../landingpage/MainContent'
import Footer from '../landingpage/Footer'
const Home = () => {
  const images = [
    slider1,
    slider2,
    slider3,
    slider4
  ]
  return (
    <div className='homemain-div'>
      <NavBar />
      <Imageslider images={images} />
      <MainContent />
      <Footer />
    </div>
  )
}

export default Home