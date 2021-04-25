import React, {useEffect,useState} from 'react';
import _ from  "lodash";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Typography from '@material-ui/core/Typography';
import logo from './../../logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Button, Paper } from '@material-ui/core';
import Header from '../../components/layout/header';
import CardList from '../../components/CardList/cardList';
import {readAllJobs} from '../../redux/actions/jobsActions';
import {fetchMatches, findMatches} from '../../assest/js/utils';
import SearchBar from '../../components/Search/search';

const Jobs =(props) => {
  const [searchResults,setSearchResults]=useState([]);
  const [noResult,setNoResult]=useState(false);
   
  useEffect(() => {
    props.actions.readAllJobs();
  },[])

  const handleClick=(description,location)=>{
    if(description==='' && location ===''){
      setNoResult(false);
      return;
    }
    
    const result = findMatches(props.jobsList.data,description,location)
    setSearchResults(result)
    if(result.length && noResult) 
    setNoResult(false);
    else
    setNoResult(true);
   // console.log('results = ',  result)
  }
  

  return (
   <>
   <SearchBar handleSearch={handleClick}/>
    <Container fixed className="App"> 
    {
      searchResults.length > 0? 
      <CardList list={searchResults} /> :<>
      {
        noResult?<Box variant="h6" component="h2" textAlign="left" ml={4} mt={8}>
        No Results
      </Box> :<>
       <Box variant="h6" component="h2" textAlign="left" ml={4} mt={8}>
          Recent Openings
        </Box>    
        <CardList list={props.jobsList.data} /> </> }
      </> 
    }
             
    </Container>
  </>
  );
}

const mapStateToProps = (state) => {
  return {
    jobsList: _.get(state, "jobs.jobsList", []),   
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        readAllJobs
      },
      dispatch
    ),
  };
};

export default  connect(mapStateToProps, mapDispatchToProps)(Jobs);