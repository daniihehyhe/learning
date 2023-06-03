import React, {FC} from 'react'
import AboutPage from '../components/about/AboutPage'
import Header from '../components/header/Header'
import '../index.css'

const About:FC = () => {
  return (
	<>
		<div className='container_global'>
			<Header/>
		</div>
		<AboutPage/>
	</>

  )
}

export default About