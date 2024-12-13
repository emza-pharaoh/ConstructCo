import React from 'react';
import HeroContent from './HeroContent';


const Hero = () => {
  return (
    <div className='bg-hero-pattern bg-cover bg-center overflow-hidden min-h-screen md:w-full flex justify-center items-center'>
      <div className="w-full mt-28 ">

        <HeroContent />

      </div>
      


    </div>

  )
}

export default Hero