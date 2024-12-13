import React, { useState } from 'react'
import { Form, FloatingLabel, Spinner, Alert } from 'react-bootstrap'
import ComLand from '../assets/img6.jpg'
import { Link, useNavigate } from 'react-router-dom'
import SharedHeader from './SharedHeader'
import { loginAPI, registerAPI } from '../services/allAPI'
// import Toastify from 'toastify-js'

// toast
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CompanyAuth = ({insideCompanyRegister}) => {
    const [recruiterDetails,setRecruiterDetails] = useState({company:"",email:"",password:"",phone:"",jobsPosted:"",profilePic:""})
    console.log(recruiterDetails);
    const navigate = useNavigate()
    //recruiterRegister

    // const notify = () => toast("Wow so easy!");

    const recruiterRegister =async(e)=>{
        e.preventDefault()
        if(recruiterDetails.company && recruiterDetails.email && recruiterDetails.password ){
            // alert("call api")
            try{
                const result = await registerAPI(recruiterDetails)
                console.log(result);
                if(result.status==200){
                    // toast.success('Registered Succesfully');
                    alert("Registered Succesfully") 
                        navigate('/companylogin')
                        setRecruiterDetails({company:"",email:"",password:""})
                         }
                         else{
                            if(result.response.status==406)
                                {
                                alert(result.response.data)
                            }
                           
                         }
                 
            }catch(err){
                console.log(err);
                
            }
        }else{
            // toast.error('Please fill the form Completely!!');
            alert('Please fill the form Completely!!')
        }
    }

    //recruiterLogin
    const recruiterLogin = async(e)=>{
        
        e.preventDefault()
        if(recruiterDetails.email &&recruiterDetails.password ){
            try{
                const result = await loginAPI(recruiterDetails)
                console.log(result);
                
                if(result.status==200){
                    sessionStorage.setItem("recruiter",JSON.stringify(result.data.recruiter))
                    sessionStorage.setItem("token",result.data.token)
                    setRecruiterDetails({company:"",email:"",password:""})
                    navigate('/companydashboard')
                }else{
                    if(result.response.status==404){
                        alert(result.response.data)
                      }
                }
            }catch(err){
                console.log(err);
                
            }
        }
        else{
            alert("Please fill the form completely")

        }
    }
    return (

        <>
            <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center'>
                <div style={{ width: '900px', background: '#d7cbe0', borderRadius: '10px' }} className="row container-fluid">

                    <div className="col-6 d-flex justify-content-center align-items-center flex-column">
                        <div style={{ lineHeight: '3' }} className='d-flex justify-content-center align-items-center flex-column'>
                            <h1 className='fw-bolder' style={{ fontSize: '2.5rem', color: '#6E00BE' }}>{insideCompanyRegister ?   "Register": "Login"}</h1>
                            <p style={{ fontSize: '1.4rem' }}>Find Perfect Match for Your Company</p>
                        </div>
                        <div className='container-fluid'>

                            <Form style={{fontSize:'1.2rem'}}>
                               { 
                                insideCompanyRegister &&<FloatingLabel  controlId="floatingInputName" label="Username" className="mb-3  "  >
                                    <Form.Control  value={recruiterDetails.company} onChange={(e)=>setRecruiterDetails({...recruiterDetails,company:e.target.value})} type="text" placeholder="username" />
                                </FloatingLabel>}

                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3"  >
                                    <Form.Control  value={recruiterDetails.email} onChange={(e)=>setRecruiterDetails({...recruiterDetails,email:e.target.value})} type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control  value={recruiterDetails.password} onChange={(e)=>setRecruiterDetails({...recruiterDetails,password:e.target.value})} type="password" placeholder="Password" />
                                </FloatingLabel>
                            </Form>
                            {
                             insideCompanyRegister ?
                            <div className='mt-3'>
                                <button onClick={recruiterRegister} className='btn btn-primary mb-1'>Register</button>
                                <p style={{fontSize:'1.2rem'}}>Already a User? Please Click here to <Link to={'/companylogin'}>Login</Link></p>
                            </div>
                            :
                            <div className='mt-3'>
                                <button onClick={recruiterLogin} className='btn btn-primary mb-3'><Link style={{ textDecoration: 'none', color: 'white' }} >Login</Link>
                                </button>
                                <p style={{fontSize:'1.2rem'}}>New User? Please click here to <Link  to={'/companyregister'}>Register</Link></p>
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
            <ToastContainer />
        </>
    )
}

export default CompanyAuth
