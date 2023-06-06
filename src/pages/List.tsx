import {FC} from 'react'
import '../index.css'
import Header from '../components/header/Header'
import ListPage from '../components/list/ListPage'
import { Footer } from 'antd/es/layout/layout'

const List: FC = () => {
  return (
	<div className='container_global'>
        <Header/>
        <ListPage/>
    </div>
  )
}

export default List