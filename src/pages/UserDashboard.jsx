import React, { useContext, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import UserHeader from '../components/UserHeader'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import { filterJobAPI, viewJobsJobseekerAPI, viewSinglePostAPI } from '../services/allAPI';
import SERVER_URL from '../services/serverURL';
import Jobnotfound from './Jobnotfound';
import { viewSingleJobpostContext } from '../contexts/ContextApi';
// import '../styles/UserDashboard.css'
import NORESULT from '../assets/noresult.png'
const UserDashboard = () => {
  const {viewSingleJobpost,setViewSingleJobpost} =useContext(viewSingleJobpostContext)
  const [loading,setLoading] = useState(false)
  const [viewDetails, setViewDetails] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [location, setLocation] = useState('');
  const [employement, setEmployement] = useState('');
  const [experienceKey, setExperienceKey] = useState('');
  // console.log(experienceKey);
  
   /// Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 5;
    const totalPage = Math.ceil((viewDetails?.length || 0) / postPerPage);
  
    const currentPageFirstPostIndex = (currentPage - 1) * postPerPage;
    const currentPageLastPostIndex = currentPage * postPerPage;
    const visiblePostCards = viewDetails?.slice(
      currentPageFirstPostIndex,
      currentPageLastPostIndex
    );
  const navigate = useNavigate()
  useEffect(()=>{
    viewPostByJobseeker()
  },[searchKey,location])

  useEffect(()=>{
    filterJob()
  },[employement,experienceKey])

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
 const  viewPostByJobseeker = async()=>{
    const token= sessionStorage.getItem("token")
    if(token){
      const reqHeader={
        "Authorization": `Bearer ${token}`,
  
      }
      // console.log(token);
      
      try{
        // const result = await viewJobsJobseekerAPI(searchKey,location,reqHeader)
        const result = await viewJobsJobseekerAPI(searchKey, location, reqHeader);

        console.log(result);
        if(result.status==200){
          setViewDetails(result.data)
          setLoading(true)
        }
        
      }catch(err){
        console.log(err);
        
      }
    }
  }

  //filter-job
  const filterJob = async()=>{
    const token= sessionStorage.getItem("token")
    if(token){
      const reqHeader={
        "Authorization": `Bearer ${token}`,
  
      }
      // console.log(token);
      
      try{
        // const result = await viewJobsJobseekerAPI(searchKey,location,reqHeader)
        const result = await filterJobAPI(employement, experienceKey, reqHeader);

        // console.log(result);
        if(result.status==200){
          setViewDetails(result.data)
        }
        
      }catch(err){
        console.log(err);
        
      }
    }
  }
  const viewSinglejObDetails =async(id)=>{
    // navigate('/viewjobdetails')
    const token= sessionStorage.getItem("token")
      if(token){
        //api call
        const reqHeader={
          "Authorization": `Bearer ${token}`,
    
        }
        try{
          const result = await viewSinglePostAPI(id,reqHeader)
          console.log(result);
          if(result.status==200){
            setViewSingleJobpost(result.data)
            navigate('/viewjobdetails')

          }
          
        }catch(err){
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

  //radio
  const handleRadioChange = (setter, value) => {
    setter(value);
  };
  
  
  return (
    <>
      <UserHeader/>
     <div style={{padding:'0 5rem'}}> 
        <h1 style={{padding:'4rem 0',fontSize:'3rem'}} className='text-center'>Find Your <span style={{color:'#6E00BE'}} className='fw-bolder'>New Job</span> With Us</h1>
        <p style={{paddingLeft:'17rem',fontSize:'2.8rem'}} className='fs-3'>Search by Job <span style={{color:'#6E00BE'}}>Title</span> and <span style={{color:'#6E00BE'}}>Location</span></p>

        <div className='d-flex  justify-content-center'>
            <div className='d-flex  justify-content-center' >
            <input onChange={e=>setSearchKey(e.target.value)} style={{borderRadius:'15px 0 0 15px',padding:'0.62rem 12rem  0.62rem 0.2rem'}} placeholder='Eg:Full stack Developer'  type="text"  />
              <input onChange={e=>setLocation(e.target.value)} style={{borderRadius:'0px 0 0 0px',padding:'0.50rem 12rem  0.50rem 0.2rem'}}  placeholder='Eg:Bengaluru' type="text" />
             
              <button style={{borderRadius: '0 15px 15px 0',padding:'0.40rem 1rem',background:'#6E00BE'}}><i class="fa-solid fa-magnifying-glass text-light"></i></button>
            </div>
        </div>

        <div className="row  my-5">
         
           <div className="col-4 p-5 " style={{fontSize:'1.2rem'}}>
          <h5 className='fw-bolder'>Filter By Job Type</h5>
          <div className="d-flex flex-column mt-3">
            <label  className='sidebar-label-contanier mt-2' >
              <input  type="radio" name="employement" onChange={() => handleRadioChange(setEmployement, '')} /><span className='checkmark ms-2'></span> All
            </label>
            <label  className='sidebar-label-contanier mt-2' >
              <input type="radio" name="employement" onChange={() => handleRadioChange(setEmployement, 'full-time')} /><span className='checkmark ms-2'></span> Full-Time
            </label>
            <label  className='sidebar-label-contanier mt-2' >
              <input type="radio" name="employement" onChange={() => handleRadioChange(setEmployement, 'internship')} /> <span className='checkmark ms-2'></span>Internship
            </label>
          </div>
          <h5 className='mt-5 fw-bolder'>Filter By Experience</h5>
          <div className="d-flex flex-column mt-3">
            <label  className='sidebar-label-contanier mt-2' >
              <input  type="radio" name="experienceKey" onChange={() => handleRadioChange(setExperienceKey, '')} /><span className='checkmark ms-2'></span> All
            </label>
            <label  className='sidebar-label-contanier mt-2' >
              <input type="radio" name="experienceKey" onChange={() => handleRadioChange(setExperienceKey, 'fresher')} /><span className='checkmark ms-2'></span> Fresher
            </label>
            <label  className='sidebar-label-contanier mt-2' >
              <input type="radio" name="experienceKey" onChange={() => handleRadioChange(setExperienceKey, 'experienced')} /><span className='checkmark ms-2'></span> Experienced
            </label>
          </div>
          <h5 className=' mt-5 fw-bolder'>Filter By Location</h5>
          <div className="d-flex flex-column mt-3">
            <label  className='sidebar-label-contanier mt-2' >
              <input  type="radio" name="location" onChange={() => handleRadioChange(setLocation, '')} /> <span className='checkmark ms-2'></span>All
            </label >
            <label  className='sidebar-label-contanier mt-2' >
              <input type="radio" name="location" onChange={() => handleRadioChange(setLocation, 'Chennai')} /> <span className='checkmark ms-2'></span>Chennai
            </label >
            <label  className='sidebar-label-contanier mt-2' >
              <input type="radio" name="location" onChange={() => handleRadioChange(setLocation, 'Mumbai')} /> <span className='checkmark ms-2'></span>Mumbai
            </label>
            <label  className='sidebar-label-contanier mt-2' >
              <input type="radio" name="location" onChange={() => handleRadioChange(setLocation, 'Bengaluru')} /> <span className='checkmark ms-2'></span>Bengaluru
            </label>
            <label  className='sidebar-label-contanier mt-2' >
              <input type="radio" name="location" onChange={() => handleRadioChange(setLocation, 'Ernakulam')} /> <span className='checkmark ms-2'></span>Ernakulam
            </label>
          </div>
          <h5 className=' mt-5 fw-bolder'>Filter By Job Role</h5>
          <div className="d-flex flex-column mt-3">
            <label  className='sidebar-label-contanier mt-2' >
              <input type="radio" name="jobRole" onChange={() => handleRadioChange(setSearchKey, '')} /><span className='checkmark ms-2'></span> All
            </label>
            <label  className='sidebar-label-contanier mt-2' >
              <input type="radio" name="jobRole" onChange={() => handleRadioChange(setSearchKey, 'Python Full-Stack Developer')} /><span className='checkmark ms-2'></span> Python Full-Stack Developer
            </label>
            <label  className='sidebar-label-contanier mt-2' >
              <input type="radio" name="jobRole" onChange={() => handleRadioChange(setSearchKey, 'MEARN Full-Stack Developer')} /><span className='checkmark ms-2'></span> MEARN Full-Stack Developer
            </label>
            <label  className='sidebar-label-contanier mt-2' >
              <input type="radio" name="jobRole" onChange={() => handleRadioChange(setSearchKey, 'Data Analyst')} /><span className='checkmark ms-2'></span> Data Analyst
            </label>
            <label  className='sidebar-label-contanier mt-2' >
              <input type="radio" name="jobRole" onChange={() => handleRadioChange(setSearchKey, 'Java Developer')} /><span className='checkmark ms-2'></span> Java  Developer
            </label>
          </div>
        </div>
          <div style={{paddingRight:'5rem'}} className="col-8 mt-5">
            
            
          

              <>
                <div>
              <div className='fs-5 fw-bolder'>{viewDetails.length} Results Found</div>
              
              {
                
                viewDetails.length>0 ?
                visiblePostCards.map(post=>(
                  <Card className='mt-5'>
                <Card.Header style={{background:'#6E00BE',color:'white'}}>Posted Date : {formatDate(post.createdAt)}</Card.Header>
                <Card.Body style={{fontSize:'1.1rem'}} className='d-flex justidfy-content-between '>
                  <div style={{width:'700px'}}><img width={'100%'} style={{margin:'5rem'}} className='mx-4 img-fluid d-flex justify-content-center align-items-center'  src={`${SERVER_URL}/uploads/${post.logo}`} alt="compnay logo" /></div>
                  <div style={{padding:'0px 0px  0px 3rem'}}>
                  <div className='fs-5 '>{post.company}</div>
  
                    <Card.Title className='fw-bolder'>{post.title}</Card.Title>
                    <Card.Text>
                      <div className='d-flex gap-4'>
                         <div> <i className="fa-solid fa-location pe-1"></i> {post.location}</div>
                         <div> <i className="fa-solid fa-clock pe-1"></i> {post.employmenttype}</div>
                         <div> <i className="fa-solid fa-dollar pe-1"></i> {post.minPrice}-{post.maxPrice}k</div>
                         <div> <i className="fa-solid fa-school pe-1"></i> {post.experience}</div>
  
  
                      </div>
                       {post.description.slice(0,250)}...
                     </Card.Text>
                     <Button onClick={()=>viewSinglejObDetails(post?._id)} variant="primary">View Details</Button>
  
                       </div>
                   </Card.Body>
                   </Card>
       
                ))
                :
                <Jobnotfound/>
              }
              
              </div>
              </>
          
          </div>
        </div>
    </div>
    <div className="text-center text-xl font-bold my-5">
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
     <Footer/>
    </>
  )
}

export default UserDashboard
