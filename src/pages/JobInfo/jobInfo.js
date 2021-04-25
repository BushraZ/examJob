import React, {  useEffect} from 'react';
import ReactHtmlParser from 'html-react-parser';
import _ from "lodash";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Container from '@material-ui/core/Container';
import  'moment' ;
import {getJobInfo} from '../../redux/actions/jobsActions';
import moment from 'moment';
import './jobInfo.css';

const JobInfo=(props)=> {
 
    useEffect(() => {
        const { id } = props.match.params;
        props.actions.getJobInfo(id);
    },[]);

    
   
    return (
        <Container fixed>
        {
            props.jobDetails ?
            <div className="info" style={{backgroundColor:'#fff',color:'#000'}}>
                <div className="info_title">
                    <span className="info_title_main">{props.jobDetails.title}</span> 
                    <span className="info_title_type">{props.jobDetails.type}</span>
                </div>
                <div className="info_date">
                    {`Posted on: ${moment(props.jobDetails.created_at).format('dddd, MMMM Do YYYY')}, ${props.jobDetails.location}`}
                </div>
                
                <div >
                    <div className="info_title_main">Description</div>
                    <div>
                        {
                            ReactHtmlParser(props.jobDetails.description)                   
                        }
                    </div>                   
                </div>
                <div>
                    <div className="info_title_main">How To Applay</div>
                    <div>
                        {
                            ReactHtmlParser(props.jobDetails.how_to_apply)
                        }
                    </div>
                </div>
            </div>                
            :<div>is loading ...</div>        
       
        }
        </Container>      
           
           
    )
}

const mapStateToProps = (state) => {
    return {
        jobDetails: _.get(state, "jobs.jobDetails.data", []),
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(
        {
          getJobInfo,
        },
        dispatch
      ),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(JobInfo);