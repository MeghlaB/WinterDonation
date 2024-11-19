import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import image from '../assets/Rangpur.jpeg'
export default function HowToWorks() {
  return (
    <div>
     <div className='min-h-[calc(100vh-288px)] py-4'>
     <div className="container mx-auto py-16 px-4 bg-gray-50 rounded-lg">
      <h2 className="text-4xl font-semibold text-center mb-8 text-gray-800">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <div className="text-lg text-gray-700">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Step 1: Choose Your Donation
          </h3>
          <p className="mb-6">
            Browse through the list of donation campaigns and choose which one you want to contribute to. Whether it's warm clothing or accessories, select items that you wish to donate.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Step 2: Find Collection Points
          </h3>
          <p className="mb-6">
            Once you've chosen your donation, locate nearby collection points where you can drop off your items. Our platform provides a list of collection points based on your location.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Step 3: Donate and Volunteer
          </h3>
          <p className="mb-6">
            You can either donate your clothes directly at the collection points or volunteer your time to help with the distribution process. Every effort counts!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt="How It Works"
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
      <div className="text-center mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Collection Points
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Our platform has a network of collection points where you can drop off your donations. These points are available in key locations across Bangladesh, ensuring that your donations reach those in need quickly.
        </p>

        <ul className="list-disc text-left mx-auto max-w-4xl">
          <li className="text-lg text-gray-700 mb-2">Dhaka - Uttara, Mirpur, Badda</li>
          <li className="text-lg text-gray-700 mb-2">Chattogram - Pahartali, Agrabad</li>
          <li className="text-lg text-gray-700 mb-2">Sylhet - Zindabazar, Sadar</li>
          <li className="text-lg text-gray-700 mb-2">Khulna - Sonadanga, Daulatpur</li>
          <li className="text-lg text-gray-700 mb-2">Barishal - Kawnia, City Center</li>
        </ul>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Supported Divisions
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          We support donation campaigns across various divisions in Bangladesh. Here are the key divisions where you can contribute:
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="px-6 py-3 bg-blue-200 text-white rounded-lg shadow-md">
            Dhaka
          </div>
          <div className="px-6 py-3 bg-green-200 text-white rounded-lg shadow-md">
            Chattogram
          </div>
          <div className="px-6 py-3 bg-yellow-200 text-white rounded-lg shadow-md">
            Sylhet
          </div>
          <div className="px-6 py-3 bg-red-200 text-white rounded-lg shadow-md">
            Khulna
          </div>
          <div className="px-6 py-3 bg-purple-200 text-white rounded-lg shadow-md">
            Barishal
          </div>
        </div>
      </div>
    </div>
     </div>
    </div>
  )
}
