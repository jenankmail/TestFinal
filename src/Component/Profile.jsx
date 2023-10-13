import * as React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
//import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import Test from './Test'
import { useState } from 'react';
import ProfileModal from './ProfileModal';
function Profile() {
    const userName=localStorage.getItem("userName");
    const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const avatar=localStorage.getItem("avatar")
    const bio =localStorage.getItem("userbio")
    const userPost=localStorage.getItem("userPosts")
    function handleSetting(){
      const updatepio=prompt(<form><input type='text'/></form>)
      
    }
    
    return (
  
      <Box>
        <Paper
          sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 650,
            flexGrow: 1,
            backgroundColor:"black",
            marginLeft:"100px"
          }}
        >
          <Grid container spacing={2} style={{color:"white"}}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
              <Avatar alt="Remy Sharp" src={avatar} sx={{ width: 120, height: 120 }}/>

              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
        {userName}
        </Grid>
        <Grid item xs={4}>
        <Button variant="contained" style={{backgroundColor:"white",color:"black"}}>Contained</Button>

        </Grid>
        <Grid item xs={4}>
        <Button variant="contained" style={{backgroundColor:"white",color:"black"}}>View action</Button>
        <SettingsIcon onClick={handleOpen}/>
        </Grid>
        <Grid item xs={4}>
{userPost} Posts      </Grid>
        <Grid item xs={4}>
525 followers   </Grid>
        <Grid item xs={4}>
1000 following      </Grid>

      </Grid>
      <Grid item xs={4}>
        <br/>
جنان <br/>
@aaup _edu <br/>
{bio} </Grid>   
             
            </Grid>
          </Grid>
   
        </Paper>
        <Test />
        <ProfileModal open={open} handleClose={handleClose} />

        </Box>
      );
    }
    
export default Profile

