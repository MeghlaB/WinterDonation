import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Invloed() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true }); 
  }, []);

  return (
    <section className=" py-16">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-blue-600 mb-8">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold text-blue-500">Winter Clothing Drive - Dhaka</h3>
          <p className="text-gray-600 mt-4">Join us in Dhaka for our winter clothing drive! Help collect and distribute clothes to those in need.</p>
          <p className="text-gray-500 mt-2">Date: December 5, 2024</p>
        </div>
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold text-blue-500">Volunteer Meet-Up - Chattogram</h3>
          <p className="text-gray-600 mt-4">A gathering for volunteers to discuss upcoming campaigns and how to get involved.</p>
          <p className="text-gray-500 mt-2">Date: December 10, 2024</p>
        </div>
        <div className="bg-white p-8 shadow-lg rounded-lg">
        <h3 className="text-xl font-semibold text-blue-500">Winter Clothing Distribution - Sylhet</h3>
        <p className="text-gray-600 mt-4">Join us in Sylhet for a winter clothing distribution event to help those in need in local communities.</p>
        <p className="text-gray-500 mt-2">Date: December 15, 2024</p>
      </div>
      </div>
     
    </div>
  </section>
  
  
  
   
  );
}
