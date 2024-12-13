import React, { useContext, useEffect, useState } from 'react'
import SharedHeader from '../components/SharedHeader'
import Footer from '../components/Footer'
import { getJobDetailsContext } from '../contexts/ContextApi'
import { getTableJobpostAPI, deleteJobpostAPI } from '../services/allAPI'
import { useNavigate } from 'react-router-dom'

const CompanyManage = () => {
  const navigate = useNavigate()
  // const {getJobDetails,setGetJobDetails}=useContext(getJobDetailsContext)
  // console.log(getJobDetails)
  const [displayData, setDisplayData] = useState("")
  const [searchKey, setSearchKey] = useState("")
  // console.log(displayData);

  useEffect(() => {
    displayjobposts()
  }, [searchKey])


  // const [getSharedDetails,setSharedDetails] = useState("")
  // setSharedDetails(getJobDetails)
  const displayjobposts = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`,

      }
      try {
        const result = await getTableJobpostAPI(searchKey, reqHeader)
        // console.log(result);

        if (result.status == 200) {
          setDisplayData(result.data)

        }
      } catch (err) {
        console.log(err);

      }
    }
  }

  //editjobpost
  const handleEditJobpost = (job) => {
    navigate('/editjobpost', { state: { job } });
  };

  //delete Jobpost
  const handleEDeleteJobpost = async (id) => {
    const token = sessionStorage.getItem("token")
    if (token) {
      //api call
      const reqHeader = {
        "Authorization": `Bearer ${token}`,

      }
      try {
        await deleteJobpostAPI(id, reqHeader)
        alert("Are you Sure to delete This JobPost")
        displayjobposts()
      } catch (err) {
        console.log(err);

      }
    }
  }


  return (
    <>
      <SharedHeader />
      <div style={{ margin: '5rem' }}>
        <div className="container">
          <div style={{ fontSize: '2.5rem' }} className='fw-bolder my-2'>Search Job By <span style={{ color: "#6E00BE" }}>Title</span></div>
          <div className='d-flex mb-5'>
            <input onChange={e => setSearchKey(e.target.value)} placeholder='Search Job By Title' type="text" className="form-control shadow py-2 w-75" />
            <div className='d-flex justify-content-center px-3' style={{ background: "#6E00BE" }} ><i className="fa-solid fa-search text-light py-3"></i></div>
          </div>
        </div>
        <table style={{ fontSize: '1.2rem' }} className='table mt-5 pt-5 text-center shadow'>
          <thead style={{ backgroundColor: '#6E00BE' }}>
            <tr  >
              <th>No</th>
              <th>Job Title</th>
              <th>Company Name</th>
              <th>Edit Job</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody style={{ lineHeight: '3' }}>



            {
              displayData.length > 0 ?
                displayData.map((job, index) => (
                  <tr key={job?._id}>
                    <td>{index + 1}</td>
                    <td>{job?.title}</td>
                    <td>{job?.company}</td>
                    <td onClick={() => handleEditJobpost(job)}><i className="fa-solid fa-edit text-success"></i></td>
                    <td onClick={() => handleEDeleteJobpost(job?._id)}><i className="fa-solid fa-trash text-danger"></i></td>
                  </tr>
                ))
                :
                <tr>
                  <td className='fw-bolder text-center fs-3 text-danger'>
                    No job posted yet</td>
                </tr>
            }

          </tbody>
        </table>
      </div>
      
      <Footer />
    </>
  )
}

export default CompanyManage
