import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import "tailwindcss/tailwind.css";
import { CoursesLanding } from './pages/CoursesLanding'
import {Routes, Route} from 'react-router-dom'
import Blog from './pages/Blog'
import BlogDeatal from './pages/BlogDeatal'
import About from './pages/About'
import { Contact } from './pages/Contact'
import Deatail from './pages/Deatail'
import List from './pages/List'
import { useAppSelector } from './redux/hook';
import Footer from './components/footer/Footer';



function App() {
  const theme = useAppSelector((state) => state.reducer.value);

    useEffect(() => {
        document.body.style.backgroundColor = `${theme ? '#161C24' : ''}`;
        return () => {
          document.body.style.backgroundColor = '';
        };
      }, [theme]);
      
  return (
    <div className={`${theme ? 'dark' : ''}`}>
      <Routes>
        <Route path="/" element={<CoursesLanding />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/BlogDetail" element={<BlogDeatal />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Detail" element={<Deatail />} />
        <Route path="/List" element={<List />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App