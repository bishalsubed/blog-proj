import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Manager = () => {
    return (
        <>
            <div className='flex gap-20 md:px-10 p-16 md:py-4'>
                <div className='flex flex-col sm:items-center md:items-start md:justify-center gap-6 md:w-1/2'>
                    <div className='font-semibold text-2xl md:text-3xl hover:cursor-pointer'>Welcome To Idea<span className='text-green-500'>Arena</span></div>
                    <div className='text-gray-700 text-[15px]'>Step into a realm where curiosity knows no bounds. Dive into a world of captivating narratives, enriching insights, and boundless creativity. Join our community of avid explorers as we traverse the landscapes of knowledge and imagination. Embark on a journey where every click unlocks a new adventure, every word sparks inspiration, and every moment brings connection.</div>
                    <div className="buttons flex gap-5">
                        <Link to='/blogs'><button className='border border-gray-800 text-white bg-gray-800 p-2 md:p-3 font-semibold hover:bg-gray-700 rounded-md'>Explore Blogs</button></Link>
                        <Link to='/express'><button className='border border-gray-300 p-2 md:p-3 bg-gray-300 font-semibold hover:bg-gray-400 rounded-md'>Express Yourself</button></Link>
                    </div>
                </div>
                <div className='hidden w-1/2 md:flex flex-col justify-center items-center'>
                    <img src="/images/introimg.jpg" alt="" />
                </div>
            </div>

            <div className='font-semibold text-2xl md:text-3xl text-center mt-5 pt-7' >Featured Blogs</div>
            
            
            <section className="text-gray-600 body-font md:hidden">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Link to='/blog'><img className="w-full object-cover object-center hover:cursor-pointer" src="/images/booksimg.jpg" alt="blog" /></Link>
                                <div className="p-6">
                                    <div className='flex items-center gap-1'>
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-800 mb-1 hover:cursor-pointer">Productivity</h2>
                                    <span className='text-gray-700'>•</span>
                                    <div className="age tracking-widest text-xs title-font font-medium text-gray-800 mb-1">May20,2024</div>
                                    </div>
                                    <Link to='/blog'><h1 className="title-font text-lg text-gray-900 mb-3 font-semibold hover:cursor-pointer">BOOKS THAT WILL TEACH YOU THE HACK OF PRODUCTIVITY</h1></Link>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <div className="text-gray-700 inline-flex items-center md:mb-2 lg:mb-0">
                                            <div className="auth-desc flex gap-1">
                                                <img className='cursor-pointer w-7 h-7 rounded-full object-cover' src="/images/girlmg.jpg" alt="" />
                                                <div className='text-gray-700 cursor-pointer'>Samjhana Birsana</div>
                                            </div>
                                        </div>
                                        <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-gray-200">
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
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Link to='/blog'><img className="lg:h-48 md:h-36 w-full object-cover object-center hover:cursor-pointer" src="/images/vecimage.jpg" alt="blog" /></Link>
                                <div className="p-6">
                                    <div className='flex items-center gap-1'>
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-800 mb-1 hover:cursor-pointer">Programming</h2>
                                    <span className='text-gray-700'>•</span>
                                    <div className="age tracking-widest text-xs title-font font-medium text-gray-800 mb-1">January2,2024</div>
                                    </div>
                                    <Link to='/blog'><h1 className="title-font text-lg text-gray-900 mb-3 font-semibold hover:cursor-pointer">SO, YOU WANT TO BECOME A WEB DEVELOPER!</h1></Link>
                                    <p className="leading-relaxed mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab alias vero, dignissimos nostrum tempora corrupti?</p>
                                    <div className="flex items-center flex-wrap ">
                                        <div className="text-gray-700 inline-flex items-center md:mb-2 lg:mb-0">
                                            <div className="auth-desc flex gap-1">
                                                <img className='cursor-pointer w-7 h-7 rounded-full object-cover' src="/images/boyimg.jpg" alt="" />
                                                <div className='text-gray-700 cursor-pointer'>CodeWithHarry</div>
                                            </div>
                                        </div>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-gray-200">
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
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Link to='/blog'><img className="lg:h-48 md:h-36 w-full object-cover object-center hover:cursor-pointer" src="/images/crypto.jpg" alt="blog" /></Link>
                                <div className="p-6">
                                    <div className='flex items-center gap-1'>
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-800 mb-1 hover:cursor-pointer">Finance</h2>
                                    <span className='text-gray-700'>•</span>
                                    <div className="age tracking-widest text-xs title-font font-medium text-gray-800 mb-1">February10,2024</div>
                                    </div>
                                    <Link to='/blog'><h1 className="title-font text-lg text-gray-900 mb-3 font-semibold hover:cursor-pointer">IS IT THE BEST TIME TO INVEST IN CRYPTO?</h1></Link>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <div className="text-gray-700 inline-flex items-center md:mb-2 lg:mb-0">
                                            <div className="auth-desc flex gap-1">
                                                <img className='cursor-pointer w-7 h-7 rounded-full object-cover' src="/images/girlmg.jpg" alt="" />
                                                <div className='text-gray-700 cursor-pointer'>Andrew Tate</div>
                                            </div>
                                        </div>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-gray-200">
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
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='hidden md:block'>
            <div className="featured-blogs flex gap-6 items-center w-full p-10">
                <div>
                    <Link to='/blog' ><img className='w-64 rounded-md cursor-pointer' src="/images/booksimg.jpg" alt="" /></Link>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <div className="topic-blog hover:cursor-pointer border border-gray-300 px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded-md">Productivity</div>
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
                        <Link to='/blog' ><div className="title font-bold text-lg md:text-xl cursor-pointer">BOOKS THAT WILL TEACH YOU THE HACK OF PRODUCTIVITY</div></Link>
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
            </section>
        </>
    )
}

export default Manager