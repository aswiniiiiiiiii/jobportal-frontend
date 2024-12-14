import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import profile from '../assets/profile.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { updateRecruiterProfileAPI } from '../services/allAPI';
import SERVER_URL from '../services/serverURL';


const SharedHeader = () => {
      const [recruiterDetails, setJRecruiterDetails] = useState({ company: "", email: "", password: "", phone: "", profilePic: "" })
      const [existingProfilePic, setExistingProfilePic] = useState("")
      const [preview, setPreview] = useState("")
      
      const [open, setOpen] = useState(false)
          const handleClose = () => setShow(false);
          const handleShow = () => {
              setShow(true)
              setOpen(true)
          };
 const [show, setShow] = useState(false);
   const [recruiterName,setRecruiterName] = useState("")
  const navigate = useNavigate()


  useEffect(()=>{
    if(sessionStorage.getItem("recruiter")){
      setRecruiterName(JSON.parse(sessionStorage.getItem("recruiter")).company.split(" ")[0])
  }
  else{
    setRecruiterName("")
  }
  },[] )

  //profile ueeffect
  useEffect(() => {
          if (sessionStorage.getItem('token')) {
              const recruiter = JSON.parse(sessionStorage.getItem("recruiter"))
              setJRecruiterDetails({
                  ...recruiter, company: recruiter.company, email: recruiter.email, password: recruiter.password, phone: recruiter.phone
              })
              setExistingProfilePic(recruiter.profilePic)
          }
      }, [open])
    
      //useeffect
       useEffect(() => {
              if (recruiterDetails.profilePic.type == "image/png" || recruiterDetails.profilePic.type == "image/jpg" || recruiterDetails.profilePic.type == "image/jpeg") {
                  if (recruiterDetails.profilePic) {
                      setPreview(URL.createObjectURL(recruiterDetails.profilePic))
      
                  }
              } else {
                  setPreview("")
              }
          }, [recruiterDetails.profilePic])

    //update profile
    const updateProfile = async () => {
            const { company, email, password, phone, profilePic } = recruiterDetails
            if (phone || profilePic) {
                const reqBody = new FormData()
                reqBody.append("company", company)
                reqBody.append("email", email)
                reqBody.append("password", password)
                reqBody.append("phone", phone)
                preview ? reqBody.append("profilePic", profilePic) : reqBody.append("profilePic", existingProfilePic)
    
                const token = sessionStorage.getItem("token")
                if (token) {
                    const reqHeader = {
                        "Content-Type": "multipart/form-data",
                        "Authorization": `Bearer ${token}`,
                    };
                    //api call
                    try {
                        const result = await updateRecruiterProfileAPI(reqBody, reqHeader)
                        console.log(result);
    
                        if (result.status == 200) {
                            alert("User Profile Updated Successfully!!")
                            sessionStorage.setItem("recruiter", JSON.stringify(result.data))
                        }
                        // alert("")
                    } catch (err) {
                        console.log(err);
    
                    }
                } else {
                    alert("Please fill the form completely!!")
                }
            }
        }

   //logout
   const recruiterLogout = ()=>{
    
    sessionStorage.clear()

    navigate('/home')
  }
  return (
    <>
       <div className='nav d-flex justify-content-between pt-2  align-items-center  py-2'>
                <div className='d-flex justify-content-between'>
                    <div className='align-items-center'>
                        <Link className='logo' to={'/companydashboard'}><h3 className='ps-5'>Job<span className='head fw-bolder'>Hub</span></h3></Link>
                    </div>
                      
                    
                    <div className=" head-two">
                      <ul>
                      <li><Link style={{textDecoration:'none',color:'black',fontSize: '1.1rem'}} to={'/companydashboard'}>All Jobs</Link></li>

                          <li><Link style={{textDecoration:'none',color:'black',fontSize: '1.1rem'}} to={'/companymanage'}>Manage Posts</Link></li>
                          <li><Link style={{textDecoration:'none',color:'black',fontSize: '1.1rem'}} to={'/viewapplicants'}>View Applicants</Link></li>
                          <button style={{ background: 'none', border: 'none', fontSize: '1.1rem' }} className='me-3  ' onClick={handleShow}>
                                Profile
                            </button>
                      </ul>
                    </div>
                    
                </div>
          
                <div>

                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title style={{ color: '#6E00BE' }} className='text-center fs-3'>Profile</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body >
                                <div className='d-flex flex-column justify-contenct-center align-items-center'>


                                    <label>
                                        <input
                                            onChange={e => setJRecruiterDetails({ ...recruiterDetails, profilePic: e.target.files[0] })}
                                            type="file"
                                            style={{ display: 'none' }}
                                        />
                                        <img width={'250px'} height={'250px'} style={{ borderRadius: '50%', boxShadow: '0px 4px 6px rgba(110, 0, 190, 0.3)' }}
                                            src={
                                                preview
                                                    ? preview // If a new image is selected, show its preview
                                                    : existingProfilePic
                                                        ? `${SERVER_URL}/uploads/${existingProfilePic}` // Show existing profile picture
                                                        : profile // Default placeholder image
                                            }
                                            alt="Profile"
                                        />
                                    </label>

                                    <div></div>
                                    {/* <div className='fs-5 my-3'><span className="fw-bolder">Email </span>: {jobSeekerDetails.email}</div> */}
                                    <div className='my-3 w-75'>
                                        <FloatingLabel className='text-dark' controlId="PhoneNumber" label="Phone Number">
                                            <Form.Control  type="phone" 
                                            value={recruiterDetails.phone}
                                            onChange={e=>setJRecruiterDetails({...recruiterDetails,phone:e.target.value})}
                                            placeholder="123*****" />
                                        </FloatingLabel>
                                        <div className='my-3 d-flex  justify-content-center  align-items-center'>
                                            <button onClick={updateProfile} className='text-light p-1 rouned' style={{ background: '#6E00BE' }} >Update Profile</button>

                                        </div>
                                    </div>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                        
                    </div>
                
                <div className='pe-5  d-flex head-three'>
                
                    <div className='d-flex gap-3 justify-content-evenly'>

                            <div >
                                <img style={{ width: '33px', height: '33px', borderRadius: '50%' }}  className='img-fluid'   alt="" />
                            </div>
                           
                            
                        </div>

                        <div className='d-flex gap-3 justify-content-evenly align-items-center'>

                        <div className='py-2' style={{ borderRadius: '50%' }}>
                            <img className="img-fluid" width={'35px'} height={'35px'} src={preview ? preview : existingProfilePic ? `${SERVER_URL}/uploads/${existingProfilePic}` : profile}   style={{ borderRadius: '50%' }}  alt="" />
                        </div>
                        <div className='fw-bolder mt-2'>
                            {recruiterDetails.company}
                        </div>
                        <Link onClick={recruiterLogout} to={'/'} className='head-three-up'>LogOut</Link>
                        </div>
                   
                </div>
                
            </div>
    </>
  )
}

export default SharedHeader
