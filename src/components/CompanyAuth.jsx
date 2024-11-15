import React from 'react'
import { Form, FloatingLabel, Spinner } from 'react-bootstrap'
import ComLand from '../assets/img6.jpg'
import { Link } from 'react-router-dom'
import SharedHeader from './SharedHeader'

const CompanyAuth = ({insideCompanyRegister}) => {
    return (

        <>
            <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center'>
                <div style={{ width: '900px', background: '#d7cbe0', borderRadius: '10px' }} className="row container-fluid">

                    <div className="col-6 d-flex justify-content-center align-items-center flex-column">
                        <div style={{ lineHeight: '3' }} className='d-flex justify-content-center align-items-center flex-column'>
                            <h1 className='fw-bolder' style={{ fontSize: '2.5rem', color: '#6E00BE' }}>{insideCompanyRegister ?   "Register": "Login"}</h1>
                            <p style={{ fontSize: '1.2rem' }}>Find Perfect Match for Your Comapny</p>
                        </div>
                        <div className='container-fluid'>

                            <Form>
                               { 
                                insideCompanyRegister &&<FloatingLabel controlId="floatingInputName" label="Username" className="mb-3  "  >
                                    <Form.Control type="text" placeholder="username" />
                                </FloatingLabel>}

                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3"  >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" placeholder="Password" />
                                </FloatingLabel>
                            </Form>
                            {
                             insideCompanyRegister ?
                            <div className='mt-3'>
                                <button className='btn btn-primary mb-1'>Register</button>
                                <p>Already a User? Please Click here to <Link to={'/companylogin'}>Login</Link></p>
                            </div>
                            :
                            <div className='mt-3'>
                                <button className='btn btn-primary mb-3'><Link style={{ textDecoration: 'none', color: 'white' }} to={'/CompanyDashboard'}>Login</Link>
                                </button>
                                <p>New User? Please click here to <Link  to={'/companyregister'}>Register</Link></p>
                            </div>
                            }
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ">
                        <img style={{ marginLeft: '1.3rem', borderRadius: '10px' }} className='img-fluid' src={ComLand} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyAuth
