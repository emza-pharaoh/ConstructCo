import React from 'react'

import Slider from "react-slick";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const HeroInfo = [
  {
    heading: "Urban Development",
    subheading: "Shaping Modern Cities",
    image: "https://images.pexels.com/photos/10631119/pexels-photo-10631119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // A modern city skyline with cranes and a partially built skyscraper
    paragraph: "We specialize in transforming cities with cutting-edge designs and sustainable urban planning. From high-rises to commercial hubs, we bring your vision to life."
  },
  {
    heading: "Building Dream Homes",
    subheading: "Creating Comfortable Living Spaces",
    image: "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // A close-up of workers building a home with bricks and timber in view
    paragraph: "Your home is your sanctuary. We take pride in constructing beautiful, durable, and customized residential spaces for families to thrive."
  },
  {
    heading: "Strengthening Connections",
    subheading: "Infrastructure for Growth",
    image: "https://images.pexels.com/photos/12384330/pexels-photo-12384330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // A wide shot of a bridge under construction or a highway project
    paragraph: "From roads to bridges, we build the critical infrastructure that connects people and communities, ensuring quality and longevity."
  },
  {
    heading: "Transforming Spaces",
    subheading: "Innovative Renovation Solutions",
    image: "https://danikbath.co.nz/wp-content/uploads/2024/01/R-A-Paul_Home-renovation-specialists_Bathroom-renovation-project-1318x659-1.jpg", // A before-and-after image of a building restoration project
    paragraph: "Breathe new life into existing spaces. Our renovation experts deliver innovative solutions tailored to your needs, with a focus on craftsmanship and detail."
  }
];





const DrInfo = () => {
    // Settings for the Slider
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "Linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };

  return (
    <>
        <div className=" dark:text-white">
            <div className="container">
            {/* Doctor Info Section */}
             <div data-aos="fade-in" data-aos-delay="500" >
                <Slider {...settings} className=" p-1 h-full w-full">
                    {HeroInfo.map((Info) => {
                        return(
            <div key={Info.id} className="w-full h-full shadow-md rounded-2xl ">
                            
                            

                <main className=' dark:text-white duration-300'>
                      <div className="container">
                    <div className='grid grid-cols-1  md:grid-cols-2 gap-5 items-center w-full h-full'>
                      {/* Image Section */}
                      <div data-aos="zoom-in" className='order-1 sm:order-2 relative'>
                      <img src={Info.image} alt="Pic" className='rounded-2xl'/>

                      </div>
                      {/* Text Section */}
                      <div  className='space-y-5 order-2 sm:order-1'>
                          <h1 data-aos="fade-up" className='text-4xl sm:text-5xl font-semibold text-shadow-xl'>{Info.heading} <span className='text-secondary font-light text-shadow-lg'>{Info.subheading}</span> </h1>
                          <p data-aos="fade-up" data-aos-delay="200" className='text-2xl font-thin text-gray-200 text-shadow-xl'>
                    {Info.paragraph}
                    </p>

                    
                </div>
                    </div>
                   </div>
              </main>

                                
            </div>
                           
                        );
                    })}
                </Slider>
             </div>
            </div>
        </div>
    </>
  )
}

export default DrInfo
