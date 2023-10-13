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
function CreateModal  ({ open, handleClose, setPosts })  {
  const [description, setdescription] = useState("");
  const [image, setImage] = useState(null)
  const [imageCover, setImageCover] = useState(null);
  const [title,setTitle]=useState("")
  const token = localStorage.getItem("token")

  const handledescriptionChange = (event) => {
    setdescription(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImageCover(reader.result);
    };
    reader.readAsDataURL(file);
  };

  let formData = new FormData();

  formData.append("description", description)
  formData.append("image", image)
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


    axios.post("http://16.170.173.197/posts", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    }).then((response) => {
     // console.log("🚀 ~ file: CreateMemory.jsx:59 ~ handleSubmit ~ response:", response)
      setPosts((prevposts) => [...prevposts, response.data])
    }).catch((error) => {
      console.log("Error:", error)
    })

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
             <h1 id="ModalTitle">Create new post</h1>
              <hr/></div>
             
               <br/>
               <div className='ModalTitle'>
               <label style={{textAlignLast:"right",paddingRight:"420px"}}>Title</label>
               <br/>
               <input type="text" id='post' style={{width:"90%",height:"20px",borderRadius:"10px",backgroundColor:"#686262"}} onChange={handleTitleChange}/>
               
               </div>
               
             
               <br/>
               <div className='ModalTitle'>
               <label style={{textAlignLast:"right",paddingRight:"420px"}}>Body</label>
               <br/>
               <textarea id='post' name="body"rows="8" cols="73" onChange={handledescriptionChange} style={{width:"90%",height:"80px",borderRadius:"10px",backgroundColor:"#686262"}} ></textarea>
              
               </div>
             
               
               
               <div className='ModalTitle'>
 
               
               
              
              
               </div>
              <br/>
              {imageCover && (
            <img
              src={imageCover}
              alt="Uploaded"
              style={{ width: "450px",height:"250px", marginBottom: "1rem" }}
            />
          )}
              <Button component="label" variant="contained" >
      Upload file
      <VisuallyHiddenInput type="file" onChange={handleImageChange} />
    </Button>
<br/>
<br/>      
               <br/>
          
               <Button variant="contained" type="submit" sx={{width:"90px",borderRadius:"50px",paddingBottom:"10px"}} onClick={handleSubmit}>POST</Button>
             
             </div>
             
       
           </div>
           <br/>
           <br/>
           </Box >

        </Modal> );
};

export default CreateModal;
