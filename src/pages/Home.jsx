import React from 'react'
import Header from '../components/Header'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import Land from '../assets/img1.jpg'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import icon from '../assets/icon.png'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Header insideHeader={true}/>

      <div className='home-space '>
        <div className='row  '>
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center text-justify ">

            <div>
              <h1 className='heading-one '>Find Your<span className='heading-two'> New Job </span>Today</h1>
              <p className='home-para'>Discover the best Jobs and the perfect match and get hired by the most prestigious companies.</p>
              <button className='button'><Link to={'/Login'} className='login-btn'>Find your Next Job</Link></button>

            </div>
          </div>
          <div className="col-lg-6">
            <img className='img-fluid' src={Land} alt="" />
          </div>
        </div>
        {/* Steps to join */}
        <h3 className='text-center my-5 steps-heading '>Steps to Join Job Seekers</h3>
        <div className='d-flex justify-content-between'>

          <div className="row container  gap-5 d-flex justify-content-center align-items-center">
            <div className="col-4 step ">
              <h5>Step One</h5>
              <p>Create a Account <i class="fa-solid fa-right-to-bracket"></i></p>
            </div>
            <div className="col-4 step">
              <h5>Step Two</h5>
              <p>Login to Your Account</p>
            </div>
            <div className="col-4 step">
              <h5>Step Three</h5>
              <p>Apply for Jobs </p>
            </div>
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
              <div className='d-flex justify-content-center align-items-center'>
                <i class="fa-regular fa-user icons-seeker pe-3"></i>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet eum, molestias optio temporibus facere cupiditate aliquam   </p>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <i class="fa-solid fa-arrow-pointer icons-seeker pe-3"></i>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis magni blanditiis aliquid repellat rem quos vitae eveniet eaque veniam doloribus nisi ita</p>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <i class="fa-solid fa-arrow-pointer icons-seeker pe-3"></i>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis magni blanditiis aliquid repellat rem quos vitae eveniet eaque veniam doloribus nisi ita</p>
              </div>
              <button className='seeker-btn'><Link className='seeker-Link' to={'/login'}>Find Jobs </Link></button>
            </div>
            <div className="col-6 seeker-col ">
              <img className='img-fluid seeker-img' src={img3} alt="" />
            </div>
          </div>
        </div>
        {/* recruiter */}
        <div className='my-5'>
          <div className="row seeker-row">
            
            <div className="col-6 seeker-col">
              <img  className='img-fluid seeker-img' src={img4} alt="" />
            </div>
            <div className="col-6 seeker-col seeker-part d-flex flex-column justify-content-center align-items-center">
              <h4 className='mb-3 text-start'>Why Job Recruiters Like Us ?</h4>
              <div className='d-flex justify-content-center align-items-center'>
                <img className='pe-3' height={'25px'} src={icon} alt="" />
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet eum, molestias optio temporibus facere cupiditate aliquam   </p>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <i class="fa-solid fa-arrow-pointer icons-seeker pe-3"></i>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis magni blanditiis aliquid repellat rem quos vitae eveniet eaque veniam doloribus nisi ita</p>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <i class="fa-solid fa-arrow-pointer icons-seeker pe-3"></i>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis magni blanditiis aliquid repellat rem quos vitae eveniet eaque veniam doloribus nisi ita</p>
              </div>
              <button className='seeker-btn'><Link className='seeker-Link' to={'/companyLogin'}>Find Candidates </Link></button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>

    </>
  )
}

export default Home
