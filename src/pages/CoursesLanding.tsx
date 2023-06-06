import '../index.css'
import Header  from '../components/header/Header'
import Main from '../components/main/Main'
import Featured from '../components/main/featured/Featured'
import FeaturedCategory from '../components/main/featuredCategory/FeaturedCategory'
import LatestPost from '../components/main/latest/LatestPost'
import Slider from '../components/main/slider/Slider'
import { useAppSelector } from '../redux/hook'
import Connection from '../components/connection/Connection'
import Teachers from '../components/main/teachers/Teachers'




export const CoursesLanding = () => {
  const theme = useAppSelector((state) => state.reducer.value);
  return (
    <div>
      <div className="container_global bg-white  dark:bg-[#161C24]">
        <Header/>
        <Main />
        <Connection/>
        <Featured/>
      </div>
      <FeaturedCategory/>
      <Teachers/>
      <Slider/>
      <LatestPost/>
    </div>
  );
}

//dark:bg-blackc24
