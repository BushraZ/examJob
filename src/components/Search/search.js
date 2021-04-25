import React, { Component } from 'react';
import Input from './utils/input';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';
import { orange } from '@material-ui/core/colors';
import './search.css';

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(orange[500]),
      backgroundColor: orange[500],
      '&:hover': {
        backgroundColor: orange[700],
      },
    },
  }))(Button);
  

class Search  extends  Component {
    constructor(props){
        super(props);
        this.state={
            description:'',
            location:''
        }
    }

    handleValue =(name,value)=>{
        this.setState({[name]:value})
    }

    handleSearch =()=>{
        this.props.handleSearch(this.state.description,this.state.location);
    }

    render(){
      const {description,location}=this.state;

         return (
        <div className="search-bar">
          <div className="input-group">
            <Input name="description" placeholder="description" value={description} handleValue={this.handleValue}/>
          <Input name="location" placeholder="location" value={location} handleValue={this.handleValue}/>
          </div>
          <div>
             <ColorButton variant="contained" color="primary" endIcon={<SearchIcon />} onClick={this.handleSearch}>
            Search
          </ColorButton>
          </div>         
        </div>
    );  
    } 
}

export default Search;