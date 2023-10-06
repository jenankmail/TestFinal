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
function Profile() {
    
    return (
        <Paper
          sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 650,
            flexGrow: 1,
            backgroundColor:"black"
            
          }}
        >
          <Grid container spacing={2} style={{color:"white"}}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
              <Avatar alt="Remy Sharp" src="../Assets/Avatars/steward.png"  sx={{ width: 120, height: 120 }}/>

              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
        iibrahhemi
        </Grid>
        <Grid item xs={4}>
        <Button variant="contained" style={{backgroundColor:"white",color:"black"}}>Contained</Button>

        </Grid>
        <Grid item xs={4}>
        <Button variant="contained" style={{backgroundColor:"white",color:"black"}}>View action</Button>
        <SettingsIcon/>
        </Grid>
        <Grid item xs={4}>
9 Posts      </Grid>
        <Grid item xs={4}>
525 followers   </Grid>
        <Grid item xs={4}>
1000 following      </Grid>

      </Grid>
      <Grid item xs={4}>
        <br/>
ابراهيم <br/>
@aaup _edu <br/>
the sky is limit </Grid>   
             
            </Grid>
          </Grid>
    <Test />
        </Paper>
        
      );
    }
    
export default Profile

