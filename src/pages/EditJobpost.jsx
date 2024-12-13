import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getJobDetailsContext, updateEditResponseContext } from '../contexts/ContextApi';
import Upload from '../assets/upload.jpg'
import SERVER_URL from '../services/serverURL';
import { updateJobDetailsAPI } from '../services/allAPI';

const EditJobpost = () => {
  const navigate = useNavigate()
  const {updatResponse,setUpdateResponse} = useContext(updateEditResponseContext)
    const [logoStatus, setLogoStatus] = useState(false)
    // const {getJobDetails,setGetJobDetails}= useContext(getJobDetailsContext)
    // console.log(`details ${getJobDetails}`);
    const location = useLocation();
    const [jobDetails, setJobDetails] = useState(location.state?.job || {});
    const [editDetails, setEditDetails] = useState({id:jobDetails._id, title: jobDetails.title, description: jobDetails.description, company: jobDetails.company, location: jobDetails.location, minPrice: jobDetails.minPrice, maxPrice: jobDetails.maxPrice, logo: jobDetails.logo, requirements: jobDetails.requirements, experience: jobDetails.experience, employmenttype: jobDetails.employmenttype })
    console.log(editDetails);

    const [preview,setPreview] = useState(jobDetails.logo || '')
    const [imageFileStatus,setImageFileStatus] = useState(false)
  // console.log(jobDetails);
  
   console.log(preview);
   
  
    useEffect(() => {
      // Set initial preview from existing logo
      if (jobDetails.logo) {
          setPreview(`${SERVER_URL}/uploads/${jobDetails.logo}`);
          setLogoStatus(true);
      }
  }, [jobDetails.logo]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (allowedTypes.includes(file.type)) {
            // Update both editDetails and preview
            setEditDetails({ ...editDetails, logo: file });
            setPreview(URL.createObjectURL(file));
            setLogoStatus(true);
        } else {
            // alert('Invalid file type. Please upload a JPEG or PNG image.');
            setLogoStatus(false);
        }
    }
};
  

  //handleUpdate
  // const handleUpdatejobDetails = async(e)=>{
  //   e.preventDefault()
  //   const {id,title, description, company, location, minPrice, maxPrice, logo, requirements, experience, employmenttype } = editDetails;
  //   if(title && description && company && location && minPrice && maxPrice && experience && logo && requirements && employmenttype){
  //     //api call - put(id,updateDetails)
  //     const reqBody = new FormData();
  //     reqBody.append("title", title);
  //     reqBody.append("description", description);
  //     reqBody.append("company", company);
  //     reqBody.append("location", location);
  //     reqBody.append("minPrice", minPrice);
  //     reqBody.append("maxPrice", maxPrice);
  //     reqBody.append("employmenttype", employmenttype);
  //     reqBody.append("experience", experience);
  //     reqBody.append("logo", logo);
  //     reqBody.append("requirements", requirements);
  //     preview? reqBody.append("logo",logo) : reqBody.append("logo",jobDetails.logo)
  //     const token = sessionStorage.getItem("token"); 
  //     if (token) {
  //       //api call
  //       const reqHeader = {
  //         "Content-Type": "multipart/form-data",
  //         "Authorization": `Bearer ${token}`,
  //       }
  //       try{
  //         const result = await updateJobDetailsAPI(id,reqBody,reqHeader)
  //         if(result.status==200){
  //           alert("JobDetails Updated Successfully!!")
  //           console.log("duccedd");
  //           setUpdateResponse(result)
  //         }
  //       }catch(err){
  //         console.log(err);
          
  //       }
  //   }
  // }
  // else{
  //   alert("Please fill the JobDetails!!")
  //   console.log("enter");
    
  // }
  // }
  const handleUpdatejobDetails = async (e) => {
    e.preventDefault();
    const { id, title, description, company, location, minPrice, maxPrice, logo, requirements, experience, employmenttype } = editDetails;

    if (title && description && company && location && minPrice && maxPrice && experience && logo && requirements && employmenttype) {
        const reqBody = new FormData();
        reqBody.append("title", title);
        reqBody.append("description", description);
        reqBody.append("company", company);
        reqBody.append("location", location);
        reqBody.append("minPrice", minPrice);
        reqBody.append("maxPrice", maxPrice);
        reqBody.append("employmenttype", employmenttype);
        reqBody.append("experience", experience);
        preview ? reqBody.append("logo", logo) : reqBody.append("logo", jobDetails.logo);

        const token = sessionStorage.getItem("token");
        if (token) {
            const reqHeader = {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`,
            };

            try {
                const result = await updateJobDetailsAPI(id, reqBody, reqHeader);
                if (result.status === 200) {
                    alert("JobDetails Updated Successfully!!");
                    navigate('/companymanage')
                    setUpdateResponse(result);
                }
            } catch (err) {
                console.error("Error updating job details:", err);
            }
        }
    } else {
        alert("Please fill the JobDetails!!");
        console.log("Incomplete form submission.");
    }
};


  return (
    <>
   <div className='my-5'>
        <div style={styles.container}>
          <h2 style={styles.header}>Job Registration Form</h2>
          <form style={styles.form}>
            <div style={styles.row}>
              <div style={styles.fieldContainer}>
                <label style={styles.label}>Job Title:</label>
                <input value={editDetails.title} onChange={e => setEditDetails({ ...editDetails, title: e.target.value })} type="text" name="jobTitle" style={styles.input} />
              </div>

              <div style={styles.fieldContainer}>
                <label style={styles.label}>Company Name:</label>
                <input value={editDetails.company} onChange={e => setEditDetails({ ...editDetails, company: e.target.value })} type="text" name="companyName" style={styles.input} />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.fieldContainer}>
                <label style={styles.label}>Minimum Salary:</label>
                <input value={editDetails.minPrice} onChange={e => setEditDetails({ ...editDetails, minPrice: e.target.value })} type="number" name="salary" style={styles.input} />
              </div>
              <div style={styles.fieldContainer}>
                <label style={styles.label}>Maximum Salary:</label>
                <input value={editDetails.maxPrice} onChange={e => setEditDetails({ ...editDetails, maxPrice: e.target.value })} type="number" name="salary" style={styles.input} />
              </div>

            </div>

            <div style={styles.row}>
             
              <div style={styles.fieldContainer}>
                <label style={styles.label}>Job Location:</label>
                <input value={editDetails.location} onChange={e => setEditDetails({ ...editDetails, location: e.target.value })} type="text" name="jobLocation" style={styles.input} />
              </div>
              <div style={styles.fieldContainer}>
                <label style={styles.label}>Experianec Level </label>
                <select value={jobDetails.experience} onChange={e => setJobDetails({ ...jobDetails, experience: e.target.value })} style={styles.input} name="" id="">
                  <option disabled value="">select experience level </option>
                  <option value="fresher">Fresher</option>
                  <option value="experienced">Experienced</option>
                </select>

              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.fieldContainer}>
                <label style={styles.label}>Required Skills:</label>
                <input value={editDetails.requirements} onChange={e => setEditDetails({ ...editDetails, requirements: e.target.value })} type="text" name="requiredSkills" style={styles.input} />
              </div>

              <div style={styles.fieldContainer}>
                <label style={styles.label}>Job Type:</label>
                <select value={editDetails.employmenttype} onChange={e => setEditDetails({ ...editDetails, employmenttype: e.target.value })} style={styles.input} name="" id="">
                  <option disabled value="">select Job Type</option>
                  <option value="all-type">All Type</option>
                  <option value="full-time">Full-time</option>
                  <option value="Internship">Internship</option>

                </select>

              </div>
            </div>
            <div style={styles.row}>
                        <div style={styles.singleField}>
                            <label className='pe-5' style={styles.label}>
                                Company Logo:
                                <input 
                                    style={{display:'none'}} 
                                    onChange={handleFileChange}  
                                    type="file" 
                                    name="companylogo"  
                                />
                                {preview && (
                                    <img 
                                        className='img-fluid ms-5' 
                                        width={'300px'} 
                                        height={'50px'}  
                                        src={preview} 
                                        alt="Company Logo" 
                                    />
                                )}
                            </label>
                            {!logoStatus && (
                                <div className="text-warning">
                                    Upload Only the following file types (jpeg, jpg, png) here!!
                                </div>
                            )}
                        </div>
                    </div>

            <div style={styles.singleField}>
              <label style={styles.label}>Job Description:</label>
              <textarea value={jobDetails.description} onChange={e => setJobDetails({ ...jobDetails, description: e.target.value })} name="jobDescription" style={styles.textarea} />
            </div>

            <button onClick={(e)=>handleUpdatejobDetails(e)} type="submit" style={styles.submitButton}><Link style={{ textDecoration: "none", color: 'white' }} >Update Job Details</Link></button>
          </form>
        </div>
      </div>
    </>
  )
}

const styles = {
    container: {
      maxWidth: '1000px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 0 20px rgba(142,27,213,255)'
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333'
    },
    form: {
      display: 'flex',
      flexDirection: 'column'
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '16px'
    },
    fieldContainer: {
      flex: '0 0 48%',
      display: 'flex',
      flexDirection: 'column'
    },
    singleField: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '16px'
    },
    label: {
      marginBottom: '8px',
      fontWeight: 'bold',
      color: '#555'
    },
    input: {
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc'
    },
    textarea: {
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      minHeight: '150px'
    },
    submitButton: {
      padding: '10px',
      backgroundColor: '#6E00BE',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '20px'
    }
  };
export default EditJobpost
