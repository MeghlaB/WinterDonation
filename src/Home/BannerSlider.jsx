
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import banner1 from '../assets/winter7.jpg';
import banner2 from '../assets/winter5.jpg';
import banner3 from '../assets/Winter6.jpg';
import banner4 from '../assets/Winter.jpeg';

const BannerSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' }); // Initialize AOS
  }, []);

  return (
    <div className="w-full h-auto mb-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="relative" data-aos="fade-up">
            <img
              className="w-full h-[520px] object-cover"
              src={banner1}
              alt="Winter Campaign 1"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white px-4">
              <h2 className="text-2xl font-bold text-center mb-4">
                Dhaka Drive: Distributing Warm Clothes to 500 Families.
              </h2>
              <button
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-lg hover:bg-red-600 transition-all duration-300"
                data-aos="fade-up"
                onClick={() => alert('Donate Now!')}
              >
                Donate Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative" data-aos="fade-right">
            <img
              className="w-full h-[520px] object-cover"
              src={banner2}
              alt="Winter Campaign 2"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white px-4">
              <h2 className="text-2xl font-bold text-center mb-4">
                Chattogram Drive: Join Our Winter Collection Campaign.
              </h2>
              <button
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-lg hover:bg-red-600 transition-all duration-300"
                data-aos="fade-up"
                onClick={() => alert('Donate Now!')}
              >
                Donate Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative" data-aos="fade-left">
            <img
              className="w-full h-[520px] object-cover"
              src={banner3}
              alt="Winter Campaign 3"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white px-4">
              <h2 className="text-2xl font-bold text-center mb-4">
                Barishal: Join us in spreading warmth this winter. Donate now to help those in need.
              </h2>
              <button
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-lg hover:bg-red-600 transition-all duration-300"
                data-aos="fade-up"
                onClick={() => alert('Donate Now!')}
              >
                Donate Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative" data-aos="zoom-in">
            <img
              className="w-full h-[520px] object-cover"
              src={banner4}
              alt="Winter Campaign 4"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white px-4">
              <h2 className="text-2xl font-bold text-center mb-4">
                Sylhet Drive: Helping Those in Need.
              </h2>
              <button
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-lg hover:bg-red-600 transition-all duration-300"
                data-aos="fade-up"
                onClick={() => alert('Donate Now!')}
              >
                Donate Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
