import React from 'react'
import "./ModalStyle.css";
import Button from '@mui/material/Button';

function Modal() {
    
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

              <label id='label'>Image URL</label>
              <br/>
              
              <input type="url" name="url" id="post"  pattern="https://.*" size="30" required />
             
              </div>
             
             
              
              <br/>
         
              <Button variant="contained">POST</Button>

            </div>
            
      
          </div>
         
        );
      
  
}

export default Modal