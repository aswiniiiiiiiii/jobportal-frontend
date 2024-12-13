// src/pages/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminloginAPI } from '../services/allAPI';
import { Link } from 'react-router-dom'





const AdminLogin = () => {
    const [adminDetails,setAdminDetails] = useState({email:"",password:""})
    console.log(adminDetails);
    
  const navigate = useNavigate();

  const handleAdminLogin = async() => {
    // Add validation or API call here
    if(adminDetails.email && adminDetails.password){
        try{
        const result = await adminloginAPI(adminDetails)
        console.log(result);
        
        if(result.status==200){

            sessionStorage.setItem("adminMail",JSON.stringify(result.data.email))
            sessionStorage.setItem("token",result.data.token)
            setAdminDetails({email:"",password:""})
            navigate('/admin-dashboard')

        }
        else{
            if(result.response.status==404){
                alert(result.response.data)
              }
        }
    }catch(err){
        console.log(err);
        
    }

    }else{
        alert("Please fill the fields Completely!!")
    }
  };

  return (
    <div>
        <div><Link className="btn " to={'/'}>Back To Home</Link></div>
        <div style={{ height: '100vh',background:"#6E00BE" }} className="d-flex justify-content-center align-items-center">
            
          <div style={{ width: '500px', padding: '3rem',background:"white" }} className="rounded shadow d-flex flex-column">
            <h2>Admin Login Page</h2>
            <div className="pt-3 d-flex flex-column">
              <label>Email</label>
              <input value={adminDetails.email} onChange={e=>setAdminDetails({...adminDetails,email:e.target.value})} placeholder="Enter email" type="email" />
            </div>
            <div className="pt-3 d-flex flex-column">
              <label>Password</label>
              <input value={adminDetails.password} onChange={e=>setAdminDetails({...adminDetails,password:e.target.value})} placeholder="Enter password" type="password" />
            </div>
            <div className="mt-3">
              <button onClick={handleAdminLogin} className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AdminLogin;
