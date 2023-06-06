import '../index.css'
import Header  from '../components/header/Header'
import Main from '../components/main/Main'
import Featured from '../components/main/featured/Featured'
import FeaturedCategory from '../components/main/featuredCategory/FeaturedCategory'
import MobileBlock from '../components/main/mobile_block/MobileBlock'
import Connection from "../components/connection/Connection";
import { useAppSelector } from '../redux/hook'
import Teachers from '../components/main/teachers/Teachers'
import Slider from '../components/main/slider/Slider'
import LatestPost from '../components/main/latest/LatestPost'



export const CoursesLanding = () => {
  const theme = useAppSelector((state) => state.reducer.value);
  return (
    <div>
      <div className="container_global dark:bg-slate-500">
        <Header />
        <Main />
        <Connection />
        <Featured />
      </div>
      <FeaturedCategory />
      <Teachers />
      <Slider />
      <LatestPost />
      <div className="container_global">
        <MobileBlock />
      </div>
    </div>
  );
}

//dark:bg-blackc24
