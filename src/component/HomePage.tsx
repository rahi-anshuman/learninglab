import '../static/css/homePage.css'



import React from 'react'


import {landing_page} from '../utility/image'

function HomePage() {
  return (
    <div className='home-page-main-container'>
    <div className='home-page-main'>

        <div className = "image">
        <img src={landing_page} alt="" />
        </div>
        <div className = "content">
          <h2 className='content-heading'>EduQuest</h2>
          <p className='content-text'>Every day offers a fresh opportunity to learn, improve, and progress. Embrace each moment with focus and determination. Growth happens step by step—whether you're mastering new skills, exploring ideas, or building confidence. Keep moving forward, stay curious, and let today be a step toward your brighter future.</p></div>
        

    </div>
    </div>
  )
}

export default HomePage