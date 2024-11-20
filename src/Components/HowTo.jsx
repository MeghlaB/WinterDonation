import React from 'react'
import awernes from '../assets/awerness.jpg'
import volenter from '../assets/Volenter.jpeg'
import clothes from '../assets/clothes.jpeg'
export default function HowTo() {
  return (
    <section className="bg-white py-16">
  <div className="container mx-auto px-6"
   >
    <h2 className="text-4xl font-bold text-center text-blue-600 mb-8"
     data-aos="flip-left">How to Help</h2>
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-center gap-6"
      data-aos="fade-up"
     >
        <div className="md:w-1/3">
          <img src={clothes}alt="Donate Clothes" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-2/3">
          <h3 className="text-2xl font-semibold text-blue-500">Step 1: Donate Clothes</h3>
          <p className="mt-4 text-gray-600">
            Choose a campaign and provide warm clothes through our easy-to-use donation platform.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center gap-6"
      data-aos="fade-up"
   >
        <div className="md:w-1/3">
          <img src={volenter} alt="Volunteer" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-2/3">
          <h3 className="text-2xl font-semibold text-blue-500">Step 2: Become a Volunteer</h3>
          <p className="mt-4 text-gray-600">
            Join our team to help distribute clothing and spread warmth to the community.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6" 
      data-aos="fade-up"
  >
        <div className="md:w-1/3">
          <img src={awernes}alt="Spread Awareness" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-2/3">
          <h3 className="text-2xl font-semibold text-blue-500">Step 3: Spread Awareness</h3>
          <p className="mt-4 text-gray-600">
            Use your social media to share our mission and inspire others to contribute.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
