import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div id='contact' style={{paddingLeft:'30px',background:'#6E00BE',height:'400px',fontSize:'1.1rem',lineHeight:'2'}} className=" container-fluid mt-5 row shadow ">
      <div className="col-lg-4  py-2 pt-5">
      <Link className='logo ' to={'/'}><h3 className='ps-5'>Job<span className='head fw-bolder text-light'>Hub</span></h3></Link>

        <p className='mt-3' style={{fontWeight:'600', color:'white'}}>Your trusted platform connecting talented job seekers with top recruiters. Explore diverse opportunities, apply effortlessly, and build your career with ease. Where great talent meets great opportunities!</p>
        <p style={{ color:'white'}}>Code licensed by Aswini, docs CC By 3.0</p>
        <p style={{ color:'white'}}>Currently v5.3.2</p>
      </div>
      <div className="col-lg-2 d-flex flex-column py-2">
        <h5 className='text-light fw-bolder pt-5'>Links</h5>
        <a href='#header' style={{textDecoration:'none', color:'white'}}>Home </a>
        <Link to={'/login'} style={{textDecoration:'none', color:'white'}}>JobseekerLogin</Link>
        <Link to={'/register'} style={{textDecoration:'none', color:'white'}}>JobseekerRegister</Link>
        <Link to={'/companyregister'} style={{textDecoration:'none', color:'white'}}>RecruiterLogin</Link>
        <Link to={'/companyregister'} style={{textDecoration:'none', color:'white'}}>RecruiterRegister</Link>

      </div>
      <div className="col-lg-2 d-flex flex-column py-2">
        <h5 className='text-light fw-bolder pt-5'>Guides</h5>
        <a href='#mission' style={{textDecoration:'none', color:'white' }}>Mission</a>
        <a href='#partners' style={{textDecoration:'none', color:'white'}}>Our Partners</a>
        <a href='#faq' style={{textDecoration:'none', color:'white'}}>FAQ</a>
   
      </div>
      <div className="col-lg-4 py-2">
          <h5 className='text-light fw-bolder pt-5'>Contact Us</h5>
          <input style={{height:'35px'}} className='border rounded ' type="text" placeholder='Enter your email here' />
          <i style={{width:'40px', height:'40px', paddingTop:'10px', paddingLeft:'10px', marginLeft:'20px', borderRadius:'10px'}} className="fa-solid fa-arrow-right bg-light"></i>
          <div style={{color:'white', marginTop:'20px', marginLeft:'-20px'}} className="d-flex justify-content-evenly ">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-solid fa-phone"></i>
          </div>
       
      </div>

    </div>
    <div style={{background:'#d5b6ee',width:'100%'}} className='container-fluid  text-center py-3 '><span className=' text-dark' style={{textAlign:'center', color:'white'}}>&copy; 2024 December JOBHUB by Aswini P S  ,Built with React</span></div>

    </>
  )
}

export default Footer