import  {FC} from 'react'
import BlogPage from '../components/blog/BlogPage'
import Header from '../components/header/Header'
import '../index.css'

const Blog: FC = () => {
  return (
	<>
		<div className='container_global'>
			<Header/>
		</div>
		{/* <BlogPage/> */}
	</>
  )
}

export default Blog