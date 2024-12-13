import React from 'react';
import Logo from "../../assets/icon/LogoNoText.png";
import DarkMode from '../DarkMode';
import { BiMenuAltRight, BiMenuAltLeft } from 'react-icons/bi';
import SideBarView from "./SideBarView";
export const MenuLinks = [
    {
        id: 1,
        name: "About",
        link: "/#about"
    },
    {
        id: 2,
        name: "Services",
        link: "/#Services"
    },
    {
        id: 3,
        name: "Projects",
        link: "/#projects"
    },

    {
        id: 4,
        name: "Testimonials",
        link: "/#Testimonials"
    }
]


const Navbar = () => {

    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

  return (
    <>
    <nav className='fixed top-0 left-0 w-full z-10 bg-black/50 rounded-b-lg backdrop-blur-md  text-secondary dark:bg-black dark:text-white'>
        <div className="container py-3 md:py-2 ">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div> 
                    <a href="#" className='flex flex-col items-center'>
                        <img src={Logo} alt="Logo" className='w-10'/>

                        <span className='text-2xl sm:text-xl font-semibold -translate-y-3'>
                            ConstruCo
                        </span>
                    </a>
                        
                </div>
                {/* Desktop NavLinks */}
                <div className=' hidden md:block pl-[100px] xl:pl-[500px] '>
                    <ul className='flex items-center gap-5'>
                        {
                            MenuLinks.map(({id, name, link}) => {
                                return (
                                    <li key={id} className='cursor-pointer py-4'>
                                        <a href="#" className='text-lg font-medium 
                                        hover:border-b-2
                                        hover:border-primary
                                        hover:text-primary py-2
                                        transition-all duration-300
                                        text-shadow-xl'>{name}</a>
                                    </li>
                                )
                            })
                        }
                        <button className="btn-primary md:w-36">Get In Touch</button>
                        <button>
                            <DarkMode/>
                        </button>
                    </ul>
                </div>

                {/* Mobile Navlinks */}
                <div className='flex gap-2 items-center'>
                    <div className=" xl:hidden md:hidden">
                    <DarkMode/>
                    </div>
                   
                    {
                        showMenu ?
                         (<BiMenuAltRight onClick={toggleMenu} className='text-3xl md:hidden' />
                        ) :
                         (<BiMenuAltLeft onClick={toggleMenu} className='text-3xl md:hidden' />
                         )
                    }
                    
                </div>
            </div>
        </div>
        {/* Sidebar For mobile navlinks */}
        <SideBarView showMenu={showMenu}/>
    </nav>
    </>
  )
}

export default Navbar