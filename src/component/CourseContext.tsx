
import '../static/css/courseContent.css'
// import { annotationData } from '../contentData/spring-boot/annotations';
import { useLocation, useNavigate } from 'react-router-dom';
// import getContentData from '../api/getContentData';
import type contentFomat  from '../contentData/dataFormat/contentFomat'

import getContentData from '../api/getContentData';

// import { getComponetReactData, getComponetspringboottData } from '../Util/getFileData';
// import  customizing_bean_nature  from '../static/img/customizing_bean_nature.png'

function CourseContent() {
    const location = useLocation();
    const navigate = useNavigate();
    const hooksData : contentFomat[] = getContentData(location.pathname) as contentFomat[];
    // Promise<contentFomat[]> =  getContentData(location.pathname.replace("/content","_")).then((data)=>setHookData(data.data));

  console.log(location);
  console.log(hooksData);
  function backtoContentPage(){
    const back_path = location.pathname.substring(0,location.pathname.lastIndexOf("/"));
    navigate(back_path);
  }
  return (
    <div className='content-main'>
      
      <div className='content-type-list'>
      <button onClick={backtoContentPage}>Back</button>
        {hooksData.map((each_hook, index) => {
          return <div key={index} className='content-type-list-content'>
            
           { each_hook.title ? <h3 className='contet-type-title'>{each_hook.title}</h3>:<></>}
           {each_hook.subtitle ? <div className='content-types'><h4>{each_hook.subtitle}</h4></div> : <></>}
            {each_hook.description?<p className='content-type-description '>{each_hook.description}</p> : <></>}
            {each_hook.formattedDescription?<pre className='formatted-description'>{each_hook.formattedDescription}</pre> : <></>}
            {each_hook.syntax ? <code className='content-type-syntax '><p className='subheading-text'>Syntax</p><pre className='code'>{each_hook.syntax}</pre></code> : <></>}
            {each_hook.code ? <code className='content-type-example '><p className='subheading-text'>Code Example</p><pre className='code'>{each_hook.code}</pre></code> : <></>}
            {each_hook.image ? <div className='content-type-image'><img  src = { new URL(`${each_hook.image}`,import.meta.url).href}/></div>:<></>}
          </div>
        })}
      </div>
    </div>
  )
}

export default CourseContent