import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

export default function Invloed() {
  return (
    <div>
      <Navbar></Navbar>
      <section className="py-16 px-6 bg-gray-100 ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">How You Can Get Involved</h2>
        <p className="text-lg text-gray-700 mb-8">
          There are several ways you can help bring warmth to those in need. Here's how you can get involved and make a difference today:
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="text-blue-500 text-5xl mb-4">
            <i className="fas fa-tshirt"></i>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Donate Clothing</h3>
          <p className="text-lg text-gray-700 mb-4">
            Your gently used winter clothing can make a huge difference. Drop off your donations at any of our collection points across Bangladesh.
          </p>
          <button className="btn btn-primary">Donate Now</button>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="text-green-500 text-5xl mb-4">
            <i className="fas fa-hands-helping"></i>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Become a Volunteer</h3>
          <p className="text-lg text-gray-700 mb-4">
            Volunteers are the backbone of our mission. You can help with collection, distribution, and spreading awareness in your community.
          </p>
          <button className="btn btn-primary">Sign Up to Volunteer</button>
        </div>


        <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="text-yellow-500 text-5xl mb-4">
            <i className="fas fa-bullhorn"></i>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Spread the Word</h3>
          <p className="text-lg text-gray-700 mb-4">
            The more people know about the campaign, the more support we can gather. Share our cause on social media or tell your friends and family.
          </p>
          <button className="btn btn-primary">Share Now</button>
        </div>

      </div>
      <div className="mt-12 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Make a Financial Contribution</h3>
        <p className="text-lg text-gray-700 mb-8">
          If you’re unable to donate clothing, a financial contribution can help fund transportation, outreach programs, and other essential services.
        </p>
        <button className="btn btn-primary">Donate Financially</button>
      </div>
    </section>
      <Footer></Footer>
    </div>
  )
}
