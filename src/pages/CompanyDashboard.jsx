import React from 'react'
import Footer from '../components/Footer'
import SharedHeader from '../components/SharedHeader'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CompanyDashboard = () => {
  return (
  <>
  <SharedHeader insideSharedHeader={true}/>
        <div style={{margin:'5rem 6rem'}}>
          <div  className='d-flex justify-content-between mt-5 '>
            <h3>All Jobs</h3>
            <button style={{background:"#6E00BE",borderRadius:'10px'}} className='me-5 px-3'><Link style={{textDecoration:'none',color:'white'}} to={'/addjobpost'}>Add A Job Post</Link></button>
          </div>
          <div style={{width:'70%'}}>
          <Card className='mt-5'>
              <Card.Header style={{background:'#6E00BE',color:'white'}}>Zoho</Card.Header>
              <Card.Body className='d-flex justidfy-content-between'>
                <img src="https://tse4.mm.bing.net/th?id=OIP.6eF9vIFIzu-eVMuWWp6BAwHaE8&pid=Api&P=0&h=180" alt="" />
                <div>
                  <Card.Title>Frontend Developer</Card.Title>
                  <Card.Text>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur deleniti alias veniam? Qui, possimus modi temporibus voluptatum officiis praesentium? Illo itaque pariatur delectus autem aliquam sed assumenda iste odit.
                  </Card.Text>
                  <Button variant="primary"><Link style={{textDecoration:'none',color:'white'}} to={'/viewjobdetails'}>View Details</Link></Button>
                </div>
              </Card.Body>
            </Card>
            <Card className='mt-5'>
              <Card.Header style={{background:'#6E00BE',color:'white'}}>Zoho</Card.Header>
              <Card.Body className='d-flex justidfy-content-between'>
                <img src="https://tse4.mm.bing.net/th?id=OIP.6eF9vIFIzu-eVMuWWp6BAwHaE8&pid=Api&P=0&h=180" alt="" />
                <div>
                  <Card.Title>Frontend Developer</Card.Title>
                  <Card.Text>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur deleniti alias veniam? Qui, possimus modi temporibus voluptatum officiis praesentium? Illo itaque pariatur delectus autem aliquam sed assumenda iste odit.
                  </Card.Text>
                  <Button variant="primary"><Link style={{textDecoration:'none',color:'white'}} to={'/viewjobdetails'}>View Details</Link></Button>
                </div>
              </Card.Body>
            </Card>
            
          </div>
        </div>
        <Footer/>
  </>
    
  )
}

export default CompanyDashboard
