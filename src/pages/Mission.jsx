import React from 'react'
import Model from '../assets/model.png'
const Mission = () => {
  return (
    <div id='mission'>
      <h2 style={{marginTop:'10rem'}} className=' text-center fs-1 mb-5'>OUR MISSION</h2>
      <div style={{background:'#a649e9',borderRadius:'20px'}} className="row">
      <div className="col-lg-6">
        <img width={'500px'} height={'600px'} className='img-fluid' src={Model} alt="" />
      </div>
      <div className="col-lg-6 d-flex text-light flex-column pe-5 justify-content-center align-items-start">
        <h1 style={{fontSize:'4rem'}}  className='py-3 fw-bolder   fs-1'>Get the Right Job You Deserve</h1>
        
        <p style={{fontSize:'1.2rem',lineHeight:'2'}}>To empower individuals and organizations by creating a seamless platform that connects talented jobseekers with the right opportunities, while enabling recruiters to find and hire the best-fit candidates efficiently. Our mission is to simplify the job search and hiring process, fostering professional growth, inclusivity, and meaningful career advancements for all.</p>
        <div className='d-flex justify-content-start align-items-start'><button className='btn btn-light fs-5 rounded shadow'>Get Started <i className="fa-solid fa-arrow-right"></i></button></div>
      </div>
      </div>
    </div>
  )
}

export default Mission
