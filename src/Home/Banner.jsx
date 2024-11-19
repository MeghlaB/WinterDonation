import React, { useContext } from 'react'
import image1 from '../assets/Dhaka.jpeg'
import image2 from '../assets/Chitagong.webp'
import image3 from '../assets/shylet.jpeg'
import image4 from '../assets/barishal.jpeg'
import image5 from '../assets/khulna.jpeg'
import image6 from '../assets/Rangpur.jpeg'
import { AuthContext } from '../ContextApi/AuthProvider'

export default function Banner() {
  return (
    <div className="carousel w-full h-[350px]">
    <div id="slide1" className="carousel-item relative w-full">
        <img
            src={image1}
            className="w-full h-full object-cover opacity-80 filter blur-sm" /> 
             <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white p-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Winter Clothes Donation Drive - Dhaka</h2>
          <p className="text-lg mb-4">Donate winter clothes and help those in need during the coldest months in Dhaka.</p>
          <button class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">Donate Now</button>
        </div>
      </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide6" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
        <img
            src={image2}
            className="w-full h-full object-cover opacity-60 filter blur-sm" /> 
             <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white p-4">
        <div class="text-center">
          <h2 class="text-4xl font-bold mb-4">Winter Clothes Donation Drive - Chitagong</h2>
          <p class="text-lg mb-4">Donate winter clothes and help those in need during the coldest months in Chitagong.</p>
          <button class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">Donate Now</button>
        </div>
      </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
        <img
            src={image3}
            className="w-full h-full object-cover opacity-60 filter blur-sm" /> 
             <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white p-4">
        <div class="text-center">
          <h2 class="text-4xl font-bold mb-4">Winter Clothes Donation Drive - Shylet</h2>
          <p class="text-lg mb-4">Donate winter clothes and help those in need during the coldest months in Shylet.</p>
          <button class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">Donate Now</button>
        </div>
      </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full">
        <img
            src={image4}
            className="w-full h-full object-cover opacity-60 filter blur-sm" /> 
             <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white p-4">
        <div class="text-center">
          <h2 class="text-4xl font-bold mb-4">Winter Clothes Donation Drive - Barishal</h2>
          <p class="text-lg mb-4">Donate winter clothes and help those in need during the coldest months in Barishal.</p>
          <button class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">Donate Now</button>
        </div>
      </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide5" className="carousel-item relative w-full">
        <img
            src={image5}
            className="w-full h-full object-cover opacity-60 filter blur-sm" /> 
             <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white p-4">
        <div class="text-center">
          <h2 class="text-4xl font-bold mb-4">Winter Clothes Donation Drive - Khulna</h2>
          <p class="text-lg mb-4">Donate winter clothes and help those in need during the coldest months in Khulna.</p>
          <button class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">Donate Now</button>
        </div>
      </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide6" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide6" className="carousel-item relative w-full">
        <img
            src={image6}
            className="w-full h-full object-cover opacity-60 filter blur-sm" /> 
             <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white p-4">
        <div class="text-center">
          <h2 class="text-4xl font-bold mb-4">Winter Clothes Donation Drive - Rangpur</h2>
          <p class="text-lg mb-4">Donate winter clothes and help those in need during the coldest months in Rangpur.</p>
          <button class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">Donate Now</button>
        </div>
      </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide5" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>
</div>

  )
}
