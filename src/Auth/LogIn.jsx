import React, { useEffect, useState } from 'react'
import img from '../Assets/iPhoneScreen.png'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import img2 from '../Assets/androidScreen.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import ResetPassword from '../Modal/ResetPassword';
function LogIn() {
  const [userData,SetuserData]=useState({
   
    password:"",
    email:""
  });
const navigate=useNavigate();
const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
function handleSubmit(e){
  e.preventDefault()
  axios.post("http://16.170.173.197/users/login", userData)
        .then((response) => {
          
          const token = response.data.token;
          localStorage.setItem("token", token)
          const userId=response.data.user.id;
          localStorage.setItem("userId", userId)
         
          navigate('/home')
  
        }).catch((error) => {
          const errorMessage = "An error occurred while login:(Check password and email) "+ error;
          window.alert(errorMessage);
        })

}

function handlealertconfirm(){
  handleOpen();
}
  return (
    <>
    <Box sx={{ flexGrow: 1 ,paddingTop:"100px" ,height:"551px" ,backgroundColor:"black"}}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
      
      <img src={img2} alt='phon' style={{width:"200px" , height:"440px",position:"relative",Button:"80px",left:"170px"}}/>
      <img src={img} alt='phon' style={{width:"260px" , height:"450px",position:"relative",top:"70px",right:"10px"}}/>

        </Grid>
        <Grid item xs={6}>
   <Box style={{backgroundColor:"#1D1D1D" ,width:"350px",height:"450px" ,borderRadius:"10px"  }}>
    <img src='../Assets/instagram-logo.png' alt='instgram' style={{width:"100px",height:"50px" ,marginTop:"20px",marginBottom:"5px"}}/>
    
    <p style={{color:"#DCDCDC",fontSize:"10px"}}>Sign up to see photos and videos </p>
    <p style={{color:"#E0E0E0",fontSize:"10px"}}>from your friends</p>
   <form onSubmit={handleSubmit}>
    <input type='email' placeholder=" Email"
    value ={userData.email} onChange={(e)=>{
      SetuserData({...userData,email:e.target.value})
    }}
    style={{height:"30px",margin:"15px",width:"270px" ,borderRadius:"10px" }}/>
    <input type='password' placeholder="Password"
    value ={userData.password} onChange={(e)=>{
      SetuserData({...userData,password:e.target.value})
    }}
    style={{height:"30px" ,width:"270px", borderRadius:"10px"}}/>
    <br/>
    <Button variant="contained" type="submit" style={{margin:"15px",width:"270px",height:"25px"}}>Login</Button>
    </form>
    <table><tr>
<td style={{width:"48%"}}><hr style={{borderBlockColor:"#E0E0E0"}} /></td>
<td style={{verticalAlign:"middle" , textAlign: "center"}}>or</td>
<td style={{width:"48%"}}><hr style={{borderBlockColor:"#E0E0E0"}}/></td>
</tr></table>
<Button variant="contained" style={{margin:"15px",width:"270px",height:"30px"}}><FacebookIcon/> Login with Facebook</Button>
 <h5 style={{color:"#E0E0E0"}} onClick={handlealertconfirm}>Forget Password ?</h5>
  </Box>
  <div style={{backgroundColor:"#1D1D1D",marginTop:"10px",height:"50px",width:"350px",borderRadius:"10px"}}>
<div style={{paddingTop:"10px"}}>Don't have an account ?  <Link  href='/signup' style={{textDecoration:"none" ,color:"blue"}}>Sign up</Link></div>
    </div>  
    <ResetPassword open={open} handleClose={handleClose} />
  
        </Grid>
       
      </Grid>

    </Box>
    
    </>
  )
}

export default LogIn