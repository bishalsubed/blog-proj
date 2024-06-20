import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Manager = () => {
    return (
        <>
            <div className='flex gap-20 px-10 py-2'>
                <div className='flex flex-col justify-center gap-6 w-1/2'>
                    <div className='font-semibold text-3xl hover:cursor-pointer'>Welcome To Idea<span className='text-green-500'>Arena</span></div>
                    <div className='text-gray-700'>Step into a realm where curiosity knows no bounds. Dive into a world of captivating narratives, enriching insights, and boundless creativity. Join our community of avid explorers as we traverse the landscapes of knowledge and imagination. Embark on a journey where every click unlocks a new adventure, every word sparks inspiration, and every moment brings connection.</div>
                    <div className="buttons flex gap-5">
                        <button className='border border-gray-800 text-white bg-gray-800 p-3 font-semibold hover:bg-gray-700 rounded-md'>Explore Blogs</button>
                        <button className='border border-gray-300 p-3 bg-gray-300 font-semibold hover:bg-gray-400 rounded-md'>Express Yourself</button>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col justify-center items-center'>
                    <img src="/images/introimg.jpg" alt="" />
                </div>
            </div>

            <div className='font-semibold text-3xl text-center mt-5 pt-7' >Featured Blogs</div>

            <div className="featured-blogs flex gap-6 items-center w-full p-10">
                <div>
                    <Link to='/blog' ><img className='w-64 rounded-md cursor-pointer' src="/images/booksimg.jpg" alt="" /></Link>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <div className="topic-blog hover:cursor-pointer border border-gray-300 p-1 bg-gray-300 hover:bg-gray-400 rounded-md">Productivity</div>
                            <div className="time-blog text-gray-700">11 min read</div>
                        </div>
                        <div className='flex gap-2'>
                            <button className="save-blog hover:cursor-pointer">
                                <lord-icon
                                    src="https://cdn.lordicon.com/oiiqgosg.json"
                                    trigger="click"
                                    state="morph-marked-bookmark"
                                    colors="primary:#545454">
                                </lord-icon></button>
                            <button className="no-recommend-blog hover:cursor-pointer">
                                <lord-icon
                                    src="https://cdn.lordicon.com/skkahier.json"
                                    trigger="click"
                                    colors="primary:#545454">
                                </lord-icon></button>
                            <button className="more hover:cursor-pointer">
                                <lord-icon
                                    src="https://cdn.lordicon.com/jpgpblwn.json"
                                    trigger="click"
                                    state="loop-scale"
                                    colors="primary:#545454">
                                </lord-icon></button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Link to='/blog' ><div className="title font-bold text-xl cursor-pointer">BOOKS THAT WILL TEACH YOU THE HACK OF PRODUCTIVITY</div></Link>
                        <Link to='/blog'><p className='cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur alias ab vel consequatur, nam nobis!</p></Link>
                    </div>
                    <div className='flex gap-1'>
                        <div className="auth-desc flex gap-1">
                            <img className='cursor-pointer w-7 h-7 rounded-full object-cover' src="/images/girlmg.jpg" alt="" />
                            <div className='text-gray-700 cursor-pointer'>Samjhana Birsana</div>
                        </div>
                        <span>•</span>
                        <div className="age text-gray-700">May20,2024</div>
                    </div>
                </div>
            </div>

            <hr className='mx-auto w-11/12' />
            <div className="featured-blogs flex gap-6 items-center w-full p-10">
                <div>
                <Link to='/blog' ><img className='w-64 rounded-md cursor-pointer' src="/images/vecimage.jpg" alt="" /></Link>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <div className="topic-blog hover:cursor-pointer border border-gray-300 p-1 bg-gray-300 hover:bg-gray-400 rounded-md">Programming</div>
                            <div className="time-blog text-gray-700">15 min read</div>
                        </div>
                        <div className='flex gap-2'>
                            <button className="save-blog hover:cursor-pointer">
                                <lord-icon
                                    src="https://cdn.lordicon.com/oiiqgosg.json"
                                    trigger="click"
                                    state="morph-marked-bookmark"
                                    colors="primary:#545454">
                                </lord-icon></button>
                            <button className="no-recommend-blog hover:cursor-pointer">
                                <lord-icon
                                    src="https://cdn.lordicon.com/skkahier.json"
                                    trigger="click"
                                    colors="primary:#545454">
                                </lord-icon></button>
                            <button className="more hover:cursor-pointer">
                                <lord-icon
                                    src="https://cdn.lordicon.com/jpgpblwn.json"
                                    trigger="click"
                                    state="loop-scale"
                                    colors="primary:#545454">
                                </lord-icon></button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Link to='/blog' ><div className="title font-bold text-xl cursor-pointer">SO, YOU WANT TO BECOME A WEB DEVELOPER!</div></Link>
                        <Link to='/blog'><p className='cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur alias ab vel consequatur, nam nobis!</p></Link>
                    </div>
                    <div className='flex gap-1'>
                        <div className="auth-desc flex gap-2">
                            <img className='cursor-pointer w-7 h-7 rounded-full object-cover' src="/images/boyimg.jpg" alt="" />
                            <div className='text-gray-700 cursor-pointer'>CodeWithHarry</div>
                        </div>
                        <span>•</span>
                        <div className="age text-gray-700">January2,2024</div>
                    </div>
                </div>
            </div>

            <hr className='mx-auto w-11/12' />

            <div className="featured-blogs flex gap-6 items-center w-full p-10">
                <div>
                    <Link to='/blog' ><img className='w-64 rounded-md cursor-pointer' src="/images/crypto.jpg" alt="" /></Link>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <div className="topic-blog hover:cursor-pointer border border-gray-300 p-1 bg-gray-300 hover:bg-gray-400 rounded-md">Finance</div>
                            <div className="time-blog text-gray-700">8 min read</div>
                        </div>
                        <div className='flex gap-2'>
                            <button className="save-blog hover:cursor-pointer">
                                <lord-icon
                                    src="https://cdn.lordicon.com/oiiqgosg.json"
                                    trigger="click"
                                    state="morph-marked-bookmark"
                                    colors="primary:#545454">
                                </lord-icon></button>
                            <button className="no-recommend-blog hover:cursor-pointer">
                                <lord-icon
                                    src="https://cdn.lordicon.com/skkahier.json"
                                    trigger="click"
                                    colors="primary:#545454">
                                </lord-icon></button>
                            <button className="more hover:cursor-pointer">
                                <lord-icon
                                    src="https://cdn.lordicon.com/jpgpblwn.json"
                                    trigger="click"
                                    state="loop-scale"
                                    colors="primary:#545454">
                                </lord-icon></button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Link to='/blog' ><div className="title font-bold text-xl cursor-pointer">IS IT THE BEST TIME TO INVEST IN CRYPTO?</div></Link>
                        <Link to='/blog'><p className='cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur alias ab vel consequatur, nam nobis!</p></Link>
                    </div>
                    <div className='flex gap-1'>
                        <div className="auth-desc flex gap-2">
                            <img className='cursor-pointer w-7 h-7 rounded-full object-cover' src="/images/boyimg.jpg" alt="" />
                            <div className='text-gray-700 cursor-pointer'>Andrew Tate</div>
                        </div>
                        <span>•</span>
                        <div className="age text-gray-700">February10,2024</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manager