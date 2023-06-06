import {FC} from 'react'
import ContactPage from '../components/contact/ContactPage'
import Header from '../components/header/Header'
import '../index.css'

export const Contact:FC = () => {
  return (
	<>
		<div className='container_global'>
			<Header/>
		</div>
		<ContactPage/>
	</>
  )
}
