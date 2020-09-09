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
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Divider from '@material-ui/core/Divider';
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
      age:'',
      value:"",
      platform:"",
      sbc:"",
      device:"",
      model:"",
      company:"",
      platform1:"",
      os:"",
      Android:"",
      kalu:[],
        st:false
    }
  }
 
  // twoCalls = (event,e) => {
  //   this.fun(e)
  //   this.handleClick(event)
  // }


fun(e)
  {
  this.setState({
      [e.target.name]:e.target.value
  })
}
sendData(ev){
  const platform=this.state.platform
  const sbc=this.state.sbc
  const device=this.state.device
  const model=this.state.model
  const company=this.state.company
  const platform1=this.state.platform1
  const os=this.state.os
  const Android=this.state.Android



  const data={
    platform,sbc,device,model,company,platform1,os,Android
     
      }
      Axios.get('http://localhost:8080/examples/xargs/adddevice.jsp',{params:data}).then(response=>{console.log(response);
      this.setState({
        kalu: response.data.responses ,
          message:response.data.response
      })
  }).catch(err=>{
      console.log("Failed");
  })
  } 
 
  // const [age, setAge] = React.useState('');
  // const [open, setOpen] = React.useState(false);

   handleChange1 = (event) => {
    this.setState({age:event.target.value});
  };

   handleClose1 = () => {
    this.setState({age:false});
  };

  handleOpen1 = () => {
    this.setState({age:true});
  };

  
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [anchorE2, setAnchorE2] = React.useState(null);
  // const [anchorE3, setAnchorE3] = React.useState(null);
  // const [anchorE4, setAnchorE4] = React.useState(null);
  // const [open, setOpen] = React.useState(true);


  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClick2 = event => {
    this.setState({ anchorE2: event.currentTarget });
  };
  // const handleClick3 = (event) => {
  //   setAnchorE3(event.currentTarget);
  // };
  // const handleClick4 = (event) => {
  //   setAnchorE4(event.currentTarget);
  // };


  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleClose2 = () => {
    this.setState({ anchorE2: null });
  };
  // const handleClose3 = () => {
  //   setAnchorE3(null);
  // }; 
  // const handleClose4 = () => {
  //   setAnchorE4(null);
  // };

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
        Add Device
      </Button>
      <Button variant="contained" style={{margin:"20px"}}  >
        ADD SBC
      </Button></center>
    </div>
   
      
    <center><div>
      
      <FormControl >
        <InputLabel id="demo-controlled-open-select-label">Platforms</InputLabel>
        <Select required fullWidth   name="platform" autoComplete="name" value={this.state.platform} autoFocus onChange={this.fun.bind(this)}>
        <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"mobile"}>mobile</MenuItem>
          <MenuItem value={"computer"}>Computer</MenuItem>
          <MenuItem value={"TV"}>TV</MenuItem>        
          </Select>
      </FormControl>
    </div></center><br></br>
 
<center><div>
      
      <FormControl >
        <InputLabel id="demo-controlled-open-select-label">Select Sbc</InputLabel>
        <Select fullWidth  name="sbc" autoComplete="sbc" value={this.state.sbc} autoFocus onChange={this.fun.bind(this)}>
          
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"SBC1"}>SBC1</MenuItem>
          <MenuItem value={"SBC2"}>SBC2</MenuItem>
          <MenuItem value={"SBC3"}>SBC3</MenuItem>
        </Select>
      </FormControl>
    </div></center><br></br>
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
  
  <Typography component="h1" variant="h6" >
      Device Details
    </Typography>

   
<div className={classes.form} noValidate>
{/* <TextField variant="outlined" margin="normal" required fullWidth id="Hospital Name" label="Hospital Name" name="hospitalname" value={this.state.hospitalname} autoFocus onChange={this.fun.bind(this)}/> */}
<TextField variant="outlined" margin="normal" required fullWidth id="email" name="device" value={this.state.device} autoFocus onChange={this.fun.bind(this)} label="Device Name"  autoFocus /> 
                  
<TextField variant="outlined" margin="normal" required fullWidth  label="Model" type="text" id="password" autoComplete="current-password" name="model" value={this.state.model} autoFocus onChange={this.fun.bind(this)}  />
<TextField variant="outlined" margin="normal" required fullWidth  label="Company" type="text" id="password" autoComplete="current-password" name="company" value={this.state.company} autoFocus onChange={this.fun.bind(this)}  />
<TextField variant="outlined" margin="normal" required fullWidth  label="Platform" type="text" id="password" autoComplete="current-password" name="platform1" value={this.state.platform1} autoFocus onChange={this.fun.bind(this)}  />



            
              </div>
              <center><div>
      
      <FormControl >
        <InputLabel id="demo-controlled-open-select-label">OS Version</InputLabel>
        <Select required fullWidth   name="os" autoComplete="name" value={this.state.os} autoFocus onChange={this.fun.bind(this)}>
        <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"12"}>12 </MenuItem>
          <MenuItem value={"15"}>15</MenuItem>
          <MenuItem value={"52"}>52</MenuItem>        
          </Select>
      </FormControl>
    </div></center><br></br>
    <center><div>
      
      <FormControl >
        <InputLabel id="demo-controlled-open-select-label">Android</InputLabel>
        <Select required fullWidth   name="Android" autoComplete="name" value={this.state.Android} autoFocus onChange={this.fun.bind(this)}>
        <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"gingerbread"}>gingerbread</MenuItem>
          <MenuItem value={"lollipop"}>lollipop</MenuItem>
          <MenuItem value={"marsmello"}>marshmello</MenuItem>        
          </Select>
      </FormControl>
    </div></center><br></br>
     
  <div>
  
    
  </div><br></br>
</div>
</Container>

<center><Button onClick={this.sendData.bind(this)} value="submit" variant="contained" color="primary" className={classes.submit}>submit </Button></center>
      {this.state.message} 
  </div>
  );
}
}
export default withStyles (makeStyles)(Ayush)