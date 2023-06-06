import React, {FC} from 'react'
import Header from '../components/header/Header'
import '../index.css'
import CoursesIn1 from '../components/CourcesIn1/CoursesIn1'

const BlogDeatal: FC = () => {
  return (
	<>
		<div className='container_global'>
			<Header/>
		</div>
		<CoursesIn1/>
	</>
  )
}

export default BlogDeatal