import React from 'react'
import Imageslider from '../components/landingpage/Imageslider'
import slider1 from '../components/images/slider1.jpg'
import slider2 from '../components/images/slider2.jpg'
import slider3 from '../components/images/slider3.jpg'
import slider4 from '../components/images/slider4.jpg'
import NavBar from '../components/landingpage/NavBar'
import MainContent from '../components/landingpage/MainContent'
import Footer from '../components/landingpage/Footer'
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