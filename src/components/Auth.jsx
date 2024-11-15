import React from 'react'
import userLand from '../assets/login4.jpg'
import { Form, FloatingLabel, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Auth = ({insideRegister}) => {
    return (
        <>
            <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center'>
                <div style={{width:'900px',borderRadius:'10px',background:'#d7cbe0'}} className="row  container-fluid">
                    <div className="col-6">
                        <img style={{marginLeft:'-1.3rem',borderRadius:'10px'}} className='img-fluid ' src={userLand} alt="" />
                    </div>
                    <div   className="col-6 ">
                       <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div style={{color:'#6E00BE',fontSize:'8rem'}}>
                            <i class="fa-regular fa-user"></i>
                            </div>
                            <div>
                                
                                
                                <h3 style={{ color: '#6E00BE' }} className='text-center fw-bolder'>Sign {insideRegister ?"Up":"In"}</h3>
                            
                                {/* <p>Find Your New Job Today</p> */}
                            </div>
                            <div className='w-100'>
                                <Form>
    
                                  {  
                                    insideRegister &&
                                    <FloatingLabel controlId="floatingInputName" label="Username" className="mb-3  "  >
                                        <Form.Control type="text" placeholder="username" />
                                    </FloatingLabel>
                                    }
    
                                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3"  >
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="Password">
                                        <Form.Control type="password" placeholder="Password" />
                                    </FloatingLabel>
                                    
                                    {
                                        insideRegister &&
                                      <>
                                            <label className='mt-2' htmlFor="">Role Type</label>
                                        <div className='d-flex  mt-2'>
                                        <Form.Check type="radio"  name="options"  id="option2" label="Job Seeker"value="option2" />
                                        <Form.Check type="radio"  name="options"  id="option2" label="Recrutier"value="option2" />
                                        </div>
                                      </>}
                                    
                                </Form>
                       </div>
                          


                        </div>
                        {
                         insideRegister ?
                        <div className="mt-3 mb-2">
                            <button  className='btn btn-primary mb-1'>Register</button>
                            <p>Already a User? Please Click here to <Link to={'/login'}>Login</Link></p>
                        </div>
                         :
                        <div className="mt-3">
                            <button  className='btn btn-primary mb-3'><Link style={{textDecoration:'none',color:'white'}} to={'/userDashboard'}>Login</Link>
                            </button>
                            <p>New User? Please click here to <Link to={'/register'}>Register</Link></p>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth
