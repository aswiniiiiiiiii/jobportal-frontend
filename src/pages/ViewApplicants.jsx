import React, { useEffect, useState } from 'react';
import SharedHeader from '../components/SharedHeader';
import Footer from '../components/Footer';
import { viewApplicantsAPI } from '../services/allAPI';
import SERVER_URL from '../services/serverURL';

const ViewApplicants = () => {
  const [applicantData, setApplicantData] = useState([]); // Initialize as empty array
  console.log(applicantData); // Debugging line to inspect the data

  useEffect(() => {
    viewApplicants();
  }, []);

  // const viewApplicants = async () => {
  //   const token = sessionStorage.getItem('token');
  //   if (token) {
  //     const reqHeader = {
  //       "Authorization": `Bearer ${token}`,
  //     };
  //     try {
  //       const result = await viewApplicantsAPI(reqHeader);
  //       console.log(`appliedresult :`,result.data); // Check the structure of the API response
  //       if (result.status === 200 && Array.isArray(result.data)) {
  //         setApplicantData(result.data); // Update state with the fetched applicant dat
  //         console.log(`applid:`,result.data );
          
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // };

  const viewApplicants = async () => {
    const token = sessionStorage.getItem('token');
    console.log('Token:', token); // Debug token
    if (token) {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const result = await viewApplicantsAPI(reqHeader);
        console.log('API Response:', result); // Inspect the full API response
        if (result.status === 200 && Array.isArray(result.data.data)) {
          setApplicantData(result.data.data); // Correctly set the nested data
          console.log('Set applicantData:', result.data.data); // Confirm state update
        } else {
          console.error('Unexpected API response format:', result.data);
        }
      } catch (err) {
        console.error('Error fetching applicants:', err);
      }
    } else {
      console.error('No token found in sessionStorage');
    }
  };
  
  
  return (
    <>
      <SharedHeader />
      <div style={{ margin: '5rem' }}>
        <h1 className='my-5 text-center fw-bolder'>Applied <span style={{color:'#6E00BE'}}>Candidates</span> Details</h1>
        <table style={{fontSize:'1.2rem'}} className="table my-5 shadow text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>JobPost Id</th>
              <th>JobPost Name</th>
              <th>Applicant Name</th>
              <th>Applicant Email</th>
              <th>Applied Date</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody style={{ lineHeight: '3' }}>
  {applicantData.length > 0 ? (
    applicantData.map((applied, index) => (
      <tr key={applied.jobId || index}> {/* Use a unique field like jobId */}
        <td>{index + 1}</td>
        <td>{applied.jobId}</td>
        <td>{applied.jobTitle}</td>
        <td>{applied.applicantName}</td>
        <td>{applied.applicantEmail}</td>
        <td>{new Date(applied.appliedDate).toLocaleDateString()}</td>
        <td>
          <a href={`${SERVER_URL}/uploads/${applied.resume}`} target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7" className="text-center text-danger fs-4">
        No Applicants Applied For Any Jobs
      </td>
    </tr>
  )}
</tbody>

        </table>
      </div>
      <Footer />
    </>
  );
};

export default ViewApplicants;
