import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import HWLogo from '../assets/img/HWLogo.png';

const helpLinks = [
    {
      id: 1,
      name: "FAQs",
      link: "/faqs",
    },
    {
      id: 2,
      name: "Contact Support",
      link: "/contact-support",
    },
    {
      id: 3,
      name: "Insurance Information",
      link: "/insurance-info",
    },
    {
      id: 4,
      name: "Book an Appointment",
      link: "/book-appointment",
    },
  ];
const resourceLinks = [
    {
      id: 1,
      name: "Dental Care Tips",
      link: "/dental-care-tips",
    },
    {
      id: 2,
      name: "Our Blog",
      link: "/blog",
    },
    {
      id: 3,
      name: "Patient Forms",
      link: "/patient-forms",
    },
    {
      id: 4,
      name: "Treatment Guides",
      link: "/treatment-guides",
    },
  ];
const footerLinks = [
    {
      id: 1,
      name: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      id: 2,
      name: "Terms of Service",
      link: "/terms-of-service",
    },
    {
      id: 3,
      name: "Careers",
      link: "/careers",
    },
    {
      id: 4,
      name: "About Us",
      link: "/about-us",
    },
  ];


const Footer = () => {
  return (
    <>
    <div className=" bg-black text-white">
        <div className="grid md:grid-cols-4">
            <div data-aos="fade-in" data-aos-delay="300"  className='p-10'>
                <h1 className='sm:text-3xl text-xl sm:text-left text-justify mb-3 gap-3 items-center font-poppins'>DentistCo</h1>
                <p className="text-sm">
                At DentistCo, we are dedicated to delivering exceptional dental care with a personalized touch.
                Our mission is to create healthy, confident smiles through state-of-the-art treatments and a compassionate approach.
                Your smile is our passion, and we are here to make every visit a comfortable and rewarding experience
                </p>
                <br />
                {/* Social Media Links */}
                <div className="flex items-center gap-4 mt-6">
                    <a href="#">
                        <FaInstagram className='text-2xl hover:text-primary duration-300'/>
                    </a>
                    <a href="#">
                        <FaLinkedin className='text-2xl hover:text-primary duration-300'/>
                    </a>
                    <a href="#">
                        <FaFacebook className='text-2xl hover:text-primary duration-300'/>
                    </a>
                    <a href="#">
                        <img src={HWLogo} alt="Logo" className='w-9'/>
                    </a>
                </div>
            </div>

            {/* FooterLinks*/}
            <div data-aos="fade-down" data-aos-delay="500" >
                <div className="py-8 px-4">
                    <h1 className="text-xl font-bold mb-3">
                        Company
                    </h1>
                    <ul className="space-y-3">
                        {footerLinks.map((link) => {
                            return(
                                <li key={link.id} className="cursor-pointer hover:translate-x-1 duration-300
                                hover:text-primary space-x-1 text-gray-400">
                                    <span>{link.name}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            {/* HelpLinks */}
            <div data-aos="fade-down" data-aos-delay="700" >
                <div className="py-8 px-4">
                    <h1 className="text-xl font-bold mb-3">
                        Help
                    </h1>
                    <ul className="space-y-3">
                        {helpLinks.map((link) => {
                            return(
                                <li key={link.id} className="cursor-pointer hover:translate-x-1 duration-300
                                hover:text-primary space-x-1 text-gray-400">
                                    <span>{link.name}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            {/* ResourceLinks */}
            <div data-aos="fade-down" data-aos-delay="900" >
                <div className="py-8 px-4">
                    <h1 className="text-xl font-bold mb-3">
                        Resources
                    </h1>
                    <ul className="space-y-3">
                        {resourceLinks.map((link) => {
                            return(
                                <li key={link.id} className="cursor-pointer hover:translate-x-1 duration-300
                                hover:text-primary space-x-1 text-gray-400">
                                    <span>{link.name}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
        {/* Copyright Text */}
        <div   className='text-center pb-5'>
            <h1  className="text-base font-thin"><span className='text-lg font-semibold'>DentistCo</span> © Copyright All Rights Reserved 2024 | Website Designed By  <span className='font-semibold text-gray-300 shadow-xl'>Emanuel Mhlanga</span></h1>
        </div>
    </div>
    </>
  )
}

export default Footer