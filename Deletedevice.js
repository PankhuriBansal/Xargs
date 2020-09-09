import React,{useState, Component} from 'react';
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';

import Grid from '@material-ui/core/Grid';
import Axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'



const useStyles = ((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),

    },
   
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      root1: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
      nested: {
        paddingLeft: theme.spacing(4),
      },
      root4: {
        width: 'fit-content',
        border: `px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        '& svg': {
          margin: theme.spacing(1.5),
        },
        '& hr': {
          margin: theme.spacing(0, 0.5),
        },
        button: {
          display: 'block',
          marginTop: theme.spacing(6),
        },
      },
    
  },
}));
class Ayush extends Component{
  constructor()
  {
    super();
    this.state={
      value:'true',
      anchorEl: null,
      anchorE2: null,
      
      
      model:"",
     
   
      kalu:[],
        st:false
    }
  }
fun(e)
  {
  this.setState({
      [e.target.name]:e.target.value
  })
}
sendData(ev){

  const model=this.state.model
  



  const data={
    model
     
      }
      Axios.get('http://localhost:8080/examples/xargs/deletedevice.jsp',{params:data}).then(response=>{console.log(response);
      this.setState({
        kalu: response.data.responses ,
          message:response.data.response
      })
  }).catch(err=>{
      console.log("Failed");
  })
  } 

   handleChange1 = (event) => {
    this.setState({age:event.target.value});
  };

   handleClose1 = () => {
    this.setState({age:false});
  };

  handleOpen1 = () => {
    this.setState({age:true});
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClick2 = event => {
    this.setState({ anchorE2: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleClose2 = () => {
    this.setState({ anchorE2: null });
  };

render()
{
  const {classes} = this.props
  return (
      <div>
         
         
  
   
    <div className={classes.root}>
      
      <center><Button variant="contained" color="primary">
        ADD       
      </Button>
      <Button variant="contained" style={{margin:"20px"}} color="secondary">
        DELETE
      </Button></center>
     
      <center>
      <Button variant="contained" >
        Delete Device
      </Button>
      <Button variant="contained" style={{margin:"20px"}}  >
        Delete SBC
      </Button></center>
    </div>
   
      
    
    
 
    <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
  


   
<div className={classes.form} noValidate>

<TextField variant="outlined" margin="normal" required fullWidth id="email" name="model" value={this.state.model} autoFocus onChange={this.fun.bind(this)} label="Enter Device ID"  autoFocus /> 



            
              </div>
        
     
  <div>
  
    
  </div><br></br>
</div>
</Container>
 

<center><Button onClick={this.sendData.bind(this)} value="submit" variant="contained" color="primary" className={classes.submit}>DELETE </Button></center>
      {this.state.message} 
  </div>
  );
}
}
export default withStyles (makeStyles)(Ayush)