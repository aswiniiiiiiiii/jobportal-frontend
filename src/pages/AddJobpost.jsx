import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { addJobAPI } from '../services/allAPI';
import Upload from '../assets/upload.jpg'
const AddJobpost = () => {
  const [jobDetails, setJobDetails] = useState({ title: "", description: "", company: "", location: "", minPrice: "", maxPrice: "", logo: "", requirements: "", experience: "", employmenttype: "" })
  const [preview,setPreview] = useState("")

  console.log(jobDetails);
  const [logoStatus, setLogoStatus] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (jobDetails.logo.type == "image/png" || jobDetails.logo.type == "image/jpg" || jobDetails.logo.type == "image/jpeg") {
      //valid image
      setLogoStatus(true)
      setPreview(URL.createObjectURL(jobDetails.logo))

    } else {
      //invalid image
      setLogoStatus(false)
      setPreview("")
      setJobDetails({ ...jobDetails, logo: "" })
    }
  }, [jobDetails.logo])

  //addjobpost
  // const addJobPosts = async(e) => {
  //   e.preventDefault()
  //    const {title,description,company,location,minPrice,maxPrice,logo,requirements,experience,employmenttype} = jobDetails
  //   if(title && description && company && location && minPrice && maxPrice && experience && logo && requirements && employmenttype){
  //   //  alert("call addAPI")
  //   const reqBody = new FormData()
  //   reqBody.append("title",title)
  //   reqBody.append("description",description)
  //   reqBody.append("company",company)
  //   reqBody.append("location",location)
  //   reqBody.append("minPrice",minPrice)
  //   reqBody.append("maxPrice",maxPrice)
  //   reqBody.append("employmenttype",employmenttype)
  //   reqBody.append("experience",experience)
  //   reqBody.append("logo",logo)
  //   reqBody.append("requirements",requirements)
  //   const token = sessionStorage.getItem("token")
  //   if(token){
  //     const reqHeader ={
  //       "Content-Type" :"multipart/form-data",
  //       "Authorization":`Bearer ${token}` 
  //     }
  //     //make api call
  //     try{
  //       const result = await addJobAPI(reqBody,reqHeader)
  //       console.log(result);
  //       if(result.status==200){
  //         alert("JobPost Added Successfully!!")
  //         setJobDetails({title: "", description: "", company: "", location: "", minPrice: "",maxPrice:"", logo: "", requirements: "",experience:"", employmenttype: "" })
  //       }
  //       else{

  //         alert(result.response.data)

  //       }
  //     }catch(err){
  //       console.log(err);

  //     }
  //   }

  //   }else{
  //     alert("Please fill the Job Details Completely!!")
  //   }
  // }
  const addJobPosts = async (e) => {
    e.preventDefault();
    const { title, description, company, location, minPrice, maxPrice, logo, requirements, experience, employmenttype } = jobDetails;

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
      reqBody.append("logo", logo);
      reqBody.append("requirements", requirements);

      const token = sessionStorage.getItem("token");
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        };

        try {
          const result = await addJobAPI(reqBody, reqHeader);
          console.log("API Response:", result); // Log response for debugging

          if (result.status === 201) { // Ensure the status code matches successful creation
            // alert("Job successfully added"); // Display success alert
            alert(result.data.alert)
            navigate('/companyDashboard')
            setJobDetails({ title: "", description: "", company: "", location: "", minPrice: "", maxPrice: "", logo: "", requirements: "", experience: "", employmenttype: "" });
          }
          else{
            alert(result.response.data)

          }
        } catch (err) {
          console.error(err);
        }
      }
    }
     else {
      alert("Please fill the Job Details Completely!!");
    }
  };



  // const addJobPosts = async (e) => {
  //   e.preventDefault();
  //   const { title, description, company, location, minPrice, maxPrice, logo, requirements, experience, employmenttype } = jobDetails;

  //   if (title && description && company && location && minPrice && maxPrice && experience && logo && requirements && employmenttype) {
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

  //     const token = sessionStorage.getItem("token");
  //     if (token) {
  //       const reqHeader = {
  //         "Content-Type": "multipart/form-data",
  //         "Authorization": `Bearer ${token}`,
  //       };

  //       try {
  //         // Make API call
  //         const result = await addJobAPI(reqBody, reqHeader);
  //         console.log("API Response:", result);  // Log the full response for inspection

  //         // Check if response structure is correct
  //         if (result.status == 200) {
  //           alert("JobPost Added Successfully!!");
  //           setJobDetails({ title: "", description: "", company: "", location: "", minPrice: "", maxPrice: "", logo: "", requirements: "", experience: "", employmenttype: "" });
  //           console.log("jobpost addeded");

  //         } else {
  //           // If response is not successful, display the error message
  //           const errmsg = result?.response?.data || "An error occurred while adding the job post";
  //           console.log("Error Message:", errmsg);
  //           alert(errmsg);
  //         }
  //       } catch (err) {
  //         console.log("Error occurred while adding job:", err);
  //         alert("An error occurred while adding the job post");
  //       }
  //     }
  //   } else {
  //     alert("Please fill the Job Details Completely!!");
  //   }
  // };


  return (
    <>
      <div className='my-5'>
        <div style={styles.container}>
          <h2 style={styles.header}>Job Registration Form</h2>
          <form style={styles.form}>
            <div style={styles.row}>
              <div style={styles.fieldContainer}>
                <label style={styles.label}>Job Title:</label>
                <input value={jobDetails.title} onChange={e => setJobDetails({ ...jobDetails, title: e.target.value })} type="text" name="jobTitle" style={styles.input} />
              </div>

              <div style={styles.fieldContainer}>
                <label style={styles.label}>Company Name:</label>
                <input value={jobDetails.company} onChange={e => setJobDetails({ ...jobDetails, company: e.target.value })} type="text" name="companyName" style={styles.input} />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.fieldContainer}>
                <label style={styles.label}>Minimum Salary:</label>
                <input value={jobDetails.minPrice} onChange={e => setJobDetails({ ...jobDetails, minPrice: e.target.value })} type="number" name="salary" style={styles.input} />
              </div>
              <div style={styles.fieldContainer}>
                <label style={styles.label}>Maximum Salary:</label>
                <input value={jobDetails.maxPrice} onChange={e => setJobDetails({ ...jobDetails, maxPrice: e.target.value })} type="number" name="salary" style={styles.input} />
              </div>

            </div>

            <div style={styles.row}>
             
              <div style={styles.fieldContainer}>
                <label style={styles.label}>Job Location:</label>
                <input value={jobDetails.location} onChange={e => setJobDetails({ ...jobDetails, location: e.target.value })} type="text" name="jobLocation" style={styles.input} />
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
                <input value={jobDetails.requirements} onChange={e => setJobDetails({ ...jobDetails, requirements: e.target.value })} type="text" name="requiredSkills" style={styles.input} />
              </div>

              <div style={styles.fieldContainer}>
                <label style={styles.label}>Job Type:</label>
                <select value={jobDetails.employmenttype} onChange={e => setJobDetails({ ...jobDetails, employmenttype: e.target.value })} style={styles.input} name="" id="">
                  <option disabled value="">select Job Type</option>
                  {/* <option value="all-type">All Type</option> */}
                  <option value="full-time">Full-time</option>
                  <option value="Internship">Internship</option>

                </select>

              </div>
            </div>
            <div style={styles.row}>
              <div style={styles.singleField}>
                <label className='pe-5' style={styles.label}>Company Logo:
                <input style={{display:'none'}} onChange={e => setJobDetails({ ...jobDetails, logo: e.target.files[0] })} type="file" name="companylogo"  />
                <img className='img-fluid ms-5' width={'300px'} height={'50px'}  src={preview?preview:Upload} alt="" />
                </label>
                {
                  !logoStatus &&
                  <div className="text-warning">Upload Only the following file types(jpeg,jpg,png)here!!</div>

                }
              </div>

            </div>

            <div style={styles.singleField}>
              <label style={styles.label}>Job Description:</label>
              <textarea value={jobDetails.description} onChange={e => setJobDetails({ ...jobDetails, description: e.target.value })} name="jobDescription" style={styles.textarea} />
            </div>

            <button onClick={addJobPosts} type="submit" style={styles.submitButton}><Link style={{ textDecoration: "none", color: 'white' }} >Register Job</Link></button>
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
    boxShadow: '0 0 20px rgba(142,27,213,255)',
    fontSize:'1.2rem'
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

export default AddJobpost
