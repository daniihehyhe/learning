import '../index.css'
import Header  from '../components/header/Header'
import Main from '../components/main/Main'
import Featured from '../components/main/featured/Featured'
import FeaturedCategory from '../components/main/featuredCategory/FeaturedCategory'
import LatestPost from '../components/main/latest/LatestPost'
import Slider from '../components/main/slider/Slider'




export const CoursesLanding = () => {
  return (
    <div>
      <div className="container_global bg-white ">
        <Header />
        <Main />
        <Featured/>
      </div>
      <Featured/>
      <FeaturedCategory/>
      <Slider/>
      <LatestPost/>
    </div>
  );
}

//dark:bg-blackc24
