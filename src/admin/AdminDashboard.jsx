// src/pages/AdminDashboard.js
import React, { useContext, useEffect,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, Paper, Typography, Button } from '@mui/material';
import { addFaqAPI, deleteFaqAPI, getAddedFaqAPI, totalUsersCountAPI } from '../services/allAPI';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import EditFaq from './EditFaq';
import { updatedFaqContext } from '../contexts/ContextApi';


const AdminDashboard = () => {
      const {updatedFaqData,setUpdatedFaqData} = useContext(updatedFaqContext)
  
  const [faq,setFaq] = useState({question:'',answer:''})
  const [faqDetails,setFaqDetails] = useState([])
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
 
  const handleClose = () => {
    setShow(false)
    setFaq({question:'',answer:''});
  }
    
   
  const handleShow = () => setShow(true);
  const [userCount,setUserCount] =  useState("")
  const navigate = useNavigate()

  // console.log(faq);
  
  useEffect(()=>{
    totalUersCount()
    getFaq()
  },[updatedFaqData])
  const adminLogout = ()=>{
    
    sessionStorage.clear()

    navigate('/admin')
  }

  //total users count
  const totalUersCount = async()=>{
    try{
      const result = await  totalUsersCountAPI()
      if(result.status==200){
        setUserCount(result.data)
        // console.log(result.data);
      }
     
      
    }catch(err){
    console.log(err);
    
  }


}

  //add faq
  const handleFaq = async () => {
    const { question, answer } = faq;

    if (question && answer) {
        try {
            // Prepare request body
            const reqBody = { question, answer };

            // Call the API with the prepared body
            const result = await addFaqAPI(reqBody);

            console.log(result);

            if (result.status == 201) {
             alert(result.data.alert);
              handleClose()
              getFaq(); 
            }
        } catch (err) {
            console.error("Error adding FAQ:", err);
        }
    } else {
        alert("Please completely fill the form!");
    }
};
  //get Faq
const getFaq = async () => {
  try {
    setIsLoading(true); // Set loading to true at the start
    const result = await getAddedFaqAPI();
    
    if (result.status === 200 && Array.isArray(result.data.faqs)) {
      setFaqDetails(result.data.faqs); // Assuming 'faqs' is the correct array
      console.log("faq", result.data.faqs);
    }
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false); // Ensure loading is set to false after completion
  }
};
  
  //delete
  const handleDelete = async(id)=>{
    try{
      const result = await deleteFaqAPI(id)
      console.log(result);
      if(result.status==200){
        alert("Are you sure to delete Faq!!")
        getFaq()
      }
      
    }catch(err){

    }
  }
  
  return (
   <div>
     <div >
        <div style={{ padding: '20px' ,background:'#6E00BE',color:'white'}}>
          <Typography className='d-flex justify-content-between' variant="h4" gutterBottom>
            Admin Dashboard
            <div>
              <Button className='text-light' onClick={adminLogout}>Logout<i className="fa-solid fa-right-from-bracket ps-2"></i></Button>
            </div>
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', backgroundColor: '#e3f2fd' }}>
                <Typography variant="h6">Total Companies</Typography>
                <Typography variant="h4">{userCount.totalRecruiters}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', backgroundColor: '#e8f5e9' }}>
                <Typography variant="h6">Total Job Seekers</Typography>
                <Typography variant="h4">{userCount.totalJobSeekers}</Typography>
              </Paper>
            </Grid>
          </Grid>
          
        </div>
     </div>
     <div className='m-5 ' >
     <Button className="btn bg-primary text-light " onClick={handleShow}>
        Add FAQ
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Add Frequently Asked Questions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingTextarea"
        label="Question"
        className="mb-3"
      >
        <Form.Control onChange={(e)=>setFaq({...faq,question:e.target.value})} value={faq.question} as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Answer">
        <Form.Control
          as="textarea"
          placeholder="Answer"
          style={{ height: '100px' }}
          value={faq.answer}
          onChange={(e)=>setFaq({...faq,answer:e.target.value})}
        />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-primary' onClick={handleClose}>
            Close
          </button>
          <button  className='btn btn-primary' variant="primary" onClick={handleFaq}>
            Add Faq
          </button>
        </Modal.Footer>
      </Modal>

      
      <table className='table shadow p-5 my-5'>
  <thead>
    <tr>
      <th>No</th>
      <th>Question</th>
      <th>Answer</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
  {isLoading ? (
    <tr>
      <td colSpan="5" className="text-center fw-bolder text-primary p-5 fs-4">
        Loading FAQs...
      </td>
    </tr>
  ) : faqDetails.length > 0 ? (
    faqDetails.map((faq, index) => (
      <tr key={faq._id}>
        <td>{index + 1}</td>
        <td>{faq.question}</td>
        <td>{faq.answer}</td>
        <td>
          <EditFaq faqData={faq}/>
          {/* <div className='btn' onClick={()=>handleUpdate(faq._id)}><i  className="fa-solid fa-edit text-success"></i></div> */}
        </td>
        <td>
          <div className='btn' onClick={()=>handleDelete(faq._id)}><i className="fa-solid fa-trash text-danger"></i></div>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5" className="text-center fw-bolder text-danger p-5 fs-4">
        No FAQ added yet!
      </td>
    </tr>
  )}
</tbody>

      </table>



   
   
     </div>
   </div>
  );
};

export default AdminDashboard;

