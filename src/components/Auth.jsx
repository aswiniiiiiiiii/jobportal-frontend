import React, { useState } from 'react'
import userLand from '../assets/login4.jpg'
import { Form, FloatingLabel, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { jobseekerloginAPI, registerJobseekerAPI } from '../services/allAPI'

const Auth = ({insideRegister}) => {
    const [jobSeeker,setJobSeeker] = useState({name:"",email:"",password:"",phone:"",resume:'',appliedJobs:""})
    console.log(jobSeeker);
    const navigate = useNavigate()

    //jobseeker register
    const jobSeekerRegister =async (e)=>{
        e.preventDefault()
        if(jobSeeker.name && jobSeeker.email && jobSeeker.password){
            // alert("call api")
            try{
                const result = await registerJobseekerAPI(jobSeeker)
                console.log(result);
                if(result.status==200){
                    alert("Registered Succesfully")
                    setJobSeeker({name:"",email:"",password:""})
                    navigate('/login')

                }else{
                    if(result.response.status==406)
                        {
                        alert(result.response.data)
                    }
                }
                
            }catch(err){
                console.log(err);
                
            }
        }else{
            alert("Please fill the form completely!!")
        }
    }

    //jobseekerlogin
    const jobseekerLogin =async (e)=>{
        e.preventDefault()
        if(jobSeeker.email && jobSeeker.password){
            try{
                const result = await jobseekerloginAPI(jobSeeker)
                console.log(result);
                if(result.status==200){
                    sessionStorage.setItem("jobseeker",JSON.stringify(result.data.jobSeeker))
                    sessionStorage.setItem("token",result.data.token)
                    setJobSeeker({name:"",email:"",password:""})
                    // alert("Successfully Logined!!")
                    navigate('/userdashboard')
                }else{
                    alert(result.response.data)
                }
            }catch(err){
                console.log(err);
                
            }
        }else{
            alert("Please fill the form completely")
        }
    }
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
                                
                                
                                <h3 style={{ color: '#6E00BE' ,fontSize:'2rem'}} className='text-center fw-bolder mb-3'>Sign {insideRegister ?"Up":"In"}</h3>
                            
                                {/* <p>Find Your New Job Today</p> */}
                            </div>
                            <div className='w-100'>
                                <Form style={{fontSize:'1.2rem'}}>
    
                                  {  
                                    insideRegister &&
                                    <FloatingLabel controlId="floatingInputName" label="Username" className="mb-3  "  >
                                        <Form.Control style={{fontSize:'1.2rem'}} value={jobSeeker.name}  onChange={e=>setJobSeeker({...jobSeeker,name:e.target.value})} type="text" placeholder="username" />
                                    </FloatingLabel>
                                    }
    
                                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3"  >
                                        <Form.Control style={{fontSize:'1.2rem'}} value={jobSeeker.email} onChange={e=>setJobSeeker({...jobSeeker,email:e.target.value})} type="email" placeholder="name@example.com" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="Password">
                                        <Form.Control style={{fontSize:'1.2rem'}} value={jobSeeker.password} onChange={e=>setJobSeeker({...jobSeeker,password:e.target.value})} type="password" placeholder="Password" />
                                    </FloatingLabel>
                                    
                            
                                    
                                </Form>
                       </div>
                          


                        </div>
                        {
                         insideRegister ?
                        <div style={{fontSize:'1.2rem'}}  className="mt-3 mb-2">
                            <button onClick={jobSeekerRegister}  className='btn btn-primary mb-1'>Register</button>
                            <p className='pt-2'>Already a User? Please Click here to <Link to={'/login'}>Login</Link></p>
                        </div>
                         :
                        <div style={{fontSize:'1.2rem'}} className="mt-3">
                            <button onClick={jobseekerLogin} className='btn btn-primary mb-3'><Link style={{textDecoration:'none',color:'white'}} >Login</Link>
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
