import React, { useContext, useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/SharedHeader'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, FloatingLabel } from 'react-bootstrap'
import { viewSingleJobpostContext } from '../contexts/ContextApi';
import SERVER_URL from '../services/serverURL';
import { uploadResumeAPI } from '../services/allAPI';
import UserHeader from '../components/UserHeader';
// import Land from '../assets/land.jpg'
const ViewJobDetails = () => {
  const { viewSingleJobpost, setViewSingleJobpost } = useContext(viewSingleJobpostContext)
  // const {getJobDetails,setGetJobDetails} = useContext(getJobDetailsContext)
  // console.log(getJobDetails);
  const [applyingJobs, setApplyingJobs] = useState({ resume: "" ,jobId:""})
  const [pdfStatus, setPdfStatus] = useState(false)


  // console.log(applyingJobs);

  // onsole.log(viewSingleJobpost);

  useEffect(() => {
    if (applyingJobs.resume.type == "application/pdf") {
      //valid pdf
      setPdfStatus(true)
    } else {
      //invalid pdf
      setPdfStatus(false)
      setApplyingJobs({ ...applyingJobs, resume: "" })
    }
  }, [applyingJobs.resume])

  useEffect(() => {
    if (viewSingleJobpost?._id) {
      setApplyingJobs((prev) => ({ ...prev, jobId: viewSingleJobpost._id }));
    }
  }, [viewSingleJobpost]);

  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  //upload resume
  
  
  const applyJob = async (e) => {
    e.preventDefault();
    const { resume, jobId } = applyingJobs; // Ensure jobId is available
  
    if (resume && jobId) {
      const reqBody = new FormData();
      reqBody.append("resume", resume);
      reqBody.append("jobId", jobId); // Append jobId for backend processing
  
      const token = sessionStorage.getItem("token");
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };
        try {
          const result = await uploadResumeAPI(reqBody, reqHeader);
          // console.log("API Response:", result); // Log response for debugging
          if (result.status === 200) {
            alert(result.data.message);
            setApplyingJobs({ resume: "", jobId: "" }); // Reset state
            handleClose(); // Close the modal
          } else {
            alert(result.data.message); // Display the message from the backend
          }
        } catch (err) {
          console.error("API Error:", err);
          alert("You are already applied for this job.");
          handleClose(); // Close the modal

        }
      }
    } else {
      alert("Please upload your resume.");
    }
  };
  
  
  

  return (
    <>
      <UserHeader/>
     
      <div style={{ margin: '7rem  7rem 7rem 7rem',lineHeight:'3' }}>
        
        <div className='d-flex flex-column justify-content-start mb-5'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className="d-flex flex-column">
            <div className='my-3 fs-5'><span style={{color:'#6E00BE'}}>Job ID :</span> {viewSingleJobpost?._id}</div>

              <h4 className='mb-3'> <span style={{color:'#6E00BE'}}>Posted On</span> :{formatDate(viewSingleJobpost.createdAt)}</h4>
            </div >
            <img height={'100px'} src={`${SERVER_URL}/uploads/${viewSingleJobpost?.logo}`} alt="" />
          </div>
          
          <div style={{ lineHeight: '2' }}>
            <h3><span className="fw-bolder pb-3 " style={{color:'#6E00BE'}}>Job Role:</span> <span className='fs-3'>{viewSingleJobpost?.title}</span></h3>
           <div className='d-flex justify-content-start gap-5 align-items-center'>
              <p style={{fontSize:'1.3rem'}} className='my-3 '><span style={{color:'#6E00BE'}} className="fw-bolder " > <i className="fa-solid fa-location pe-1"></i>  Job Location: </span> {viewSingleJobpost?.location}</p>
              <p style={{fontSize:'1.3rem'}} className='my-3 '><span style={{color:'#6E00BE'}} className="fw-bolder " ><i className="fa-solid fa-dollar pe-1"></i> Salary: </span> {viewSingleJobpost?.minPrice} - {viewSingleJobpost?.maxPrice}K</p>
              <p  style={{fontSize:'1.3rem'}} className='my-3 '><span style={{color:'#6E00BE'}} className="fw-bolder " > <i className="fa-solid fa-clock pe-1"></i> Employement Type: </span> {viewSingleJobpost?.employmenttype}</p>
              <p style={{fontSize:'1.3rem'}} className='my-3 '><span style={{color:'#6E00BE'}} className="fw-bolder " ><i className="fa-solid fa-school pe-1"></i> Experience: </span> {viewSingleJobpost?.experience}</p>

           </div>
           <p style={{fontSize:'1.3rem'}} className='my-2 '><span style={{color:'#6E00BE'}} className="fw-bolder " ><i className="fa-solid fa-school pe-1"></i> Sills: </span> {viewSingleJobpost?.requirements}</p>

           <button onClick={handleShow} style={{ background: '#6E00BE' }} className='px-2 rounded shadow'><Link style={{ textDecoration: 'none', color: 'white' }}>Apply Now</Link></button>

            <h6  style={{fontSize:'1.3rem',color:'#6E00BE'}}className="fw-bolder my-3 " >Job Description: </h6>
            <p   style={{fontSize:'1.2rem',lineHeight:'2'}}> {viewSingleJobpost?.description}</p>
          </div>
          

        </div>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title> Upload Resume</Modal.Title>

          </Modal.Header>
          <Modal.Body>
            <Form>
              <label>
                <input name="resume" onChange={(e) => setApplyingJobs({ ...applyingJobs, resume: e.target.files[0] })}
 type="file" placeholder="Upload Resume" />
              </label>
              {
                !pdfStatus &&
                <div className="text-warning">Upload PDF Only!!</div>

              }
            </Form>
          </Modal.Body>
          <Modal.Footer>
           
            <button style={{ background: '#6E00BE' }} className='px-2 rounded shadow text-light' onClick={applyJob} variant="primary">
              Upload
            </button>
            
          </Modal.Footer>
        </Modal>
      </div>
      <Footer />
    </>
  )
}

export default ViewJobDetails
