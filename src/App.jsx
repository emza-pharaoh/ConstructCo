import React from 'react'
import Navbar from './Components/navbar/Navbar';
import Hero from './Components/Hero';
import Mission from './Components/Mission';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Projects from './Components/Projects';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos'
import 'aos/dist/aos.css';


const App = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      delay: 100,
    })
    AOS.refresh();
  }, [])

  return (
    <div>
      <Navbar />
      <Hero />
      <Mission />
      <Projects />
      <Services />
      <ContactUs />
      <Footer />
    </div> 
  )
}

export default App
