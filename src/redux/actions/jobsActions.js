import * as TYPES from './types'

export const readAllJobs =()=>{
    return{
        type:TYPES.READ_ALL_JOBS,
        payload:{
            isLoading:true
        }
    }
}


export const readAllJobsSuccess =data=>{
    return{
        type:TYPES.READ_ALL_JOBS_SUCCESS,
        payload:{
            isLoading:false,
            data
        }
    }
}


export const readAllJobsFailed =error=>{
    return{
        type:TYPES.READ_ALL_JOBS_FAILED,
        payload:{
            error,
            isLoading:false
        }
    }
}


export const getJobInfo = id =>{
    return{
        type:TYPES.GET_JOB_DETAILS,
        payload:{
            id
        }
    }
}