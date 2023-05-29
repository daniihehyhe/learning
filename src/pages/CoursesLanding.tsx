import React from 'react'
import '../index.css'
import Header  from '../components/header/Header'
import Main from '../components/main/Main'
import Featured from '../components/featured/Featured'
import FeaturedCategory from '../components/featuredCategory/FeaturedCategory'
import Footer from '../components/footer/Footer'



export const CoursesLanding = () => {
  return (
    <div>
      <div className="container_global bg-white ">
        <Header />
        <Main />
      </div>
      <FeaturedCategory/>
      <Footer/>
    </div>
  );
}

//dark:bg-blackc24
