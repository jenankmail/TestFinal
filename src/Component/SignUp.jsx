import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import img2 from '../Assets/androidScreen.png';
import img from '../Assets/iPhoneScreen.png';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Home from './Home'
import Link from "@mui/material/Link";

function SignUp() {
 
  const [userData,SetuserData]=useState({
    userName:"",
    password:"",
    email:""
  });
const navigate=useNavigate();
  function handelsubmit(e){
e.preventDefault()
axios.post("http://16.170.173.197/users/signup", userData)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token)
        navigate('/home')

      }).catch((error) => {
        console.log(error)
      })
  }
  return (
    <>
    <Box sx={{ flexGrow: 1 ,paddingTop:"50px" ,height:"601px" ,backgroundColor:"black"}}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          
      <img src={img2} alt='phon' style={{width:"200px" , height:"440px",position:"relative",Button:"80px",left:"170px"}}/>
      <img src={img} alt='phon' style={{width:"260px" , height:"450px",position:"relative",top:"70px",right:"10px"}}/>

        </Grid>
        <Grid item xs={6}>
   <Box style={{backgroundColor:"#1D1D1D" ,width:"350px",height:"500px" ,borderRadius:"10px"  }}>
    <img src='../Assets/instagram-logo.png' alt='instgram' style={{width:"100px",height:"50px" ,marginTop:"20px",marginBottom:"5px"}}/>
    
    <p style={{color:"#DCDCDC",fontSize:"10px"}}>Sign up to see photos and videos </p>
    <p style={{color:"#E0E0E0",fontSize:"10px"}}>from your friends</p>
    <Button variant="contained" style={{margin:"15px",width:"270px",height:"30px"}}><FacebookIcon/> Login with Facebook</Button>
    <table><tr>
<td style={{width:"48%"}}><hr style={{borderBlockColor:"#E0E0E0"}} /></td>
<td style={{verticalAlign:"middle" , textAlign: "center" ,color:"white"}}>or</td>
<td style={{width:"48%"}}><hr style={{borderBlockColor:"#E0E0E0"}}/></td>
</tr></table>
<form onSubmit={handelsubmit}>
    <input type='email' placeholder=" Email"
    value={userData.email} onChange={(e)=>{
      SetuserData({...userData,email:e.target.value})
    }} 
    style={{height:"30px",margin:"15px",width:"270px" ,borderRadius:"10px" }}/>
    <input type='text' placeholder="userName" 
     value={userData.userName} onChange={(e)=>{
      SetuserData({...userData,userName:e.target.value})
    }} 
    style={{height:"30px" ,width:"270px", borderRadius:"10px",marginBottom:"15px"}}/>
    <input type='password' placeholder="Password"
     value={userData.password} onChange={(e)=>{
      SetuserData({...userData,password:e.target.value})
    }} 
    style={{height:"30px" ,width:"270px", borderRadius:"10px"}}/>

    <br/>
    <Button  variant="contained" type="submit" style={{margin:"15px",width:"270px",height:"25px"}}>Signup</Button>
    </form>
 <p style={{color:"#E0E0E0",fontSize:"16px"}}>By signing up ,your agree to our terms ,Data  policy and Cookies Police</p>
  </Box>
  <div style={{backgroundColor:"#1D1D1D",marginTop:"10px",height:"50px",width:"350px",borderRadius:"10px"}}>
<div style={{paddingTop:"10px"}}>Have an account ?  <Link  href="/" style={{textDecoration:"none" ,color:"blue"}}>Log in</Link></div>
    </div>    
        </Grid>
       
      </Grid>

    </Box>
    
    </>
  )
}

export default SignUp