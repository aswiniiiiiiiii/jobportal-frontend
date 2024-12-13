import React, { useContext, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import SharedHeader from '../components/SharedHeader'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { getJobpostAPI } from '../services/allAPI';
import SERVER_URL from '../services/serverURL';
import ViewJobDetails from './ViewJobDetails';
import { getJobDetailsContext, updateEditResponseContext } from '../contexts/ContextApi';
import Jobnotfound from './Jobnotfound';

const CompanyDashboard = () => {

  const [open, setOpen] = useState(false);
 
  const { updatResponse, setUpdateResponse } = useContext(updateEditResponseContext)
  const { getJobDetails, setGetJobDetails } = useContext(getJobDetailsContext)
  const [searchKey, setSearchKey] = useState("")
  const [allJobpost, setAlljobpost] = useState()
  /// Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 6;
  const totalPage = Math.ceil((getJobDetails?.length || 0) / postPerPage);

  const currentPageFirstPostIndex = (currentPage - 1) * postPerPage;
  const currentPageLastPostIndex = currentPage * postPerPage;
  const visiblePostCards = getJobDetails?.slice(
    currentPageFirstPostIndex,
    currentPageLastPostIndex
  );
  // console.log(allJobpost);
  const [recruiterDetails, setRecruiterDetails] = useState({ company: "", email: "", password: "", phone: "", jobsPosted: "", profilePic: "" })

  useEffect(() => {
    getAlljobposts()
  }, [searchKey, updatResponse])

  //getalljobposts
  const getAlljobposts = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`,

      }
      try {
        const result = await getJobpostAPI(searchKey, reqHeader)
        if (result.status == 200) {
          setAlljobpost(result.data)
          setGetJobDetails(result.data)
        }
      } catch (err) {
        console.log(err);

      }
    }
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
 
  const navigateToNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const navigateToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <SharedHeader />
      <div  >
        <div  style={{padding:'7rem 0 0 0'}} className='text-center '>
          <h1 style={{fontSize:'3rem'}}>Hire <span className='fw-bolder' style={{color:'#6E00BE'}}>Smarter</span> and  Scale Faster</h1>
  
        </div>
      </div>
      <div  className='d-flex flex-column container  ' >
        <div className="row ">
          <div className="col-lg-12  ">
            <div>
              <div className='fs-2 fw-bolder my-2'>Search Job By <span style={{ color: "#6E00BE" }}>Title</span></div>
              <div className='d-flex '>
                <input style={{ border: '1px solid ' }} onChange={e => setSearchKey(e.target.value)} placeholder='Search Job By Title' type="text" className="form-control w-75 py-2  " />
                <div className='d-flex justify-content-center px-3' style={{ background: "#6E00BE" }}><i className="fa-solid fa-search text-light py-3"></i></div>
              </div>
              <div className='d-flex justify-content-between mt-5 '>
            <h3>All Jobs</h3>
            <div><button style={{ background: "#6E00BE", borderRadius: '10px', }} className=' p-2'><Link style={{ textDecoration: 'none', color: 'white' }} to={'/addjobpost'}>Add A Job Post</Link></button>
            </div>

          </div>
            </div>

             <div className="d-flex flex-wrap gap-3">
            {allJobpost?.length > 0 ? (
              visiblePostCards.map((job) => (
                <div
                  key={job._id} // Ensure a unique key for each item
                  style={{ flex: "0 0 calc(50% - 1.5rem)" }} // 50% width for two cards in a row
                >
                  <Card
                    style={{ fontSize: "1.2rem", height: "350px" }}
                    className="mt-5"
                  >
                    <Card.Header style={{ background: "#6E00BE", color: "white" }}>
                      Posted Date : {formatDate(job.createdAt)}
                    </Card.Header>
                    <Card.Body className="d-flex gap-2  justify-content-between">
                      <div className='d-flex justify-content-center align-items-center' style={{width:'400px'}}>
                        <img
                          className="mx-4 img-fluid"
                          width={"100%"}
                          src={`${SERVER_URL}/uploads/${job.logo}`}
                          alt="company logo"
                        />
                      </div>
                      <div className='ps-4'>
                        <div className="fs-5">{job.company}</div>
                        <Card.Title className="fw-bolder">{job.title}</Card.Title>
                        <Card.Text>
                          <div className="d-flex flex-wrap gap-2">
                            <div className='d-flex'>
                              <i className="fa-solid fa-location pe-1"></i> {job.location}
                            </div>
                            <div className='d-flex'>
                              <i className="fa-solid fa-clock pe-1"></i> {job.employmenttype}
                            </div>
                            <div className='d-flex'>
                              <i className="fa-solid fa-dollar pe-1"></i>{" "}
                              {job.minPrice}-{job.maxPrice}k
                            </div>
                            <div className='d-flex'>
                              <i className="fa-solid fa-school pe-1"></i> {job.experience}
                            </div>
                          </div>
                          <span className='fw-bolder'>Description : </span>
                          {job.description.slice(0, 150)}...
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : (
              
              <Jobnotfound/>
            )}
          </div>

          </div>
         
        </div>

      </div>

      <div style={{margin:'5rem'}} className="text-center text-xl font-bold my-5">
        <span onClick={navigateToPrevPage} style={{ cursor: "pointer" }}>
          <i className="fa-solid fa-backward me-5"></i>
        </span>
        <span>
          {currentPage} of {totalPage}
        </span>
        <span onClick={navigateToNextPage} style={{ cursor: "pointer" }}>
          <i className="fa-solid fa-forward ms-5"></i>
        </span>
      </div>
      <Footer />
    </>

  )
}

export default CompanyDashboard
