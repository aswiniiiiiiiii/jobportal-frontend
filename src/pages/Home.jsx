import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import Land from '../assets/img1.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/recruiter.jpg'
import icon from '../assets/icon.png'
import Footer from '../components/Footer'
import Faq from './Faq'
import { getAddedFaqHomeAPI } from '../services/allAPI'
import Move from './Move'
import Mission from './Mission'
import roundicon from '../assets/roundicon.png'
import { updatedFaqContext } from '../contexts/ContextApi'
const Home = () => {
  
  const [faqDetails,setFaqDetails] = useState([])
  useEffect(()=>{
    viewFaq()
  },[])
  const viewFaq = async()=>{
    try{
      const result = await getAddedFaqHomeAPI()
      console.log(result);
      if(result.status==200){
        setFaqDetails(result.data.faqs)
        // console.log(result.data);
        
      }
      
    }catch{

    }
  }
  return (
    <>
        <Header />

      <div  className='home-space '>
        <div style={{marginTop:'3rem'}} className='row  '>
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center text-justify ">

            <div>
              <h1 className='heading-one '>Find Your<span className='heading-two'> New Job </span>Today</h1>
              <p className='home-para'>Discover the best Jobs and the perfect match and get hired by the most prestigious companies.Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>
              <button className='button my-3 '><Link to={'/Login'} className='login-btn'>Find your Next Job</Link></button>

            </div>
          </div>
          <div className="col-lg-6">
            <img className='img-fluid' src={Land} alt="" />
          </div>
        </div>
        {/* mission */}
        <Mission id='mission'/>
        {/* moving conpany logos */}
        <Move/>
        {/* Steps to join */}
        <h3 id='steps'  className='text-center fw-normal my-5 steps-heading '>Steps to Join Job Seekers</h3>
        <div className='d-flex justify-content-between'>

          <div className="row container  gap-5 d-flex justify-content-center align-items-center">
            <div  className="col-4 step-box card shadow p-5 d-flex justify-content-center align-items-center flex-column ">
             <div style={{height:'100px',width:'100px'}} className=' d-flex justify-content-center align-items-center'>
                <img style={{position:''}} height={'100px'} width={'100px'} className='img-fluid' src={roundicon} alt="" />
                <i style={{position:'absolute',padding:'2rem 0px'}} className="fa-solid fa-user fs-2 text-light"></i>
             </div>
             <h5 className='py-2 fw-bolder'>Step 1 : Create Account</h5>

              <p style={{fontSize:'1.1rem'}} className='text-justify text-center'>First Register to our website to create Account. Then Login to Our website to expolore More!! </p>
            </div>
            
            <div className="col-4 step-box card shadow p-5 d-flex justify-content-center align-items-center flex-column ">
             <div style={{height:'100px',width:'100px'}} className='d-flex justify-content-center align-items-cenetr'>
                <img style={{position:''}} height={'100px'} width={'100px'} className='img-fluid' src={roundicon} alt="" />
                <i style={{position:'absolute',padding:'2rem 0px'}} className="fa-solid fa-map fs-2 text-light"></i>
             </div>
             <h5 className='py-2 fw-bolder'>Step 2 : Explore Our Website</h5>

              <p style={{fontSize:'1.1rem'}} className='text-justify text-center'>Explore Our Website.Finf Perfect job bact based on your skill set.You can filter jobs based on your interset </p>
            </div>
            <div className="col-4 step-box card shadow p-5 d-flex justify-content-center align-items-center flex-column ">
             <div style={{height:'100px',width:'100px'}} className='d-flex justify-content-center align-items-cenetr'>
                <img style={{position:''}} height={'100px'} width={'100px'} className='img-fluid' src={roundicon} alt="" />
                <i style={{position:'absolute',padding:'2rem 0px'}} className="fa-solid fa-check fs-2 text-light"></i>
             </div>
             <h5 className='py-2 mt-3 fw-bolder text-center'>Step 3 : Apply Job Based in Your Interset </h5>

              <p style={{fontSize:'1.1rem'}} className='text-justify text-center'>You Can Apply interseted jobs by hitting on Apply button. There you can see the detailed description of the job.Apply bu uploading Resume </p>
            </div>
            {/* <div className="col-4 step">
              <h5>Step Two</h5>
              <p>Login to Your Account</p>
            </div>
            <div className="col-4 step">
              <h5>Step Three</h5>
              <p>Apply for Jobs </p>
            </div> */}
          </div>
        </div>
        {/* Mission */}
        {/* <div>
          <div className="row mission ">
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <h3>Mission</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque debitis, doloribus accusantium aperiam adipisci sunt quae dolore deserunt vitae eveniet sit enim! Voluptates fugiat soluta quaerat est inventore pariatur qui?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab fuga nostrum temporibus id, iusto est nulla suscipit pariatur ut reiciendis a eius sint, sed, dolorum eligendi! Deleniti, ex voluptatem!
              </p>
            </div>
            <div className="col-lg-6">
              <img className='img-fluid' src={img3} alt="" />
            </div>

          </div>
        </div> */}
        <div className='my-5'>
          <div className="row seeker-row">
            <div className="col-6   seeker-part d-flex flex-column justify-content-center align-items-center">
              <h4 className='mb-3 text-start'>Why Job Seekeres Like Us ?</h4>
              <div style={{fontSize:'1.2rem'}} className='d-flex justify-content-center align-items-center'>
                <i class="fa-regular fa-user icons-seeker pe-3"></i>
                <p> Our platform offers a diverse selection of job postings across various industries, ensuring there’s something for everyone.  </p>
              </div>
              <div style={{fontSize:'1.2rem'}} className='d-flex justify-content-center align-items-center'>
                <i class="fa-solid fa-arrow-pointer icons-seeker pe-3"></i>
                <p> Clear and detailed job descriptions, including salary ranges, required skills, and job expectations, help you make informed decisions.</p>
              </div>
              <div style={{fontSize:'1.2rem'}} className='d-flex justify-content-center align-items-center'>
                <i class="fa-solid fa-arrow-pointer icons-seeker pe-3"></i>
                <p> Our platform provides robust filtering and search functionalities to simplify your job-hunting process, ensuring you find the most relevant opportunities with ease.</p>
              </div>
              <button className='seeker-btn login-btn'><Link className='seeker-Link' to={'/login'}>Find Jobs </Link></button>
            </div>
            <div className="col-6 seeker-col ">
              <img className='img-fluid seeker-img' src={img3} alt="" />
            </div>
          </div>
        </div>
        {/* recruiter */}
        <div style={{marginTop:'5rem'}} className='my-5'>
          <div className="row seeker-row">
            
            <div  className="col-6 seeker-col">
              <img  className='img-fluid seeker-img' src={img4} alt="" />
            </div>
            <div className="col-6 seeker-col seeker-part d-flex flex-column justify-content-center align-items-center">
              <h4 className='mb-3 text-start'>Why Recruiters Like Us ?</h4>
              <div style={{fontSize:'1.2rem'}} className='d-flex justify-content-center align-items-center'>
                <img className='pe-3' height={'25px'} src={icon} alt="" />
                <p > Our platform makes it easy to post job openings with intuitive tools and quick setups, saving recruiters valuable time.   </p>
              </div>
              <div style={{fontSize:'1.2rem'}} className='d-flex justify-content-center align-items-center'>
                <i class="fa-solid fa-arrow-pointer icons-seeker pe-3"></i>
                <p> Our platform is designed with simplicity in mind, enabling recruiters to navigate and manage hiring tasks effortlessly.</p>
              </div>
              <div style={{fontSize:'1.2rem'}} className='d-flex justify-content-center align-items-center'>
                <i class="fa-solid fa-arrow-pointer icons-seeker pe-3"></i>
                <p> We cater to diverse recruitment needs with customizable packages and features, from small startups to large enterprises.</p>
              </div>
              <button className='seeker-btn'><Link className='seeker-Link' to={'/companyLogin'}>Find Candidates </Link></button>
            </div>
          </div>
        </div>
        <Faq id="faq" displayData={faqDetails}/>
      </div>
      <Footer/>

    </>
  )
}

export default Home
