import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import HWLogo from '../assets/img/HWLogo.png';
import Logo from "../assets/icon/LogoNoText.png";

const helpLinks = [
  {
    id: 1,
    name: "FAQs",
    link: "/faqs",
  },
  {
    id: 2,
    name: "Contact Us",
    link: "/contact",
  },
  {
    id: 3,
    name: "Project Consultations",
    link: "/consultations",
  },
  {
    id: 4,
    name: "Request a Quote",
    link: "/request-quote",
  },
];


const resourceLinks = [
  {
    id: 1,
    name: "Construction Tips",
    link: "/construction-tips",
  },
  {
    id: 2,
    name: "Our Portfolio",
    link: "/portfolio",
  },
  {
    id: 3,
    name: "Building Regulations",
    link: "/building-regulations",
  },
  {
    id: 4,
    name: "Sustainability Practices",
    link: "/sustainability",
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
    name: "About ConstructCo",
    link: "/about",
  },
];


const Footer = () => {
  return (
    <>
    <div className=" bg-black text-white">
        <div className="grid md:grid-cols-4">
            <div data-aos="fade-in" data-aos-delay="300"  className='p-10'>
                <a href="#" className='flex flex-row items-center'><img src={Logo} alt="Logo" className='w-12 h-12' /> <span className='text-2xl font-poppins'>ConstructCo</span> </a>
                <p className="text-sm">
                At ConstructCo, we are dedicated to transforming visions into reality through exceptional craftsmanship and innovative design. 
                With a commitment to quality, sustainability, and client satisfaction, we bring expertise to every project, from concept to completion. 
                Our goal is to build not just structures but lasting partnerships and vibrant communities. Let's construct the future together.
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