import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div style={{paddingLeft:'30px',background:'#6E00BE',height:'300px'}} className=" container-fluid mt-5 row shadow ">
      <div className="col-lg-4 py-2 pt-5">
      <Link className='logo ' to={'/'}><h3 className='ps-5'>Job<span className='head fw-bolder text-light'>Hub</span></h3></Link>

        <p className='mt-3' style={{fontWeight:'600', color:'white'}}>Designed and built with all the love in the world by the Luminar team with the help of our contributers.</p>
        <p style={{ color:'white'}}>Code licensed Luminar, docs CC By 3.0</p>
        <p style={{ color:'white'}}>Currently v5.3.2</p>
      </div>
      <div className="col-lg-2 d-flex flex-column py-2">
        <h5 className='text-light fw-bolder pt-5'>Links</h5>
        <Link to={'Home'} style={{textDecoration:'none', color:'white'}}>Home </Link>
        <Link to={'login'} style={{textDecoration:'none', color:'white'}}>Login</Link>
        <Link to={'register'} style={{textDecoration:'none', color:'white'}}>Register</Link>
      </div>
      <div className="col-lg-2 d-flex flex-column py-2">
        <h5 className='text-light fw-bolder pt-5'>Guides</h5>
        <Link style={{textDecoration:'none', color:'white' }}>React</Link>
        <Link style={{textDecoration:'none', color:'white'}}>React Bootstrap</Link>
        <Link style={{textDecoration:'none', color:'white'}}>React Router</Link>
   
      </div>
      <div className="col-lg-4 py-2">
          <h5 className='text-light fw-bolder pt-5'>Contact Us</h5>
          <input style={{height:'35px'}} className='border rounded ' type="text" placeholder='Enter your email here' />
          <i style={{width:'40px', height:'40px', paddingTop:'10px', paddingLeft:'10px', marginLeft:'20px', borderRadius:'10px'}} className="fa-solid fa-arrow-right bg-info"></i>
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
    <div style={{background:'#d5b6ee',width:'100%'}} className='container-fluid  text-center py-3 '><span className=' text-dark' style={{textAlign:'center', color:'white'}}>&copy; 2024 by Aswini P S June , Job Hub.Built with React</span></div>

    </>
  )
}

export default Footer