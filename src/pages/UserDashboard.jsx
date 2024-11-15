import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const UserDashboard = () => {
  return (
    <>
    <Header insideinsideHeader={true}/>
     <div style={{padding:'0 5rem'}}> 
        <h1 style={{padding:'4rem 0'}} className='text-center'>Find Your <span style={{color:'#6E00BE'}} className='fw-bolder'>New Job</span> With Us</h1>
        <p style={{paddingLeft:'23rem'}}>Serach by Job Title</p>

        <div className='d-flex  justify-content-center'>
            <div >
              <input style={{borderRadius:'15px 0 0 15px',padding:'0.40rem 12rem'}}  type="text" className='' />
             
              <button style={{borderRadius: '0 15px 15px 0',padding:'0.40rem 1rem',background:'#6E00BE'}}><i class="fa-solid fa-magnifying-glass text-light"></i></button>
            </div>
        </div>

        <div className="row my-5">
          <div className="col-4">
            <div>
              <h5>Filter By Job Type</h5>
                <ul className=''  style={{listStyle:'none',lineHeight:'2'}}>
                  <li ><input className='me-4' type="checkbox" name="" id="" />All Type</li>
                  <li><input className='me-4'  type="checkbox" name="" id="" />Full-Time</li>
                  <li><input className='me-4'  type="checkbox" name="" id="" />Part-Time</li>
                  <li><input className='me-4'  type="checkbox" name="" id="" />Internship</li>
                </ul>
                <h5>Filter By Location</h5>
                <ul className=''  style={{listStyle:'none',lineHeight:'2'}}>
                  <li ><input className='me-4' type="checkbox" name="" id="" />Mumbai</li>
                  <li><input className='me-4'  type="checkbox" name="" id="" />Bengaluru</li>
                  <li><input className='me-4'  type="checkbox" name="" id="" />Chennai</li>
                  <li><input className='me-4'  type="checkbox" name="" id="" /></li>
                </ul>
                <h5>Filter By Job Role</h5>
                <ul className=''  style={{listStyle:'none',lineHeight:'2'}}>
                  <li ><input className='me-4' type="checkbox" name="" id="" />Frontend Developer</li>
                  <li><input className='me-4'  type="checkbox" name="" id="" />Backend Developer</li>
                  <li><input className='me-4'  type="checkbox" name="" id="" />Data Analyst</li>
                  <li><input className='me-4'  type="checkbox" name="" id="" />Internship</li>
                </ul>
            </div>
          </div>
          <div className="col-8 mt-5">
            <div>
            <Card>
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
        </div>
    </div>
     <Footer/>
    </>
  )
}

export default UserDashboard
