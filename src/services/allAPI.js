import commonAPI from "./commonAPI";
import SERVER_URL from './serverURL'


//Admin API CALLS
//registerAPI called by companyAUth
export const adminloginAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/admin-login`,reqBody)
}
//view total registered users count
export const totalUsersCountAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/view-total-users
`,{})
}
//add faq
export const addFaqAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-faq`,reqBody)
}
//get faq
export const getAddedFaqAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/view-faq
`,{})
}
//get faq
export const getAddedFaqHomeAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/home
`,{})
}
//delete Faq
export const deleteFaqAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/admin-dashboard/${id}/delete-faq
`,{})
}

//update faq
// export const updateFaqAPI = async(id)=>{
//     return await commonAPI("PUT",`${SERVER_URL}/admin-dashboard/${id}/update-faq
// `,{})
// }
export const updateFaqAPI = async (id, faqData) => { 
    return await commonAPI("PUT", `${SERVER_URL}/admin-dashboard/${id}/update-faq`, faqData);
};

//update recruiter profile
export const updateRecruiterProfileAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/edit-recruiter
`,reqBody,reqHeader)
}
//Company API CALLS

//registerAPI called by companyAUth
export const registerAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/recruiter-register`,reqBody)
}
//registerAPI called by companyAUth
export const loginAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/recruiter-login`,reqBody)
}
//addJobAPI called by company
export const addJobAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-job`,reqBody,reqHeader)
}
//getJobpostAPI called by company
export const getJobpostAPI = async(searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/get-jobpost?search=${searchKey}`,{},reqHeader)
} 

//getTableJobpostAPI called by companyManage
export const getTableJobpostAPI = async(searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/companymanage?search=${searchKey}`,{},reqHeader)
} 
//deleteJobpostAPI
export const deleteJobpostAPI = async(id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/companymanage/${id}/remove`,{},reqHeader)
} 
// viewApplicantsAPI
export const viewApplicantsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/view-applicants`,{},reqHeader)
} 
//updateJobDetailsAPI
export const updateJobDetailsAPI = async(id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/editjobpost/${id}/edit`,reqBody,reqHeader)
}




//jobseekers API CALLs

//jobseeker register called by Auth component
export const registerJobseekerAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/jobseeker-register`,reqBody)
}

//jobseeker login called by Auth component
export const jobseekerloginAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/jobseeker-login`,reqBody)
}
//update profile
export const updateJobseekerProfileAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/edit-jobseeker
`,reqBody,reqHeader)
}
//viewJobsJobseekerAPI called by jobseeker
export const viewJobsJobseekerAPI = async(searchKey,location,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/get-all-jobpost?search=${searchKey}&location=${location}`,{},reqHeader)
} 
//filterJobAPI 
export const filterJobAPI = async(employement,experienceKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/filter-jobs?employmenttype=${employement}&experience=${experienceKey}`,{},reqHeader)
} 
//viewSinglePostAPI
export const viewSinglePostAPI = async(id,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/viewjobdetails/${id}/viewsingle`,{},reqHeader)
} 
//uploadResumeAPI
export const uploadResumeAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/upload-resume`,reqBody,reqHeader)
}