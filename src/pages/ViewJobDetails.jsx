import React, { useState } from 'react'
import Footer from '../components/Footer'
import SharedHeader from '../components/SharedHeader'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, FloatingLabel } from 'react-bootstrap'

const ViewJobDetails = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
     <SharedHeader/>
      <div style={{margin:'5rem'}}>
       <div className='d-flex flex-column justify-content-start'>
       <div className='d-flex justify-content-between align-items-center'>
            <h3>Zoho</h3>
            <img height={'100px'} src="https://tse4.mm.bing.net/th?id=OIP.6eF9vIFIzu-eVMuWWp6BAwHaE8&pid=Api&P=0&h=180" alt="" />
       </div>
        <div style={{lineHeight:'2'}}>
            <h4><span className="fw-bolder pb-3 ">Job Role:</span> <span className='fs-2'>Frontend Developer</span></h4>
            <button onClick={handleShow} style={{background:'#6E00BE'}} className='px-2 rounded shadow'><Link style={{textDecoration:'none',color:'white'}}>Apply Now</Link></button>
            <h6 className="fw-bolder pt-5" >Job Description:</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat aliquid laudantium alias, aliquam iusto at voluptates, similique obcaecati dicta possimus dolorem itaque natus minima! Dolores tempora laboriosam accusamus doloremque dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi culpa iste, rerum maiores quae, eaque dicta eos dolores ipsa a nulla hic officia beatae tempore illo mollitia ipsam animi.
            Ullam neque exercitationem et aut possimus similique tempore laudantium, alias, molestias adipisci labore eligendi quaerat iure soluta nobis. Suscipit amet quo at, in atque quas. Nulla placeat deleniti ducimus sapiente!
            Quasi similique, facilis minus temporibus suscipit debitis culpa mollitia, animi, quos iste ea totam nemo dolor odit blanditiis. Rerum omnis officia qui ut assumenda possimus laborum unde doloremque, nulla quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias laboriosam explicabo inventore consequuntur maxime tempora ratione nostrum dolorum nulla! Vel eligendi fuga voluptate veritatis dolorem voluptatibus, est repellat laudantium porro.</p>
           </div>
           <h6 className="fw-bolder" >Job Location:</h6>
            <p>Chennai</p>
            
        </div>
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
    

      <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3"  >
          <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Phone Number" className="mb-3">
          <Form.Control type="password" placeholder="Phone Number" />
      </FloatingLabel>
      <FloatingLabel  controlId="floatingResume">
          <Form.Control type="file" placeholder="Upload Resume" />
      </FloatingLabel>
  </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      <Footer/>
    </>
  )
}

export default ViewJobDetails
