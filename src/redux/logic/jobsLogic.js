import { createLogic } from "redux-logic";
import _ from "lodash";
import axios from 'axios';

import * as TYPES from "../actions/types";
import {
    readAllJobsSuccess,
    readAllJobsFailed
} from '../actions/jobsActions';

const readAllJobsLogic = createLogic({
    type: TYPES.READ_ALL_JOBS,
    latest: true,
    name: "getAllJobs",
    async process({ getState, action }, dispatch, done) {
      try {
      
       const res = await fetch("/jobs.json", {
         headers: {
            "Content-type": "application/json;charset=utf-8",
            Accept: "application/json",
            },
          });
      
        const data = await res.json();      
   

  //    console.log('data',data)
  


        dispatch(readAllJobsSuccess(data));       
      } catch (error) {
        dispatch(readAllJobsFailed(error));
      } finally {
        done();
      }
    },
  });
  
  export default [readAllJobsLogic];
  