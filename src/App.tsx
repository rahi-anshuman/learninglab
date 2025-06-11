import './App.css';
import HomePage from './component/HomePage'
import Content from './component/Content'
import Navbar from './component/Navbar';
import Card from './component/Card';
import AboutUs from './component/AboutUs';
import Courses from './component/Courses';

function App() {

  return (
    
      <div className="container">
        <Navbar/>
        <HomePage />
        {/* <Courses/> */}
        {/* <Content />
        <Card/> */}
        {/* <AboutUs/> */}
      </div>
  )
}

export default App
