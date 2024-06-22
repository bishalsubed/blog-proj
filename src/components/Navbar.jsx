import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './component.css'
import { Link } from 'react-router-dom'



const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsDropdownOpen(false);
        }
      };
    
      useEffect(() => {
        if (isDropdownOpen) {
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
        }, [isDropdownOpen]);
      

    return (
        <nav className='flex flex-col items-center gap-4 py-3 border border-gray-300 shadow-md'>
            <div className='flex items-center gap-14'>
                <Link to='/'><div className='font-bold text-2xl md:text-3xl hover:cursor-pointer'>Idea<span className='text-green-500'>Arena</span></div></Link>
                <div className="relative md:hidden" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="text-green-500 font-semibold text-2xl focus:outline-none">
                Services
              </button>
              {isDropdownOpen && (
                <ul className="absolute right-[-40px] mt-2 w-36 text-gray-700 text-center py-2 rounded shadow-lg z-10 bg-green-50">
                   <Link to='/'><li className="font-semibold cursor-pointer text-lg hover:underline underline-offset-8  hover:text-green-600 ]">Home</li></Link>
                    <Link to='/blogs'><li className="font-semibold cursor-pointer text-lg hover:underline underline-offset-8  hover:text-green-600 ]">Blogs</li></Link>
                    <Link to='/contact'><li className="font-semibold cursor-pointer text-lg hover:underline underline-offset-8  hover:text-green-600 ]">Contact Us</li></Link>
                    <Link to='/express'><li className="font-semibold cursor-pointer text-lg hover:underline underline-offset-8  hover:text-green-600 ]">Express Yourself</li></Link>
                </ul>
              )}
            </div>
            </div>
            <div className='border-b border-gray-300 w-full'></div>
            <div className="flex md:items-center justify-between w-full px-2 md:px-10">
                <a href='/'><div className='cursor-pointer'>
                    <lord-icon
                        src="https://cdn.lordicon.com/wmwqvixz.json"
                        trigger="in"
                        delay="1000"
                        state="in-home"
                        colors="primary:#16c72e">
                    </lord-icon>
                </div></a>

                <ul className="hidden flex-grow md:flex justify-center items-center gap-12 md:pl-4 pl-28">
                    <Link to='/'><li className="font-semibold cursor-pointer text-[17px] transition-transform duration-500 hover:underline underline-offset-8 hover:decoration-green-600 decoration-2 hover:text-green-600 hover:translate-y-[-2px]">Home</li></Link>
                    <Link to='/blogs'><li className="font-semibold cursor-pointer text-[17px] transition-transform duration-500 hover:underline underline-offset-8 hover:decoration-green-600 decoration-2 hover:text-green-600 hover:translate-y-[-2px]">Blogs</li></Link>
                    <Link to='/contact'><li className="font-semibold cursor-pointer text-[17px] transition-transform duration-500 hover:underline underline-offset-8 hover:decoration-green-600 decoration-2 hover:text-green-600 hover:translate-y-[-2px]">Contact Us</li></Link>
                    <Link to='/express'><li className="font-semibold cursor-pointer text-[17px] transition-transform duration-500 hover:underline underline-offset-8 hover:decoration-green-600 decoration-2 hover:text-green-600 hover:translate-y-[-2px]">Express Yourself</li></Link>
                </ul>
                <div className='flex items-center relative'>
                    <input className='border-2 border-white custom-glow placeholder-gray-400 p-1' placeholder='Search...' type="text" name="text" id="" />
                    <button className='cursor-pointer absolute search-img'>
                        <lord-icon
                            src="https://cdn.lordicon.com/fkdzyfle.json"
                            trigger="click"
                            colors="primary:#16c72e">
                        </lord-icon>
                    </button>
                </div>
            </div>
        </nav>

    )
}

export default Navbar