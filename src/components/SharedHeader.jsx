import React from 'react'
import { Link } from 'react-router-dom'

const SharedHeader = () => {
  return (
    <>
       <div className='nav d-flex justify-content-between pt-2  align-items-center  py-2'>
                <div className='d-flex justify-content-between'>
                    <div className='align-items-center'>
                        <Link className='logo' to={'/'}><h3 className='ps-5'>Job<span className='head fw-bolder'>Hub</span></h3></Link>
                    </div>
                      
                    
                    <div className=" head-two">
                      <ul>
                      <li><Link style={{textDecoration:'none',color:'black'}} to={'/companydashboard'}>All Jobs</Link></li>

                          <li><Link style={{textDecoration:'none',color:'black'}} to={'/companymanage'}>Manage Posts</Link></li>
                          <li><Link style={{textDecoration:'none',color:'black'}} to={'/viewapplicants'}>View Applicants</Link></li>

                      </ul>
                    </div>
                    
                </div>
          
              
                
                <div className='pe-5  head-three'>
                   
                    <div>
                        <Link to={'/'} className='head-three-up'>LogOut</Link>
                    </div>    
                </div>
                
            </div>
    </>
  )
}

export default SharedHeader
