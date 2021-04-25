import * as TYPES from '../actions/types';
import {fetchItem} from '../../assest/js/utils';

const INIT_STATE={
    jobsList:{
        data:[],
        error:null,
        isLoading:false
    },
    jobDetails:{
        data:[],
        error:null,
        isLoading:false
    }
}

const jobsReducer=(state=INIT_STATE,action)=>{
    switch(action.type){
        case TYPES.READ_ALL_JOBS:
            return{
                ...state,
                jobsList:{
                    data:[],
                    isLoading:true,
                    error:null
            }};
        case TYPES.READ_ALL_JOBS_SUCCESS:
            return{
                ...state,
                jobsList:{
                    data:action.payload.data,
                    error:null,
                    isLoading:false
                }
            };
        case TYPES.READ_ALL_JOBS_FAILED:
            return{
                ...state,
                jobsList:{
                    error:action.payload.error,
                    isLoading:false
                }
            };    
        case TYPES.GET_JOB_DETAILS:
            return{
                ...state,
                jobDetails:{
                    error:null,
                    isLoading:false,
                   data:fetchItem(action.payload.id,state.jobsList)
                }
            }    
        default:
            return state;
    }

}


export default jobsReducer;