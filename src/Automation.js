import React,{Component} from 'react';
import { makeStyles,withStyles,useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
 container: {

 },
}));

class Automation extends React.Component {
  constructor() {
    super();
    this.state={
      t1:'',
      t2:'',
      t3:'',
      t4:'',
      t5:'',
      message:'',
      kalua:[],
      kalub:[],
      kaluc:[],
      kalud:[],
      kalue:[],
      st:false
  }
}
 handlecheck = () => {
    if(document.getElementById('Platform').value!='')
     { document.getElementById('Version').disabled=false;}
    else{
      document.getElementById('Version').disabled=true;}
    }  
 handlecheck2  = () =>{
      if(document.getElementById('Version').value!='')
       { document.getElementById('APK').disabled=false;}
      else{
        document.getElementById('APK').disabled=true;
      }
      }
  handlecheck3  = () =>{
    if(document.getElementById('APK').value!='')
      { document.getElementById('Execution').disabled=false;}
    else{
      document.getElementById('Execution').disabled=true;
    }
    }
  handlecheck4  = () =>{
      if(document.getElementById('Execution').value!='')
        { document.getElementById('Iterations').disabled=false;}
      else{
        document.getElementById('Iterations').disabled=true;
      }
      }
      handleChangeFields=(event)=>{
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }
    twoCalls1 = event => {
      this.handleChangeFields(event)
      this.handlecheck()
    }
    twoCalls2 = event => {
      this.handleChangeFields(event)
      this.handlecheck2()   
     }
     twoCalls3 = event => {
      this.handleChangeFields(event)
      this.handlecheck3()   
     }
     twoCalls4 = event => {
      this.handleChangeFields(event)
      this.handlecheck4()   
     }
    sendData(ev){
      const t1 =this.state.t1
      const t2=this.state.t2
      const t3=this.state.t3
      const t4=this.state.t4
      const t5=this.state.t5
    
      const data={
        t1,t2,t3,t4,t5
      }
      Axios.get('http://localhost:8080/examples/automation.jsp',{params:data}).then(response=>{console.log(response);   
          this.setState.state({
            message:response.data.response
          })
        }).catch(err=>
          {
            console.log("Failed");
          })
        }
        componentDidMount(){
          Axios.get('http://localhost:8080/examples/selecta.jsp').then(response=>{
            this.setState({kalua: response.data.kalua})  
  }).catch(err => {
              console.log("Failed");
          })
          Axios.get('http://localhost:8080/examples/selectb.jsp').then(response=>{
            this.setState({kalub: response.data.kalub})  
  }).catch(err => {
              console.log("Failed");
          })
          Axios.get('http://localhost:8080/examples/selectc.jsp').then(response=>{
            this.setState({kaluc: response.data.kaluc})  
  }).catch(err => {
              console.log("Failed");
          })
          Axios.get('http://localhost:8080/examples/selectd.jsp').then(response=>{
            this.setState({kalud: response.data.kalud})  
  }).catch(err => {
              console.log("Failed");
          })
          Axios.get('http://localhost:8080/examples/selecte.jsp').then(response=>{
            this.setState({kalue: response.data.kalue})  
  }).catch(err => {
              console.log("Failed");
          })
      } 
  render() {
    return (
      <div className="container" 
      style={{margintop: 100, width: 500, height: 280, backgroundColor: 'powderblue'}} >
        {/* <center> */}
        <div >Select Platform</div>
      <select onChange={this.twoCalls1} name="t1" id="Platform" label="Select Platform" >
      <option value="">
            {/* <em>None</em> */}
          </option>
          {    this.state.kalua.map((ag,key) => 
          <option value={ag.platform}>{ag.platform}</option>
       )}
      </select><br/>
      <div>Select Version</div>
      <select disabled onChange={this.twoCalls2} name="t2"  value={this.state.t2} id="Version" >
      <option value="">
            {/* <em>None</em> */}
          </option>
          {    this.state.kalub.map((ag,key) => 
          <option value={ag.version}>{ag.version}</option>
       )}
      </select>  
      <div>Select APK Version</div>
      <select disabled onChange={this.twoCalls3} name="t3" value={this.state.t3} id="APK" >
      <option value="">
            {/* <em>None</em> */}
          </option>
          {    this.state.kaluc.map((ag,key) => 
          <option value={ag.apk}>{ag.apk}</option>
       )}
      </select>

      <div>Test Execution</div>
      <select disabled onChange={this.twoCalls4}  name="t4" value={this.state.t4} id="Execution" >
      <option value="">
            {/* <em>None</em> */}
          </option>
          {    this.state.kalud.map((ag,key) => 
          <option value={ag.test}>{ag.test}</option>
       )} 
      </select>

      <div>Iterations</div>
      <select disabled onChange={this.handleChangeFields.bind(this)} value={this.state.t5} name="t5" id="Iterations" >
      <option value="">
            {/* <em>None</em> */}
          </option>
          {    this.state.kalue.map((ag,key) => 
          <option value={ag.iter}>{ag.iter}</option>
       )}
      </select>
      <br/>
      <p>
       <Button onClick={this.sendData.bind(this)} value="submit" variant="contained" color="primary">Start</Button></p>
      {/* </center> */}
      </div>
 
    )
  }
}

export default withStyles(useStyles)(Automation);