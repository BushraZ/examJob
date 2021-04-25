import React from 'react';
import { Link} from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    width: 200,
    height:250,
    display:'flex',
    flexDirection:'column',
    textAlign:'left',
    boxShadow:'0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)'
  //  marginTop:'5px',
 //   marginBottom:''
  },
  title: {
    fontSize: 13,
    marginTop:'5px'
  },
  pos: {
 //   marginBottom: 12,
    fontSize:12
  },
  btn:{
    width:'40%',
    disply:'flex',
    marginTop:'auto',
    alignItems:'end' ,
    alignSelf:'flex-end'
//    marginBottom:'3px'
  },
  divider:{
    margin:'3px 0'
  },
  
});


 const OutlinedCard=(props)=> {
   const {item}=props;
  const classes = useStyles();
 

 // console.log('item',props)

  return (
    <Card className={classes.root} variant="outlined"S>
      <CardContent>
      <Typography variant="h6" component="h2">
          {item.title.length>15?item.title.slice(0,12)+'...':item.title}
        </Typography>
        
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {item.location}
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.pos} color="textSecondary">
          {item.company.length>15?item.company.slice(0,13)+'...':item.company}
        </Typography>   
        <Divider className={classes.divider} />     
      </CardContent> 
      {/* <div className={classes.actions}> */}
      <Button variant="outlined" color="primary"  className={classes.btn} href={`/job/${item.id}` || "#"}>View</Button>
            
      {/* </div> */}
    </Card>
  );
}

export default OutlinedCard;