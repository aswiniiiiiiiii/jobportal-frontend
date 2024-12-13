import React from 'react'
import NORESULT from '../assets/noresult.png'
const Jobnotfound = () => {
  return (
    <>
       <div className=' d-flex flex-column justify-content-top align-items-center'>
                <img width={'500px'} src={NORESULT} alt="" />
                {/* <div style={{paddingTop:'0'}} className='fs-2 text-primary'>No Job post found Yet!!</div> */}
                </div>
    </>
  )
}

export default Jobnotfound
