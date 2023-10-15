import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import axios from "axios";
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

//import "./ModalStyle.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  bgcolor: "red",

  transform: "translate(-50%, -50%)",
  width: 500,
  backgroundColor: "#1D1D1D",
};
const modalContent={

};
function  ResetPassword  ({ open, handleClose })  {
  const [newPassword,setNewPassword]=useState("");
  const [confirmNewPassword,setconfirmNewPassword]=useState("");
  const token = localStorage.getItem("tokenResetPassword")
  const userid=localStorage.getItem("userId")
 const [email,setEmail]=useState("")
 const emailuser=localStorage.getItem("email")
 const navigate=useNavigate();
  function handleConfirmPassword(e){
    setconfirmNewPassword(e.target.value);
  }
  
  
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
function handlePassword(e){
  setNewPassword(e.target.value)
}
  
  function handleSubmit(event) {
    event.preventDefault();
    
    if (newPassword !== confirmNewPassword) {
        alert("password not match")
      } else {
       
     
    axios
      .request({
        method: "put",
        url: `http://16.170.173.197/users`,
        data: {
            id:userid,
            email:email,
            password: newPassword,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(token)
        console.log(response);
        navigate("/home")

      })
      .catch((error) => {
    const errorMessage = "An error occurred while deleting the post: " + error;
  window.alert(errorMessage);
      });}
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-description"
      aria-describedby="modal-modal-description"
      
    
    > 
      <Box  sx={style}><div className="modal-overlay" >
             
    <div style={{textAlign:"center",color:"white"}} >
                 <div className='HeaderTitle'>
             <h1 id="ModalTitle">Reset Password</h1>
              <hr/></div>
             
               <br/>
               <br/>
               <from>
              <div className='ModalTitle'>
              <label style={{textAlignLast:"right",paddingRight:"420px"}}>Email</label>

              <input type='email' 
    value ={email} onChange={(e)=>{
      setEmail(e.target.value)
    }}
    style={{width:"90%",height:"30px",borderRadius:"10px",backgroundColor:"white"}}/>
              </div>
              <br/>
              <br/>
               <div className='ModalTitle'>

                <label style={{textAlignLast:"right",paddingRight:"350px"}}>New Password</label>
                <input type='password'  value ={newPassword} onChange={handlePassword}
    style={{width:"90%",height:"30px",borderRadius:"10px",backgroundColor:"white"}}/>
                </div>
                <br/>
                <br/>
                <br/>
               <div className='ModalTitle'>
               <label style={{textAlignLast:"right",paddingRight:"320px"}}>Confirm New Password</label>
               <input type='password'  value ={confirmNewPassword} onChange={handleConfirmPassword}
    style={{width:"90%",height:"30px",borderRadius:"10px",backgroundColor:"white"}}/>
               </div>
               <br/>
              
             
                  
         <br/>
          
               <Button variant="contained" type="submit" sx={{width:"90px",borderRadius:"50px",paddingBottom:"10px"}} onClick={handleSubmit}>change Password</Button>
               </from>
             </div>
            
       
           </div>
           <br/>
           <br/>
           </Box >

        </Modal> );
};

export default ResetPassword;
