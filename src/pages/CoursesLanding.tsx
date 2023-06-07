import '../index.css'
import Header  from '../components/header/Header'
import Main from '../components/main/Main'
import Featured from '../components/main/featured/Featured'
import FeaturedCategory from '../components/main/featuredCategory/FeaturedCategory'
import MobileBlock from '../components/main/mobile_block/MobileBlock'
import Connection from "../components/connection/Connection";
import Teachers from '../components/main/teachers/Teachers'
import LatestPost from '../components/main/latest/LatestPost'
import Work from '../components/main/work/Work'



export const CoursesLanding = () => {
  return (
    <div>
      <div className="container_global">
        <Header />
        <Main />
        <Work/>
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

