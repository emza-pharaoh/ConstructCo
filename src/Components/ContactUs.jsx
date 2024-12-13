import React from 'react'
import { FaRegBuilding } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import Swal from 'sweetalert2';

const ContactUs = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        
        // Got the Key On My Email
        formData.append("access_key", "66cdec58-2096-4c27-8230-09f973deef19");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Done!",
                text: "Message Succesfully Sent!",
                icon: "success"
              });
        }
    }

  return (
    <>
    <div className='bg-contact-bg dark:bg-gray-900 dark:text-white bg-cover bg-center overflow-hidden min-h-screen md:w-full flex justify-center items-center'>
        <div className="container p-10 shadow-xl">
            <h1 className="text-5xl text-secondary font-poppins text-shadow-sm text-center p-5">Locate Us</h1>
            <div data-aos="fade-up" data-aos-delay="200"  className="grid md:grid-cols-2 sm:grid-cols-1">

            {/* Left Map Section */}
            <div className=''>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66260.48228107546!2d30.84630245!3d-29.8403165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef6fefcdaa98a29%3A0x89369ff67bd7c3c9!2sPinetown!5e1!3m2!1sen!2sza!4v1734113252518!5m2!1sen!2sza" 
            width="100%" height="100%"
             className='w-full h-full rounded-xl shadow-xl'
             allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
            
            {/* Contact Form Section */}
            <div className='pt-5'>
                <h1 className="text-xl text-thin text-center text-secondary text-shadow-md animate-pulse pb-5">Send A Message</h1>
        <form onSubmit={onSubmit}>
            <div className=' rounded-md flex flex-col gap-3 m-1 h-full'>

                {/* Predefined Subject Line */}
                <input type="hidden" name="subject" value="ConstructCo Client"></input>

                {/* First Name & Last Name */}
                <div className='flex flex-row gap-2 ml-5 mr-5'>
                    <input type="text" placeholder='FirstName' required name='firstname'
                    className='border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-1 focus:ring-primary' />
                    <input type="text" placeholder='LastName' required name='lastname'
                    className='border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-1 focus:ring-primary' />
                </div>

                {/* Email */}
                <input type="email" placeholder='Email' required name='email '
                className='border border-gray-300 rounded-lg p-2 ml-5 mr-5  focus:outline-none focus:ring-1 focus:ring-primary ' />

                {/* Phone Number */}
                <input type="number" placeholder='Phone Number' required name='phone'
                className='border border-gray-300 rounded-lg p-2 ml-5 mr-5  focus:outline-none focus:ring-1 focus:ring-primary ' />

                {/* Message */}
                <input type="text" placeholder='Message' required name='message'
                className='border border-gray-300 rounded-lg p-2 ml-5 mr-5 h-[150px] focus:outline-none focus:ring-1 focus:ring-primary ' />

                {/* Send Message Button */}
                <div className='self-center w-full pr-5 pl-5'>
                    <button className='btn-primary w-full'>Send Message</button>
                </div>
            </div>

        </form>
               
            </div>

                
            </div>
            
        </div>
    </div>
    </>
  )
}

export default ContactUs