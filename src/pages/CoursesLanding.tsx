import React from 'react'
import '../index.css'
import Header  from '../components/header/Header'
import Main from '../components/main/Main'
import Featured from '../components/featured/Featured'
import FeaturedCategory from '../components/featuredCategory/FeaturedCategory'

export const CoursesLanding = () => {
  return (
	<div>
		<div className='container_global'>
			<Header/>
			<Main/>
			<Featured/>
      	</div>
			<FeaturedCategory/>
	</div>
  )
}
