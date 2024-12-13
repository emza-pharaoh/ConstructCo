import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import Navbar from './Navbar';
import {MenuLinks} from './Navbar'
const SideBarView = ({showMenu}) => {
  return (
    <div className={`${showMenu ? "left-0" : "left-[-100%]"}
     fixed bottom-0 top-0 w-[75%]
     transition-all duration-300 pt-10 px-8 
     bg-white dark:bg-gray-900 shadow-2xl z-50` }>
        <div className='card'>
            {/* User section */}
          <div className="flex items-center justify-start gap-3">
            <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500 ">Premium User</h1>
          </div>
        </div>

        {/* Navlinks */}
        <nav>
          <ul className='p-2 pt-9'>
            {
              MenuLinks.map(({id, name, link}) => {
                  return (
                    <li key={id} className="pt-5 cursor-pointer
                    hover:text-primary py-2
                    transition-all duration-150 ">
                      <a href={link} className="">{name}</a>
                    </li>
                  );
              })
            }
          </ul>
        </nav>
           
        </div>

        

    </div>
  )
}

export default SideBarView