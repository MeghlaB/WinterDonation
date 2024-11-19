import React from 'react'
import Banner from '../Home/Banner'
import HomeOwner from '../Home/HomeOwner'
import About from './About'
import HowToWorks from '../Pages/HowToWorks'
import Feauters from '../Pages/feauters'
import Invloed from '../Pages/Invloed'
import BannerSlider from '../Home/BannerSlider'

export default function Home() {
  return (
    <div>
      {/* <Banner></Banner> */}
      <BannerSlider></BannerSlider>
      <About></About>
      <HowToWorks></HowToWorks>
      <Feauters></Feauters>
      <Invloed></Invloed>
      {/* <HomeOwner></HomeOwner> */}
    </div>
  )
}
