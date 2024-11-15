import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import logo from '../assets/suitcase.png'

const Header = ({insideHeader}) => {
    return (
       <>
            <div className='nav d-flex justify-content-between pt-2  align-items-center  py-2'>
                <div className='d-flex justify-content-between'>
                    <div className='align-items-center'>
                        <Link className='logo' to={'/'}><h3 className='ps-5'>Job<span className='head fw-bolder'>Hub</span></h3></Link>
                    </div>
                    {
                        insideHeader ?
                        <div className=" head-two">
                        <ul>
                            <li>Steps to Join</li>
                            <li>Mission</li>
                            <li>Contact Us</li>
                        </ul>
                      </div>
                      :
                      <div className=" head-two">
                      <ul>
                          {/* <li>Jobs</li> */}
                          
                      </ul>
                    </div>
                    }
                </div>
               {
               insideHeader ? 
               <div className='pe-5  head-three'>
                    <div>
                        <Link className="head-three-in " to={'/Login'}>Sign In </Link>
                    </div>
                    <div>
                        <Link className="head-three-up " to={'/register'}>Sign Up </Link>
                    </div>
                   
                </div>
                :
                <div className='pe-5  head-three'>
                   
                    <div>
                        <Link style={{textDecoration:'none'}} className='me-3'>Profile</Link>
                        <Link to={'/'} className='head-three-up'>LogOut</Link>
                    </div>    
                </div>
                }
            </div>
       </>
    )
}

export default Header
