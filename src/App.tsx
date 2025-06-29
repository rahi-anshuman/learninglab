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
        <Route path='/learninglab' element={<MainComponent />}>
          <Route index element={<HomePage />} />
          <Route path='/learninglab/courses' element={<Courses />} />
          <Route path='/learninglab/about-us' element={<AboutUs />} />
          <Route path='/learninglab/spring-boot/content' element={<Courses />} />
          <Route path='/learninglab/spring-boot/content/:id' element={<CourseContent />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
