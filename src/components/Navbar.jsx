import React from 'react'
import { useEffect,useState } from 'react'
import './component.css'
import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        <nav className='flex flex-col justify-center items-center gap-4 py-3 border border-gray-300 shadow-md'>
            <Link to='/'><div className='font-bold text-3xl hover:cursor-pointer'>Idea<span className='text-green-500'>Arena</span></div></Link>
            <div className='border-b border-gray-300 w-full'></div>
            <div className="flex items-center justify-between w-full px-10">
            <a href='/'><div className='cursor-pointer'>
                    <lord-icon
                        src="https://cdn.lordicon.com/wmwqvixz.json"
                        trigger="in"
                        delay="1000"
                        state="in-home"
                        colors="primary:#16c72e">
                    </lord-icon>
                </div></a>
                <ul className="flex-grow flex justify-center items-center gap-12 pl-28">
                    <Link to='/'><li className="font-semibold cursor-pointer text-[17px] transition-transform duration-500 hover:underline underline-offset-8 hover:decoration-green-600 decoration-2 hover:text-green-600 hover:translate-y-[-5px]">Home</li></Link>
                    <Link to='/blogs'><li className="font-semibold cursor-pointer text-[17px] transition-transform duration-500 hover:underline underline-offset-8 hover:decoration-green-600 decoration-2 hover:text-green-600 hover:translate-y-[-5px]">Blogs</li></Link>
                    <Link to='/contact'><li className="font-semibold cursor-pointer text-[17px] transition-transform duration-500 hover:underline underline-offset-8 hover:decoration-green-600 decoration-2 hover:text-green-600 hover:translate-y-[-5px]">Contact Us</li></Link>
                    <Link to='/express'><li className="font-semibold cursor-pointer text-[17px] transition-transform duration-500 hover:underline underline-offset-8 hover:decoration-green-600 decoration-2 hover:text-green-600 hover:translate-y-[-5px]">Express Yourself</li></Link>
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