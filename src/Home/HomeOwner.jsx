import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
export default function HomeOwner() {
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10  '>
      <div className="card bg-blue-950 w-full  text-white/75 shadow-xl transition-transform transform hover:scale-105 hover:animate__animated ">
        <div className="card-body ">
           
            <p> Our mission is to help vulnerable people, especially in rural and low-income areas, stay warm by providing winter clothing. We connect generous donors with volunteers who help distribute the clothing to those in need across Bangladesh.</p>
            <div className="card-actions justify-end">
            <NavLink to={'/about'} className="btn btn-primary hover:translate-x-2 transition-transform duration-500">About US <FaLongArrowAltRight></FaLongArrowAltRight></NavLink>
            </div>
        </div>
    </div>
      <div className="card  bg-blue-950 text-white/75  w-full  shadow-xl transition-transform transform hover:scale-105 hover:animate__animated ">
        <div className="card-body ">
            <p>  Register on our platform by creating an account. Once you're signed up, you can view active donation campaigns and start contributing.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary hover:translate-x-2 transition-transform duration-500">How It Works Section <FaLongArrowAltRight></FaLongArrowAltRight></button>
            </div>
        </div>
    </div>
      <div className="card  bg-blue-950  w-full text-white/75  shadow-xl transition-transform transform hover:scale-105 hover:animate__animated ">
        <div className="card-body ">
            <p>   The capital division, where you can find multiple donation centers and help the most vulnerable communities.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary hover:translate-x-2 transition-transform duration-500">Featured Divisions <FaLongArrowAltRight></FaLongArrowAltRight></button>
            </div>
        </div>
    </div>
      <div className="card  bg-blue-950  w-full text-white/75  shadow-xl transition-transform transform hover:scale-105 hover:animate__animated ">
        <div className="card-body text-center ">
            <p>How You Can Get Involved</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary hover:translate-x-2 transition-transform duration-500">Get Involved <FaLongArrowAltRight></FaLongArrowAltRight></button>
            </div>
        </div>
    </div>
     

      
    </div>
  )
}
