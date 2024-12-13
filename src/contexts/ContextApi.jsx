import React, { createContext, useState } from 'react'
export const getJobDetailsContext = createContext()
export const viewSingleJobpostContext = createContext() 
export const updateEditResponseContext = createContext()
export const updatedFaqContext = createContext()
const ContextApi = ({children}) =>{
    const [getJobDetails,setGetJobDetails] = useState("")
    const [viewSingleJobpost,setViewSingleJobpost] = useState("")
    const [updatResponse,setUpdateResponse] = useState("")
    const [updatedFaqData,setUpdatedFaqData] = useState("")
    return (
       <updatedFaqContext.Provider value={{updatedFaqData,setUpdatedFaqData}}>
           <viewSingleJobpostContext.Provider value={{viewSingleJobpost,setViewSingleJobpost}}>
                <getJobDetailsContext.Provider value={{getJobDetails,setGetJobDetails}}>
                <updateEditResponseContext.Provider value={{updatResponse,setUpdateResponse}}>{children}</updateEditResponseContext.Provider>
                </getJobDetailsContext.Provider>
           </viewSingleJobpostContext.Provider>
       </updatedFaqContext.Provider>

    )
}

export default ContextApi