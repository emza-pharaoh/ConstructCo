import React from 'react'
import CountUp  from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaLocationDot } from "react-icons/fa6";

const ProjectsData = [
    {
      id: 1,
      name: "Skyline Tower",
      image: "https://images.pexels.com/photos/14795877/pexels-photo-14795877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "A 40-story luxury residential building located in the heart of downtown. Features modern amenities, eco-friendly design, and panoramic city views.",
      category: "Residential Construction",
      location: "Downtown, New York",
      completionDate: "2023-08"
    },
    {
      id: 2,
      name: "Greenwood Office Park",
      image: "https://images.pexels.com/photos/8425401/pexels-photo-8425401.jpeg",
      description: "A sustainable business complex with 10 office buildings, featuring energy-efficient architecture and green spaces to promote a healthy work environment.",
      category: "Commercial Construction",
      location: "Silicon Valley, California",
      completionDate: "2022-06"
    },
    {
      id: 3,
      name: "Seaside Villas",
      image: "https://images.pexels.com/photos/1375383/pexels-photo-1375383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "A collection of 20 premium beachfront villas designed for ultimate comfort and relaxation, combining luxury living with natural beauty.",
      category: "Residential Construction",
      location: "Malibu, California",
      completionDate: "2024-01"
    },
    {
      id: 4,
      name: "CityLink Bridge",
      image: "https://images.pexels.com/photos/29749531/pexels-photo-29749531/free-photo-of-stunning-dubai-skyscrapers-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "An architectural marvel that connects two major districts, easing transportation and boosting connectivity in the region.",
      category: "Infrastructure Development",
      location: "Austin, Texas",
      completionDate: "2021-12"
    },
    {
      id: 5,
      name: "Riverside Mall",
      image: "https://images.pexels.com/photos/13398113/pexels-photo-13398113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "A 3-story shopping and entertainment center featuring retail outlets, a cinema, and dining options, designed to provide a vibrant community space.",
      category: "Commercial Construction",
      location: "Orlando, Florida",
      completionDate: "2020-05"
    },
    {
      id: 6,
      name: "Hillside Community Center",
      image: "https://images.pexels.com/photos/427649/pexels-photo-427649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "A multipurpose community center offering recreational activities, fitness classes, and event spaces for residents of all ages.",
      category: "Public Infrastructure",
      location: "Denver, Colorado",
      completionDate: "2023-02"
    },
  
  ];
  
  


const Projects = () => {

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

    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures the counter animates only once
        threshold: 0.5, // Trigger when 50% of the component is visible
      });


  return (
    <>
    <div className='bg-projects bg-cover overflow-hidden bg-center min-h-screen md:w-full'>
        {/* Counter Section */}
        <div >

        <h1 className="text-5xl font-bold text-secondary text-shadow-xl text-center p-5 pt-16 animate-pulse">PROJECTS</h1>

        <div ref={ref} className="flex justify-around bg-gray-700 bg-opacity-60 py-10 mt-10 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="text-center">
                 {inView && <CountUp className='text-4xl font-extrabold text-white text-shadow-xl' end={96} duration={3} />}
                <p className="text-2xl font-bold text-secondary text-shadow-xl font-sans mt-2">Houses Built</p>
             </div>

             <div className="text-center">
                {inView && <CountUp className='text-4xl font-extrabold text-white text-shadow-xl' end={300} duration={3} />}
                  <p className="text-2xl font-bold text-secondary text-shadow-xl font-sans mt-2">Successful Projects</p>
            </div>
                    
            <div className="text-center">
                {inView && <CountUp className='text-4xl font-extrabold text-white text-shadow-xl' end={150} duration={3} />}
                <p className="text-2xl font-bold text-secondary text-shadow-xl font-sans mt-2">Satisfied Clients</p>
            </div>
    </div>
        </div>

        {/* Projects Card Section */}

        <div className='relative w-full'>

           {/* Left Blur */}
  <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-500 to-transparent pointer-events-none z-10"></div>


        <div className='flex flex-row justify-center items-center p-20 pl-96 overflow-x-auto scrollbar scrollbar-thumb-primary scrollbar-track-gray-700 scrollbar-thin scroll-smooth'>
            {ProjectsData.map((Data) => {
                return(
                    <div className="container ">
                <div className="card flex flex-col  bg-gray-600 rounded-xl items-center justify-center bg-opacity-70 min-h-full w-[350px] 2xl:w-[450px]" key={Data.id} >
                    <img src={Data.image} alt="image" className='h-[300px] w-full rounded-md'/>
                    <h1 className="text-3xl text-shadow-lg text-primary font-semibold z-10 self-start p-2">{Data.name}</h1>
                    <p className="text-gray-300 text-base p-1 text-shadow-lg self-start text-wrap mx-2">{Data.description}</p>
                    <p className='flex flex-row gap-1 justify-center items-center self-start mx-3'><span><FaLocationDot /></span>{Data.location}</p>

                    <p className="text-2xl text-gray-400 text-shadow-xl font-semibold py-2">{Data.category}</p>

                </div>
                    </div>
                )
            })}
     
        </div>

        {/* Right Blur */}
  <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-500 to-transparent pointer-events-none z-10"></div>

        </div>

        


    </div>
    
    </>
  )
}

export default Projects