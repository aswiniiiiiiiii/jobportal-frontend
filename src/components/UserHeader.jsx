import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Header.css'
import logo from '../assets/suitcase.png'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import profile from '../assets/profile.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import SERVER_URL from '../services/serverURL';
import { updateJobseekerProfileAPI } from '../services/allAPI';

const UserHeader = () => {
    const [show, setShow] = useState(false);
    const [jobSeekerDetails, setJobSeekerDetails] = useState({ name: "", email: "", password: "", phone: "", profilePic: "", appliedJobs: "" })
    const [existingProfilePic, setExistingProfilePic] = useState("")
    const [preview, setPreview] = useState("")
    const [open, setOpen] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        setOpen(true)
    };
    const navigate = useNavigate()

    const userLogout = () => {
        sessionStorage.clear()
        navigate('/')
    }

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            const jobseeker = JSON.parse(sessionStorage.getItem("jobseeker"))
            setJobSeekerDetails({
                ...jobseeker, name: jobseeker.name, email: jobseeker.email, password: jobseeker.password, phone: jobseeker.phone
            })
            setExistingProfilePic(jobseeker.profilePic)
        }
    }, [open])

    useEffect(() => {
        if (jobSeekerDetails.profilePic.type == "image/png" || jobSeekerDetails.profilePic.type == "image/jpg" || jobSeekerDetails.profilePic.type == "image/jpeg") {
            if (jobSeekerDetails.profilePic) {
                setPreview(URL.createObjectURL(jobSeekerDetails.profilePic))

            }
        } else {
            setPreview("")
        }
    }, [jobSeekerDetails.profilePic])
    //updateProfil
    const updateProfile = async () => {
        const { name, email, password, phone, profilePic } = jobSeekerDetails
        if (phone || profilePic) {
            const reqBody = new FormData()
            reqBody.append("name", name)
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
                    const result = await updateJobseekerProfileAPI(reqBody, reqHeader)
                    // console.log(result);

                    if (result.status == 200) {
                        alert("User Profile Updated Successfully!!")
                        sessionStorage.setItem("jobseeker", JSON.stringify(result.data))
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

    return (
        <>
            <div className='nav d-flex justify-content-between pt-2  align-items-center  py-2'>
                <div  className='d-flex justify-content-between'>

                    <div className='align-items-center'>
                        <Link className='logo' to={'/userdashboard'}><h3 className='ps-5'>Job<span className='head fw-bolder'>Hub</span></h3></Link>
                    </div>

                    <div style={{fontSize:'1.2rem'}} className=" head-two">
                        <ul >
                            {/* <li>Jobs</li> */}
                            <button style={{ background: 'none', border: 'none', fontSize: '1.1rem' }} className='me-3 mt-2 ' onClick={handleShow}>
                                Profile
                            </button>


                        </ul>
                    </div>
                </div>



                <div className='pe-5  head-three'>

                    <div>

                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title style={{ color: '#6E00BE' }} className='text-center fs-3'>Profile</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body >
                                <div className='d-flex flex-column justify-contenct-center align-items-center'>


                                    <label>
                                        <input
                                            onChange={e => setJobSeekerDetails({ ...jobSeekerDetails, profilePic: e.target.files[0] })}
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
                                            <Form.Control value={jobSeekerDetails.phone} onChange={e => setJobSeekerDetails({ ...jobSeekerDetails, phone: e.target.value })} type="phone" placeholder="123*****" />
                                        </FloatingLabel>
                                        <div className='my-3 d-flex  justify-content-center  align-items-center'>
                                            <button className='text-light p-1 rouned' style={{ background: '#6E00BE' }} onClick={updateProfile}>Update Profile</button>

                                        </div>
                                    </div>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                        <div className='d-flex gap-3 justify-content-evenly align-items-center'>

                            <div className='py-2' style={{  borderRadius: '50%' }}>
                                <img width={"35px"} height={'35px'} className='img-fluid' style={{ borderRadius: '50%' }} src={preview ? preview : existingProfilePic ? `${SERVER_URL}/uploads/${existingProfilePic}` : profile} alt="" />
                            </div>
                            <div className='fw-bolder mt-2'>
                                {jobSeekerDetails.name}
                            </div>
                            {/* <Link style={{ textDecoration: 'none' }} className='me-3'>Profile</Link> */}
                            <div><Link onClick={userLogout} to={'/'} className='head-three-up'>LogOut</Link></div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default UserHeader
