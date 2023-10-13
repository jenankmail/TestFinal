import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import axios from "axios";
import { styled } from '@mui/material/styles';
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
function  ProfileModal  ({ open, handleClose, setPosts })  {
  const [description, setdescription] = useState("");
  const [image, setImage] = useState(null)
  const [imageCover, setImageCover] = useState(null);
  const [title,setTitle]=useState("")
  const token = localStorage.getItem("token")
const [url,setUrl]=useState("");
  const handledescriptionChange = (event) => {
    setdescription(event.target.value);
  };

  function handleUrlChange(e){
    setUrl(e.target.value)
  }
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImageCover(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const userid=localStorage.getItem("userId")


  
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

  function handleTitleChange(e){
setTitle(e.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();

    axios 
    .request({ 
      method: "put", 
      url: `http://16.170.173.197/users`,
      data: { 
        id:userid,
        bio:description,
        avatar:url,
        


      },
      headers: { 
        Authorization: `Bearer ${token}`, 
      }, 
    }) 
    .then((response) => { 
      console.log(response); 
     console.log(image.name)
    }) 
    .catch((error) => { 
      console.error("Error deleting post:", error); 
    });

    handleClose()
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
             <h1 id="ModalTitle">Edit Profile</h1>
              <hr/></div>
             
               <br/>
              
               
             
               <br/>
               <from>
               <div className='ModalTitle'>
               <label style={{textAlignLast:"right",paddingRight:"420px"}}>Pio</label>
               <br/>
               <textarea id='bio' value={description} name="body"rows="8" cols="73" onChange={handledescriptionChange} style={{width:"90%",height:"80px",borderRadius:"10px",backgroundColor:"#686262"}} ></textarea>
              
               </div>
             
               <label style={{textAlignLast:"right",paddingRight:"420px"}}>url</label>
               <br/>
               <input id='url' value={url} name="body"rows="8" cols="73" onChange={handleUrlChange} style={{width:"90%",height:"30px",borderRadius:"10px",backgroundColor:"#686262"}}/>
               
               <div className='ModalTitle'>
 
               
               
              
              
               </div>
             
<br/>
<br/>      
               <br/>
          
               <Button variant="contained" type="submit" sx={{width:"90px",borderRadius:"50px",paddingBottom:"10px"}} onClick={handleSubmit}>edit</Button>
               </from>
             </div>
            
       
           </div>
           <br/>
           <br/>
           </Box >

        </Modal> );
};

export default ProfileModal;
