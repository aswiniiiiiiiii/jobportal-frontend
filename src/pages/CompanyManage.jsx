import React from 'react'
import SharedHeader from '../components/SharedHeader'
import Footer from '../components/Footer'

const CompanyManage = () => {
  return (
    <>
    <SharedHeader/>
      <div style={{margin:'5rem'}}>
      <table className='table mt-5 text-center'>
            <thead>
              <tr>
                <th>No</th>
                <th>Job Title</th>
                <th>Company Name</th>
                <th>Edit Job</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody style={{lineHeight:'3'}}>
              <tr className='my-2'>
                <td>1</td>
                <td>Python Developer</td>
                <td>Zoho</td>
                <td><i className="fa-solid fa-edit"></i></td>
                <td><i className="fa-solid fa-trash"></i></td>
              </tr>
              <tr>
                <td>2</td>
                <td>React Developer</td>
                <td>AbbaSoft</td>
                <td><i className="fa-solid fa-edit"></i></td>
                <td><i className="fa-solid fa-trash"></i></td>
              </tr>
              <tr>
                <td>3</td>
                <td>MERN Full Stack Developer</td>
                <td>MANTRA</td>
                <td><i className="fa-solid fa-edit"></i></td>
                <td><i className="fa-solid fa-trash"></i></td>
              </tr>
              <tr>
                <td>4</td>
                <td>.NEt Developer</td>
                <td>Libo</td>
                <td><i className="fa-solid fa-edit"></i></td>
                <td><i className="fa-solid fa-trash"></i></td>
              </tr>
            </tbody>
          </table>
      </div>
      <Footer/>
    </>
  )
}

export default CompanyManage
