
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImg from '../assets/About.jpeg'

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' }); // Initialize AOS
  }, []);

  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Mission Statement */}
        <div data-aos="fade-right">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Our goal is to provide warmth and hope to those in need during the cold winter months. 
            Many individuals in rural and underprivileged areas lack the necessary resources to stay warm. 
            Through your support, we aim to bridge this gap and make winters safer and more comfortable for them.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            With a network of volunteers and collection points across Bangladesh, we ensure that your contributions 
            reach those who need them most. Together, we can make a difference.
          </p>
        </div>

        {/* How Users Can Contribute */}
        <div className="flex flex-col items-center" data-aos="fade-left">
          <img
            src={aboutImg}
            alt="About Us"
            className="rounded-lg shadow-lg w-full h-64 object-cover mb-6"
          />
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            How You Can Contribute
          </h3>
          <div className="flex flex-col gap-4 text-lg text-gray-700">
            <p>
              <span className="font-bold">1. Donate Clothes:</span> Provide winter essentials for those in need.
            </p>
            <p>
              <span className="font-bold">2. Volunteer:</span> Join our team to help collect and distribute donations.
            </p>
            <p>
              <span className="font-bold">3. Spread Awareness:</span> Share our mission and encourage others to contribute.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
