import '../static/css/courses.css'
import Card from './Card'
import { courses } from '../contentData/Courses'
import { springboot_topics } from '../contentData/spring-boot/springboot-topics';
import { data, useLocation, useNavigate } from 'react-router';
// import { courses } from '../utility/cssFile'

function Courses() {
  const navigate = useNavigate();
  const loction = useLocation();
  let dataContent = courses;
  console.log(location.pathname);
  if(location.pathname.includes(import.meta.env.VITE_SB_CONTENT)){
      dataContent = springboot_topics;
  }
  return (
    <div className='courses-main'>
          { dataContent.map((course,index)=>{
            return <div key={index}><Card key={index} title = {course.title} image = {course.image} description = {course.description}/></div>
          }) }
    </div>
  )
}

export default Courses