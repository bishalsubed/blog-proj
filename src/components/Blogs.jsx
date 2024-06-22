import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <>
      <div className='flex'>
        <div className='md:w-3/4'>
          <h1 className='flex justify-center items-center font-bold text-2xl py-2'>Recommended For You</h1>
          
          <section className='hidden md:block'>

            <div className="recommended-blogs flex gap-6 items-center w-full p-10">
              <div>
                <Link to='/blog'><img className='w-72 rounded-md cursor-pointer' src="/images/booksimg.jpg" alt="" /></Link>
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
                  <Link to='/blog'><div className="title font-bold text-xl cursor-pointer">BOOKS THAT WILL TEACH YOU THE HACK OF PRODUCTIVITY</div></Link>
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

            <div className="recommended-blogs flex gap-6 items-center w-full p-10">
              <div>
                <Link to='/blog'><img className='w-72 rounded-md cursor-pointer' src="/images/vecimage.jpg" alt="" /></Link>
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
                  <Link to='/blog'><div className="title font-bold text-xl cursor-pointer">SO, YOU WANT TO BECOME A WEB DEVELOPER!</div></Link>
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

            <div className="recommended-blogs flex gap-6 items-center w-full p-10">
              <div>
                <Link to='/blog'><img className='w-72 rounded-md cursor-pointer' src="/images/crypto.jpg" alt="" /></Link>
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
                  <Link to='/blog'><div className="title font-bold text-xl cursor-pointer">IS IT THE BEST TIME TO INVEST IN CRYPTO?</div></Link>
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
        </div>

        <div className="hidden md:block border border-r"></div>
        <div className="hidden md:block categories w-[35%]">
          <div className='trends'>
            <h1 className='text-lg font-semibold p-3'>Recent trends</h1>
            <div className='py-4'>
              <div className="auth-desc flex gap-1 px-3">
                <img className='cursor-pointer w-6 h-6 rounded-full object-cover' src="/images/boyimg.jpg" alt="" />
                <div className='text-sm text-gray-700'><span className='cursor-pointer font-semibold'>Andrew Tate</span> in <span className='cursor-pointer font-semibold'>Finance and Crypto</span></div>
              </div>
              <div className="title font-bold text-[16px] cursor-pointer px-3">IS IT THE BEST TIME TO INVEST IN CRYPTO?</div>
            </div>
            <div className='py-4'>
              <div className="auth-desc flex gap-1 px-3">
                <img className='cursor-pointer w-6 h-6 rounded-full object-cover' src="/images/boyimg.jpg" alt="" />
                <div className='text-sm text-gray-700'><span className='cursor-pointer font-semibold'>CodeWithHarry</span> in <span className='cursor-pointer font-semibold'>Programming and Tech</span></div>
              </div>
              <div className="title font-bold text-[16px] cursor-pointer px-3">SO, YOU WANT TO BECOME A WEB DEVELOPER!</div>
            </div>
            <div className='py-4'>
              <div className="auth-desc flex gap-1 px-3">
                <img className='cursor-pointer w-6 h-6 rounded-full object-cover' src="/images/girlmg.jpg" alt="" />
                <div className='text-sm text-gray-700'><span className='cursor-pointer font-semibold'>Samjhana Birsana</span> in <span className='cursor-pointer font-semibold'>Productivity</span></div>
              </div>
              <div className="title font-bold text-[16px] cursor-pointer px-3">BOOKS THAT WILL TEACH YOU THE HACK OF PRODUCTIVITY</div>
            </div>
            <div>
            </div>
          </div>
          <div className="border border-b"></div>
          <div className="recommended-topics py-2">
            <h1 className='text-lg font-semibold p-3'>Recommended Topics</h1>
            <div className=''>
              <button className='border border-gray-300 p-2 m-1 cursor-pointer bg-gray-300  hover:bg-gray-400 rounded-full'>UI/UX DESIGN</button>
              <button className='border border-gray-300 p-2 m-1 cursor-pointer bg-gray-300  hover:bg-gray-400 rounded-full'>Cooking</button>
              <button className='border border-gray-300 p-2 m-1 cursor-pointer bg-gray-300  hover:bg-gray-400 rounded-full'>Education</button>
              <button className='border border-gray-300 p-2 m-1 cursor-pointer bg-gray-300  hover:bg-gray-400 rounded-full'>History</button>
              <button className='border border-gray-300 p-2 m-1 cursor-pointer bg-gray-300  hover:bg-gray-400 rounded-full'>LifeStyle</button>
              <button className='border border-gray-300 p-2 m-1 cursor-pointer bg-gray-300  hover:bg-gray-400 rounded-full'>Web Development</button>
              <button className='border border-gray-300 p-2 m-1 cursor-pointer bg-gray-300  hover:bg-gray-400 rounded-full'>Humor</button>
            </div>
          </div>
          <div className="border border-b"></div>
          <div className="follow-people py-2">
            <h1 className='text-lg font-semibold p-3'>Follow To Learn</h1>
            <div className="auth-desc flex gap-1 px-3 w-full py-3">
              <img className='cursor-pointer w-8 h-8 rounded-full object-cover flex justify-center items-center' src="/images/boyimg.jpg" alt="" />
              <div className='flex flex-col justify-center w-1/2'>
                <div className='text-sm cursor-pointer font-semibold'>Andrew Tate</div>
                <div className="title text-gray-700 text-sm">Escape Matrix</div>
              </div>
              <button className='border border-gray-300 rounded-full px-2 mx-4 bg-gray-300 hover:bg-gray-400 w-1/3 '>Follow</button>
            </div>
            <div className="auth-desc flex gap-1 px-3 w-full py-3">
              <img className='cursor-pointer w-8 h-8 rounded-full object-cover flex justify-center items-center' src="/images/boyimg.jpg" alt="" />
              <div className='flex flex-col justify-center w-1/2'>
                <div className='text-sm cursor-pointer font-semibold'>CodeWithHarry</div>
                <div className="title text-gray-700 text-sm">Lets Grow With tech</div>
              </div>
              <button className='border border-gray-300 rounded-full px-2 mx-4 bg-gray-300 hover:bg-gray-400 w-1/3'>Follow</button>
            </div>
            <div className="auth-desc flex gap-1 px-3 w-full py-3">
              <img className='cursor-pointer w-8 h-8 rounded-full object-cover flex justify-center items-center' src="/images/girlmg.jpg" alt="" />
              <div className='flex flex-col justify-center w-1/2'>
                <div className='text-sm cursor-pointer font-semibold'>Samjhana Birsana</div>
                <div className="title text-gray-700 text-sm">Girl Trying To Help</div>
              </div>
              <button className='border border-gray-300 rounded-full px-2 mx-4 bg-gray-300 hover:bg-gray-400 w-1/3 '>Follow</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs