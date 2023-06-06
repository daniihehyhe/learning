import React from 'react'
import '../index.css'
import Header  from '../components/header/Header'
import Main from '../components/main/Main'
import Featured from '../components/featured/Featured'
import FeaturedCategory from '../components/featuredCategory/FeaturedCategory'
import Footer from '../components/footer/Footer'
import MobileBlock from '../components/main/mobile_block/MobileBlock'
import Connection from "../components/connection/Connection";
import { useAppSelector } from '../redux/hook'


export const CoursesLanding = () => {
  const theme = useAppSelector((state) => state.reducer.value);
  return (
    <div>
      <div className="container_global dark:bg-slate-500">
        <Header />
        <MobileBlock />
        <Main />
        <Featured />
        <Connection />
      </div>
      <FeaturedCategory />
      <Footer />
    </div>
  );
}

//dark:bg-blackc24
