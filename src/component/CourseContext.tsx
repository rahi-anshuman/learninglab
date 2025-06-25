
import '../static/css/courseContent.css'
import { annotationData } from '../contentData/spring-boot/annotations';
import { useLocation } from 'react-router-dom';
// import getContentData from '../api/getContentData';
import type contentFomat  from '../contentData/dataFormat/contentFomat'
import { useState } from 'react';
// import { getComponetReactData, getComponetspringboottData } from '../Util/getFileData';
// import  customizing_bean_nature  from '../static/img/customizing_bean_nature.png'

function CourseContent() {

  // console.log(hooksData);
//   const location = useLocation();
//   var hooksData = getComponetReactData(location.pathname);
//   if(location.pathname.includes('react')){
//     hooksData = getComponetReactData(location.pathname);
//   }
//   else if(location.pathname.includes('spring')){
//     hooksData = getComponetspringboottData(location.pathname);
   
//   }
const contD : contentFomat[]=[];
  const[hookData,setHookData] = useState(contD)

    const hooksData : contentFomat[] = annotationData;
    // Promise<contentFomat[]> =  getContentData(location.pathname.replace("/content","_")).then((data)=>setHookData(data.data));

  console.log(location);
  console.log(hooksData);
  return (
    <div className='content-main'>
      <div className='content-type-list'>
        {hooksData.map((each_hook, index) => {
          return <div key={index} className='content-type-list-content'>
            {each_hook.subtitle ? <div className='content-types'>
              <h4>{each_hook.subtitle}</h4>
            </div> : <></>}
           { each_hook.title ? <h4 className='contet-type-title'>{each_hook.title}</h4>:<></>}
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