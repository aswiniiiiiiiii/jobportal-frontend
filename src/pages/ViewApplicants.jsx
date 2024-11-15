import React from 'react'
import SharedHeader from '../components/SharedHeader'
import Footer from '../components/Footer'

const ViewApplicants = () => {
  return (
    <>
            <SharedHeader/>
            <div style={{margin:'5rem'}}>
            <table className='table mt-5 text-center'>
            <thead>
              <tr>
                <th>No</th>
                <th>Applicant Email</th>
                <th>Applicant Phnno</th>
                <th>Resume</th>
              </tr>
            </thead>
            <tbody style={{lineHeight:'3'}}>
              <tr className='my-2'>
                <td>1</td>
                <td>Anu123@gamil.com</td>
                <td>7865423567</td>
                <td>file</td>
              </tr>
              <tr className='my-2'>
                <td>1</td>
                <td>Anu123@gamil.com</td>
                <td>7865423567</td>
                <td>file</td>
              </tr><tr className='my-2'>
                <td>1</td>
                <td>Anu123@gamil.com</td>
                <td>7865423567</td>
                <td>file</td>
              </tr><tr className='my-2'>
                <td>1</td>
                <td>Anu123@gamil.com</td>
                <td>7865423567</td>
                <td>file</td>
              </tr>
            </tbody>
          </table>
            </div>
        <Footer/>
     
    </>
  )
}

export default ViewApplicants
