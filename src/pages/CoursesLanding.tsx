import React from 'react'
import '../index.css'
import Header  from '../components/header/Header'
import Main from '../components/main/Main'
import Footer from '../components/footer/Footer'
import MobileBlock from '../components/main/mobile_block/MobileBlock'

export const CoursesLanding = () => {
  return (
    <div>
      <div className="container_global bg-white ">
        <Header />
        <MobileBlock/>
        <Main />
      </div>
      <Footer/>
    </div>
  );
}

//dark:bg-blackc24
