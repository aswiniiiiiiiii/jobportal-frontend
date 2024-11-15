import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import Auth from './components/Auth'
import Header from './components/Header'
import UserDashboard from './pages/UserDashboard'
import Pnf from './pages/Pnf'
import CompanyAuth from './components/CompanyAuth'
import CompanyDashboard from './pages/CompanyDashboard'
import AddJobpost from './pages/AddJobpost'
import ViewJobDetails from './pages/ViewJobDetails'
import CompanyManage from './pages/CompanyManage'
import ViewApplicants from './pages/ViewApplicants'

Footer

function App() {

  return (
    
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register'  element={<Auth insideRegister={true}/>}/>
        <Route path='/userDashboard' element={<UserDashboard/>}/>
        <Route path='/companyRegister' element={<CompanyAuth insideCompanyRegister={true}/>} />
        <Route path='/CompanyLogin' element={<CompanyAuth/>}/>
        <Route path='/companyDashboard' element={<CompanyDashboard/>}/>
        <Route path='/addjobpost' element={<AddJobpost/>}/>
        <Route path='/viewjobdetails' element={<ViewJobDetails/>}/>
        <Route path='/companymanage' element={<CompanyManage/>}/>
        <Route path='/viewapplicants' element={<ViewApplicants/>}/>



        <Route path='/*' element={<Pnf/>}/>

      </Routes>
    </>
  )
}

export default App
