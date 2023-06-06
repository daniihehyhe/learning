import React, {FC} from 'react'
import '../index.css'
import Header from '../components/header/Header'
import Design from '../components/coursesDetail/Design'
import Lessons from '../components/coursesDetail/Lessons'
import Instructors from '../components/coursesDetail/Instructors'
import Comments from '../components/coursesDetail/Comments'

const Deatail: FC = () => {
  return (
    <>
      <div className="container_global">
        <Header />
      </div>
      <Design />
      <div className='container_global'>
        <Lessons />
      </div>
      <Comments/>
    </>
  );
}

export default Deatail