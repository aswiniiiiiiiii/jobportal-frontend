import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Header.css'
import logo from '../assets/suitcase.png'

const Header = () => {
    
    return (
       <>
            <div id='header' className='nav d-flex justify-content-between pt-2  align-items-center  py-2'>
                <div className='d-flex justify-content-between'>
                    
                        <div className='align-items-center'>
                        <Link className='logo' to={'/'}><h3 className='ps-5'>Job<span className='head fw-bolder'>Hub</span></h3></Link>
                    </div>
                    
               
                    <div className=" head-two">
                      <ul>
                          {/* <li>Jobs</li> */}
                          
                      </ul>
                      </div>
                    
                        <div style={{fontSize:'1.2rem'}} className=" head-two">
                        <ul>
                        <li><a href='#mission'  style={{textDecoration:'none',color:'black'}}>Mission</a></li>

                            <li><a href='#steps'  style={{textDecoration:'none',color:'black'}}>Steps to Join</a></li>

                            <li><a href='#faq'  style={{textDecoration:'none',color:'black'}}>FAQ</a></li>
                            <li><a href='#contact'  style={{textDecoration:'none',color:'black'}}>Contact Us</a></li>



                        </ul>
                      </div>
                    
                      
                     
                  
                    
                </div>
             
               <div style={{fontSize:'1.2rem'}} className='pe-5  head-three'>
                <div>
                    <Link className="head-three-in " to={'/companyLogin'}>For Recrutiers </Link>
                </div>
                <div>
                    <Link  className="head-three-up " to={'/login'}>For Job seekers</Link>
                </div>
               
                 </div> 
               
                
                
                
                
            </div>
       </>
    )
}

export default Header
