import React from 'react'
import { Link } from 'react-router-dom';

const AddJobpost = () => {
    return (
        <>
            <div className='my-5'>
            <div style={styles.container}>
      <h2 style={styles.header}>Job Registration Form</h2>
      <form  style={styles.form}>
        
        <div style={styles.row}>
          <div style={styles.fieldContainer}>
            <label style={styles.label}>Job Title:</label>
            <input
              type="text"
              name="jobTitle"
              style={styles.input}
            />
          </div>
          
          <div style={styles.fieldContainer}>
            <label style={styles.label}>Company Name:</label>
            <input
              type="text"
              name="companyName"
              style={styles.input}
            />
          </div>
        </div>
        
        <div style={styles.row}>
          <div style={styles.fieldContainer}>
            <label style={styles.label}>Salary:</label>
            <input
              type="number"
              name="salary"
              style={styles.input}
            />
          </div>

          <div style={styles.fieldContainer}>
            <label style={styles.label}>Job Location:</label>
            <input
              type="text"
              name="jobLocation"
              style={styles.input}
            />
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.fieldContainer}>
            <label style={styles.label}>Job Posting Date:</label>
            <input
              type="date"
              name="jobPostingDate"
              
              style={styles.input}
            />
          </div>

          <div style={styles.fieldContainer}>
            <label style={styles.label}>Experience Level:</label>
            <input
              type="text"
              name="experienceLevel"
              
              style={styles.input}
            />
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.fieldContainer}>
            <label style={styles.label}>Required Skills:</label>
            <input
              type="text"
              name="requiredSkills"
             
              style={styles.input}
            />
          </div>

          <div style={styles.fieldContainer}>
            <label style={styles.label}>Hirer Email:</label>
            <input
              type="email"
              name="hirerEmail"
              
              style={styles.input}
            />
          </div>
        </div>

        <div style={styles.singleField}>
          <label style={styles.label}>Job Description:</label>
          <textarea
            name="jobDescription"
            
            style={styles.textarea}
          />
        </div>
        
        <button type="submit" style={styles.submitButton}><Link style={{textDecoration:"none",color:'white'}} to={'/companyDashboard'}>Register Job</Link></button>
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
      boxShadow: '0 0 20px rgba(142,27,213,255)'
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
