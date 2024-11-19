import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Features() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  return (
    <div>
      <section className="py-16 px-6 bg-white">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Featured Divisions
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We support various regions across Bangladesh. Here are the most featured divisions that need your support the most:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Dhaka</h3>
            <p className="text-lg text-white">
              Dhaka is our capital and one of the most crucial locations for donations. Multiple centers are available for easy drop-off.
            </p>
            <div className="mt-4">
              <button className="btn btn-outline btn-light">Explore Dhaka</button>
            </div>
          </div>

          <div
            className="bg-gradient-to-r from-green-500 to-teal-600 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Chattogram</h3>
            <p className="text-lg text-white">
              Chattogram's coastal communities also require support, especially during the winter.
            </p>
            <div className="mt-4">
              <button className="btn btn-outline btn-light">Explore Chattogram</button>
            </div>
          </div>

          <div
            className="bg-gradient-to-r from-yellow-500 to-red-600 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Khulna</h3>
            <p className="text-lg text-white">
              Khulna faces harsh winters, making it a priority for our clothing donation efforts.
            </p>
            <div className="mt-4">
              <button className="btn btn-outline btn-light">Explore Khulna</button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center" data-aos="zoom-in">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Support More Divisions
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Your donations can reach even more regions. Explore other regions, find local centers, and make a significant difference.
          </p>
          <div className="flex justify-center gap-8">
            <button className="btn btn-primary">View All Divisions</button>
          </div>
        </div>
      </section>
    </div>
  );
}
