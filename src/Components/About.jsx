import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import image2 from '../assets/khulna.jpeg'
export default function About() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='min-h-[calc(100vh-288px)] py-4'>
      <div className="container mx-auto py-16 px-4 bg-gray-100 rounded-lg">
      <h2 className="text-4xl font-semibold text-center mb-8 text-gray-800">
        About Our Mission
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-lg text-gray-700">
          <p className="mb-6">
            Our Winter Donation web platform aims to bring warmth and support to those who are vulnerable to the harsh winter conditions, especially in rural and low-income areas of Bangladesh. Thousands of people struggle to stay warm as the weather gets colder, and your contributions can make a real difference in their lives.
          </p>
          <p className="mb-6">
            Through our platform, we connect donors with volunteers to ensure that winter clothing is distributed to those in need. We have a network of collection points and volunteer teams in different divisions to help make the donation process easy and efficient.
          </p>
          <p className="mb-6">
            Whether you're looking to donate clothes, volunteer your time, or help spread awareness, your involvement can have a lasting impact. Every little bit counts, and together we can make this winter warmer for everyone.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={image2}
            alt="Winter Donation"
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          How You Can Contribute
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          You can contribute in many ways:
        </p>
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-gray-800">Donate Clothes</h4>
            <p className="text-lg text-gray-700">Donate winter clothing to help those in need.</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold text-gray-800">Volunteer</h4>
            <p className="text-lg text-gray-700">Join our team of volunteers to help with collection and distribution.</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold text-gray-800">Spread Awareness</h4>
            <p className="text-lg text-gray-700">Help us reach more people by sharing our mission and campaigns.</p>
          </div>
        </div>
      </div>
    </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
