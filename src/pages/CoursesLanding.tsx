import React from 'react'
import '../index.css'
import Header  from '../components/header/Header'
import Main from '../components/main/Main'
import Featured from '../components/main/featured/Featured'
import FeaturedCategory from '../components/main/featuredCategory/FeaturedCategory'
import Footer from '../components/footer/Footer'
import LatestPost from '../components/main/latest/LatestPost'



export const CoursesLanding = () => {
  return (
    <div>
      <div className="container_global bg-white ">
        <Header />
        <Main />
        <Featured/>
      </div>
      <FeaturedCategory/>
      <LatestPost/>
      <Footer/>
    </div>
  );
}

//dark:bg-blackc24
