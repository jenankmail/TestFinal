import React from 'react'
import "./ModalStyle.css";
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

function Modal({isVisible}) {
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
  
    if(isVisible){
      return (
 
        <div className="modal-overlay">
             
                <div id="modal-content">
                    <div className='HeaderTitle'>
                <h1 id="ModalTitle">Create new post</h1>
                 <hr/></div>
                
                  <br/>
                  <div className='ModalTitle'>
                  <label>Title</label>
                  <br/>
                  <input type="text" id='post' />
                  
                  </div>
                  
                
                  <br/>
                  <div className='ModalTitle'>
                  <label>Body</label>
                  <br/>
                  <textarea id='post' name="body"rows="8" cols="73"></textarea>
                 
                  </div>
                
                  
                  <br/>
                  <div className='ModalTitle'>
    
                  
                  
                 
                 
                  </div>
                 <br/>
                  <Button  variant="contained" sx={{height:"30px",width:"200px",borderRadius:"50px"}}>
  Choose Image
  <VisuallyHiddenInput type="file" />

</Button>
<br/>
<br/>      
                  <br/>
             
                  <Button variant="contained" sx={{width:"90px",borderRadius:"50px"}}>POST</Button>
    
                </div>
                
          
              </div>
             
            );
    }else{
      <div>heelo</div>
    }
  
      
  
}

export default Modal