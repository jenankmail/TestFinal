import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import img2 from '../Assets/androidScreen.png';
import img from '../Assets/iPhoneScreen.png';

function LogInInstagram() {
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
    <input type='text' value="Mobile Number or Email" style={{height:"30px",margin:"15px",width:"270px" ,borderRadius:"10px" }}/>
    <input type='text' value="Password" style={{height:"30px" ,width:"270px", borderRadius:"10px",marginBottom:"15px"}}/>
    <input type='text' value="Password" style={{height:"30px" ,width:"270px", borderRadius:"10px"}}/>

    <br/>
    <Button variant="contained" style={{margin:"15px",width:"270px",height:"25px"}}>Login</Button>
   
 <p style={{color:"#E0E0E0",fontSize:"16px"}}>By signing up ,your agree to our terms ,Data  policy and Cookies Police</p>
  </Box>
  <div style={{backgroundColor:"#1D1D1D",marginTop:"10px",height:"50px",width:"350px",borderRadius:"10px"}}>
<div style={{paddingTop:"10px"}}>Have an account ?  <a style={{textDecoration:"none" ,color:"blue"}}>Log in</a></div>
    </div>    
        </Grid>
       
      </Grid>

    </Box>
    
    </>
  )
}

export default LogInInstagram