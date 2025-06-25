import './App.css';
import HomePage from './component/HomePage'
import Navbar from './component/Navbar';
import AboutUs from './component/AboutUs';
import Courses from './component/Courses';
import { Routes, Route } from 'react-router-dom';
import MainComponent from './component/MainComponent';
import CourseContent from './component/CourseContext';

function App() {

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path='/' element={<MainComponent />}>
          <Route index element={<HomePage />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/spring-boot/content' element={<Courses />} />
          <Route path='/spring-boot/content/:id' element={<CourseContent />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
