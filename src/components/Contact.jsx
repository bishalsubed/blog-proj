import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-cover bg-center w-full h-64" style={{ backgroundImage: "url('/images/natureImg.jpg')" }}>
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold">Contact Us</h1>
        </div>
      </div>
      <div className="container mx-auto p-4 mt-8">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Get in Touch</h2>
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <FaMapMarkerAlt className="text-green-500 text-2xl mr-2" />
              <div>
                <h3 className="font-bold">Our Office</h3>
                <p>Vyas-2, Damauli, Nepal</p>
              </div>
            </div>
            <div className="flex items-center mb-4 md:mb-0">
              <FaPhone className="text-green-500 text-2xl mr-2" />
              <div>
                <h3 className="font-bold">Call Us</h3>
                <p>+980 843 9028</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-green-500 text-2xl mr-2" />
              <div>
                <h3 className="font-bold">Email Us</h3>
                <p>idea@arena.com</p>
              </div>
            </div>
          </div>
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
              ><lord-icon
                style={{ "width": "25px", "height": "25px", "paddingTop": "7px", "marginRight":"5px" }}
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
              ></lord-icon>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact