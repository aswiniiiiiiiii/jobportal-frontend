import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import FAQImage from '../assets/faqimg.jpg'; // Add your FAQ image path here
import '../styles/Home.css'
const Faq = ({ displayData }) => {
  // State to manage the currently open Accordion item
  const [activeKey, setActiveKey] = useState(null);

  const handleAccordionClick = (key) => {
    setActiveKey(key === activeKey ? null : key); // Toggle the active key (close if open)
  };

  return (
    <div id='faq' style={{ margin: '8rem 0' }}>
      <h2 className="text-center steps-heading my-5" style={{ color: '#6E00BE' }}>
        Frequently Asked Questions
      </h2>
      <div  className="row">
        <div className="col-lg-6">
          <img width={'800px'} className="img-fluid" src={FAQImage} alt="FAQ" />
        </div>
        <div  className="col-lg-6">
          <Accordion className='border' activeKey={activeKey}>
            {displayData.length > 0 ? (
              displayData.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={faq.id}>
                  <Accordion.Header  onClick={() => handleAccordionClick(index.toString())}>
                    <span style={{fontSize:'1.2rem'}}>{faq.question}</span>
                  </Accordion.Header>
                  <Accordion.Body style={{ fontSize:'1.2rem',backgroundColor: '#a649e9', color: 'white' }}>
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))
            ) : (
              <Accordion.Item eventKey="0">
                <Accordion.Header>No FAQs available</Accordion.Header>
              </Accordion.Item>
            )}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
