import './App.css';
import HomePage from './component/HomePage'
import Content from './component/Content'
import Navbar from './component/Navbar';
import Card from './component/Card';
import AboutUs from './component/AboutUs';
import Courses from './component/Courses';
import { Routes, Route } from 'react-router-dom';
import MainComponent from './component/MainComponent';

function App() {

  return (


    
    
      <div className="container">
 <Navbar/>
        <Routes>
     
        <Route path='/' element = {<MainComponent/>}>
          <Route index element = {<HomePage/>}/>
          <Route path='/courses' element = {<Courses/>}/>
          <Route path='/about-us' element = {<AboutUs/>}/>
          <Route path='/spring-boot/content' element = {<Courses/>}/>

        </Route>
        {/* <Courses/> */}
        {/* <Content /> */}
        {/* <Card/> */}
        {/* <AboutUs/> */}

        </Routes>
       
      
      </div>
  )
}

export default App
