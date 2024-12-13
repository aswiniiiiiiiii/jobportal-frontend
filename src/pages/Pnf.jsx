import React from 'react'
import { Link } from 'react-router-dom'
import pdf  from '../assets/pdf.png'

const Pnf = () => {
  return (
    <div style={{background:"",height:"100vh"}} className='d-flex justify-content-center align-items-center'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h1 style={{fontSize:'5rem'}} className=' fw-bolder'>404</h1>
        <img width={'500px'} className='img-fluid' src={pdf} alt="" />
      <h1>oops! page Not Found</h1>
      <p>The page you'r looking for not available</p>
        <div><button className='btn btn-primary'><Link  style={{textDecoration:'none',color:'white'}} to={'/'}>Back to Home</Link></button></div>
      </div>
    </div>
  )
}

export default Pnf
