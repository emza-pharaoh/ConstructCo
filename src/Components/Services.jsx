import React from 'react'
import { FaBuilding, FaPaintRoller, FaHardHat, FaTree, FaTools} from 'react-icons/fa';
import {FaHouse} from 'react-icons/fa6';

const ServiceData = [
  {
    id: 0,
    icon: <FaHouse />, // Use a house icon or blueprint design to represent residential construction
    title: "Residential Construction",
    description: "We build custom homes, apartments, and residential properties tailored to your needs.",
    aosDelay: "0"
  },
  {
    id: 1,
    icon: <FaBuilding/>, // Use a skyscraper or office building icon to represent commercial construction
    title: "Commercial Construction",
    description: "Specializing in office buildings, retail spaces, and industrial warehouses.",
    aosDelay: "100"
  },
  {
    id: 2,
    icon: <FaPaintRoller />, // Use a paint roller or crossed hammer and wrench for renovations
    title: "Renovations & Remodeling",
    description: "Transform your space with expert kitchen, bathroom, and full-property remodeling services.",
    aosDelay: "200"
  },
  {
    id: 3,
    icon: <FaHardHat />, // Use a hard hat or clipboard icon for general contracting
    title: "General Contracting",
    description: "Providing end-to-end project management, subcontractor coordination, and budget planning.",
    aosDelay: "300"
  },
  {
    id: 4,
    icon: <FaTree />, // Use a leaf, tree, or solar panel to represent green building and sustainability
    title: "Green Building",
    description: "Incorporating energy-efficient designs and eco-friendly materials into your projects.",
    aosDelay: "400"
  },
  {
    id: 5,
    icon: <FaTools />, // Use a wrench, toolbox, or repair icon to represent repairs and maintenance
    title: "Repairs & Maintenance",
    description: "Structural repairs, plumbing, electrical, and HVAC maintenance to keep your property in top shape.",
    aosDelay: "500"
  }
]



const Services = () => {
  return (
    <>
    
    <div className="bg-gray-500 dark:bg-gray-900 dark:text-white py-12 sm:grid sm:place-items-center">

    <div className='relative w-full max-w-lg sm:-bottom-40'>
    
            <div className='animate-blob animation-delay-2000 absolute top-0 -left-48 w-96 h-96
                 bg-gray-700 rounded-sm mix-blend-multiply filter blur-xl opacity-70'></div>
            <div className='animate-blob animation-delay-4000 absolute top-0 -right-24 md:-right-48 w-96 h-96
                 bg-black rounded-sm mix-blend-multiply filter blur-xl opacity-70'></div>
            <div className='animate-blob absolute  items-center left-20 -bottom-80 w-96 h-96
                 bg-red-600 rounded-sm mix-blend-multiply filter blur-xl opacity-70'></div>
            <div className='animate-blob absolute  items-center  -bottom-[500px] w-96 h-96
                 bg-primary rounded-sm mix-blend-multiply filter blur-xl opacity-90 bottom-90'></div>

         </div>

        <div className="container">
            {/* Header Section */}
            <div className="text-center pb-12 space-y-3">
                <h1 data-aos="fade-in" data-aos-delay="400" className="text-3xl font-semibold text-secondary dark:text-primary">Explore Our Services</h1>
                <p data-aos="fade-in" data-aos-delay="700" data-aos-easing="ease-in" >Crafting Spaces with Expertise and Precision</p>
            </div>
            {/* Card Section */}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                {ServiceData.map((service) => {
                return (
                <div data-aos="fade-up"
                data-aos-delay={service.aosDelay} 
                key={service.id} className="card space-y-3 sm:space-y-4 p-4">
                    <h3 className='text-shadow-xl text-lg font-semibold text-primary dark:text-gray-500 '>{service.title}</h3>
                    <div className='bg-primary h-[50px] w-[50px] flex items-center justify-center rounded-full drop-shadow-2xl hover:cursor-pointer hover:bg-yellow-700 duration-300'>{service.icon}</div>
                    <p className='text-gray-200 dark:text-white text-shadow-xl dark:text-primary'>{service.description}</p>
                </div>);})}
            </div>
            {/* btn Section */}
            <div data-aos="fade-up" data-aos-delay="200" className='text-center mt-6'>
                <button className="btn-primary " >Learn More</button>
            </div>
            
           
        </div>
      </div>
        </>
        );
      }

export default Services;