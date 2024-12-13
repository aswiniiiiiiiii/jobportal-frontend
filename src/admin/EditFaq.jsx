import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { updateFaqAPI } from '../services/allAPI';
import { updatedFaqContext } from '../contexts/ContextApi';

const EditFaq = ({ faqData, refreshFaqs }) => {
    const {updatedFaqData,setUpdatedFaqData} = useContext(updatedFaqContext)
  const [faq, setFaq] = useState({ question: faqData.question, answer: faqData.answer });
  const [show, setShow] = useState(false);
const [faqUpdatedDetails,setFaqUpdatedDetails] = useState("")
// console.log(faqUpdatedDetails);

    useEffect(()=>{
    handleFaq()
    },[])

  const handleClose = () => {
    setShow(false);
    // Reset the FAQ to its initial state
    setFaq({ question: faqData.question, answer: faqData.answer });
  };

  const handleShow = () => setShow(true);

  // Update FAQ
const handleFaq = async (id) => {
    if (faq.question && faq.answer) {
        try {
            const result = await updateFaqAPI(id, { question: faq.question, answer: faq.answer });
            if (result.status === 200) {
                alert("FAQ Updated Successfully!!");
                handleClose();
                // setFaqUpdatedDetails(result)
                setUpdatedFaqData(result)
                // Optionally refresh the data here
            }
        } catch (err) {
            console.error("Error updating FAQ:", err);
            alert(err.response?.data?.message || "Failed to update FAQ");
        }
    } else {
        alert("Please fill in both the question and answer!");
    }
};

  return (
    <div>
      <button style={{ border: 'none' }} onClick={handleShow}>
        <i className="fa-solid fa-edit text-success"></i>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Update Frequently Asked Questions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingTextarea" label="Question" className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Enter the question"
              value={faq.question}
              onChange={(e) => setFaq({ ...faq, question: e.target.value })}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Answer">
            <Form.Control
              as="textarea"
              placeholder="Enter the answer"
              style={{ height: '100px' }}
              value={faq.answer}
              onChange={(e) => setFaq({ ...faq, answer: e.target.value })}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
          <button className="btn btn-primary" onClick={() => handleFaq(faqData._id)}>
            Update FAQ
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditFaq;
