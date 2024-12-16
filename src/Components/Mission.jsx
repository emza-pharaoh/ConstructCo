import React from 'react'

const Mission = () => {


const MissionInfo = [
    {
        sectionTitle: "Building a Better Tomorrow",
        subtitle: "Shaping communities, empowering lives, and driving innovation through construction.",
        missionStatement: "At ConstructCo, our mission is to create sustainable, innovative, and impactful structures that improve the quality of life for individuals and communities. We are committed to delivering excellence in every project, fostering trust with our clients, and leading the industry in environmentally conscious construction.",
        callToAction: "Join us on our journey to transform spaces and build lasting legacies.",
        image: "/path-to-image.jpg"
      }
      
]

  return (
    <>

            
    <div className=' bg-primary dark:bg-gray-900'>
        
    <div className="container h-screen justify-center dark:text-white flex items-center gap-3 flex-col">
        <div className='relative w-full max-w-lg xl:-left-96'>
    
            <div className='animate-blob animation-delay-2000 absolute top-0 -left-4 dark:-left-48 w-96 h-96 xl:w-[500px] xl:h-[500px]
                 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-70'></div>
            <div className='animate-blob animation-delay-4000 absolute top-0 -right-4 dark:-right-48 w-96 h-96 xl:w-[500px] xl:h-[500px]
                 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70'></div>
            <div className='animate-blob absolute  items-center left-20 -bottom-80 w-96 h-96 xl:w-[500px] xl:h-[500px]
                 bg-orange-700 rounded-full mix-blend-multiply filter blur-xl opacity-70'></div>

         </div>
        
        <div className="flex flex-row">
          {/* Text and Button Part */}
          <div className='flex flex-col gap-4'>
                <h1 className="text-3xl md:text-5xl text-center font-bold text-shadow-lg animate-pulse">Our Mission</h1>
                <h1 className="text-2xl md:text-4xl font-semibold text-secondary text-shadow-xl">Building a Better Tommorow</h1>
                <p className="text-2xl md:text-3xl font-thin text-shadow-lg">
                    At ConstructCo, our mission is to create sustainable, innovative, and impactful structures that improve the quality of life for individuals and communities. 
                   We are committed to delivering excellence in every project, fostering trust with our clients, and leading the industry in environmentally conscious construction.
                </p>
                <button className="bg-transparent hover:bg-gary-800 duration-300 border border-gray-900 w-40 py-2 px-4 rounded-sm dark:bg-gray-800 mt-5 self-center animate-pulse">Call Us Today</button>

        </div>
        {/* Image Part */}

        </div>
       
      
        </div>
    </div>

    </>
  )
}

export default Mission