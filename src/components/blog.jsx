import React from 'react'

const Blog = () => {
    return (
        <>
            <div className='flex flex-col items-center py-6 gap-6 px-6 md:px-0'>
                <div className='md:text-3xl text-2xl md:font-bold font-semibold'>IS IT THE BEST TIME TO BUY CRYPTO?</div>
                <img className='w-full object-cover object-center md:hidden' src="/images/crypto.jpg" alt="" />
                <img className='hidden md:block w-96' src="/images/crypto.jpg" alt="" />
            </div>
            <div className='flex gap-1 py-10  w-1/2 mx-auto'>
                <div>
                    <img className='cursor-pointer w-10 h-10 rounded-full object-cover' src="/images/boyimg.jpg" alt="" />
                </div>
                <div className="auth-desc flex flex-col gap-1">
                    <div className='flex gap-2'>
                        <div className='text-gray-700 cursor-pointer font-semibold'>Andrew Tate</div>
                        <span className='hidden md:block'>•</span>
                        <button className='text-green-700 font-semibold'>Follow</button>
                    </div>
                    <div className='flex flex-col justify-center md:flex-row gap-2'>
                        <div className='text-gray-700'>Published in <span className='font-semibold cursor-pointer'>Finance And Crypto</span></div>
                        <span className='ml-4 md:ml-0'>•</span>
                        <div className="age text-gray-700">8 min read</div>
                        <span className='ml-4 md:ml-0'>•</span>
                        <div className="age text-gray-700">January2,2024</div>
                    </div>
                </div>
            </div>
            <div className="like-section flex flex-col md:flex-row justify-center md:gap-96 gap-4 items-center py-1 border border-gray-200">
                <div className='flex gap-4'>
                    <button className='enjoy-blog hover:cursor-pointer'>
                        <lord-icon
                            src="https://cdn.lordicon.com/ulnswmkk.json"
                            trigger="click"
                            colors="primary:#545454"
                            state="morph-heart">
                        </lord-icon></button>
                    <button className='comment-blog hover:cursor-pointer'>
                        <lord-icon
                            src="https://cdn.lordicon.com/ayhtotha.json"
                            trigger="click"
                            colors="primary:#545454">
                        </lord-icon></button>
                </div>
                <div className='md:hidden border-b border-gray-300 w-full'></div>
                <div className='flex gap-4'>
                    <button className="save-blog hover:cursor-pointer">
                        <lord-icon
                            src="https://cdn.lordicon.com/oiiqgosg.json"
                            trigger="click"
                            colors="primary:#545454"
                            state="morph-marked-bookmark">
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
                            colors="primary:#545454"
                            state="loop-scale">
                        </lord-icon></button>
                </div>
            </div>
            <div className='w-1/2 mx-auto text-gray-700 py-10'>
                <h1 className='text-3xl font-bold mb-6'>A Comprehensive Analysis</h1>

                <p className='mb-4'>
                    The world of cryptocurrency is a fascinating and often turbulent landscape, attracting both seasoned investors and curious newcomers. With dramatic price swings and the promise of significant returns, many find themselves asking, "Is it the right time to buy crypto?" This blog aims to provide a thorough analysis to help you make an informed decision.
                </p>

                <h2 className='text-2xl font-semibold mb-4'>Understanding Cryptocurrency</h2>

                <p className='mb-4'>
                    Before diving into whether it's the right time to invest, it's crucial to understand what cryptocurrency is. Cryptocurrencies are digital or virtual currencies that use cryptography for security and operate on blockchain technology—a decentralized ledger that records all transactions across a network of computers. The most well-known cryptocurrency is Bitcoin, but there are thousands of others, including Ethereum, Binance Coin, and Cardano.
                </p>

                <h2 className='text-2xl font-semibold mb-4'>Historical Context and Market Volatility</h2>

                <p className='mb-4'>
                    Cryptocurrencies are known for their volatility. Bitcoin, for example, soared from under $1,000 in early 2017 to nearly $20,000 by the end of that year, only to plummet to around $3,000 in early 2018. This kind of volatility is both an opportunity and a risk. Historical trends show that significant drops are often followed by new highs, but the timing can be unpredictable.
                </p>

                <h2 className='text-2xl font-semibold mb-4'>Factors to Consider Before Buying Crypto</h2>

                <h3 className='text-xl font-medium mb-2'>Market Sentiment and Trends</h3>
                <ul className='list-disc list-inside mb-4'>
                    <li className='mb-2'><strong>Bull and Bear Markets:</strong> Cryptocurrencies tend to follow cycles of bull (rising) and bear (falling) markets. Identifying the phase of the market cycle can help determine the best entry point.</li>
                    <li><strong>News and Events:</strong> Regulatory news, technological advancements, and major investments can all impact cryptocurrency prices. Staying informed about the latest developments is crucial.</li>
                </ul>
            </div>

            <div className="like-section flex flex-col md:flex-row justify-center md:gap-96 gap-4 items-center py-1 border border-gray-200">
                <div className='flex gap-4'>
                    <button className='enjoy-blog hover:cursor-pointer'>
                        <lord-icon
                            src="https://cdn.lordicon.com/ulnswmkk.json"
                            trigger="click"
                            colors="primary:#545454"
                            state="morph-heart">
                        </lord-icon></button>
                    <button className='comment-blog hover:cursor-pointer'>
                        <lord-icon
                            src="https://cdn.lordicon.com/ayhtotha.json"
                            trigger="click"
                            colors="primary:#545454">
                        </lord-icon></button>
                </div>
                <div className='md:hidden border-b border-gray-300 w-full'></div>
                <div className='flex gap-4'>
                    <button className="save-blog hover:cursor-pointer">
                        <lord-icon
                            src="https://cdn.lordicon.com/oiiqgosg.json"
                            trigger="click"
                            colors="primary:#545454"
                            state="morph-marked-bookmark">
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
                            colors="primary:#545454"
                            state="loop-scale">
                        </lord-icon></button>
                </div>
            </div>
            <div className='bg-gray-100 p-5 my-8'>
                <h1 className='flex md:justify-center m-2 font-bold text-2xl'>Author's Info</h1>
                <div className='md:w-1/2 md:mx-auto cursor-pointer'>
                    <img className='cursor-pointer w-28 h-28 rounded-full object-cover' src="/images/boyimg.jpg" alt="" />
                </div>
                <div className='md:w-1/2 md:mx-auto flex flex-col md:flex-row justify-between gap-4 md:gap-0'>
                    <div className='flex flex-col gap-2'>
                        <div className="name text-gray-800 font-semibold cursor-pointer text-xl">Andrew Tate</div>
                        <div className='flex gap-2'>
                            <div className="followers">20K Followers</div>
                            <span>•</span>
                            <div className=" text-gray-700">Writer for <span className='font-semibold'>Finance</span></div>
                        </div>
                        <div className='text-gray-700 text-[15px]'>Multimillionarie,Tall,Handsome,Smart,kickboxer,Chess Player,Entrepreneur as founder of <span className='font-semibold underline'><a href='https://therealworld.net/' target='_blank'>The Real World</a></span></div>
                    </div>
                    <div>
                        <button className='border border-gray-800 text-white bg-gray-800 p-2 px-4 hover:bg-gray-700 rounded-full'>Follow</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog