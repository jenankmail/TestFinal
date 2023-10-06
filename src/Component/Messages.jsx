import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Button from '@mui/material/Button';

function Messages() {
  return (
    <Box >
    <Grid container spacing={2} xs >
    <Grid item xs={2} style={{backgroundColor:"black"}}>
    <Grid container alignItems="center">
        <Grid item xs>
          <Typography gutterBottom variant="h4" component="div">
          <ListItem >
          <Typography style={{color:"white" ,textAlign:"left"}}>jenan<KeyboardArrowDownIcon/>
</Typography>
     </ListItem>        
          </Typography>
        </Grid>
        <Grid item>
          
        <Typography style={{color:"white" ,textAlign:"right"}}><EditNoteIcon/>

</Typography>
        </Grid>
      </Grid>
      <hr />
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography gutterBottom  component="div">
          <ListItem >
          <Typography style={{color:"white" ,textAlign:"left"}}>masseges
</Typography>
     </ListItem>        
          </Typography>
        </Grid>
        <Grid item>
          
        <Typography style={{color:"white" ,textAlign:"right"}}>Request

</Typography>
        </Grid>
      </Grid>
      <List sx={{ width: '100%', maxWidth:400, bgcolor: 'black' ,color:"white" }}>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="../Assets/Avatars/steward.png" />
      </ListItemAvatar>
      <ListItemText
        primary="khalid kmail"
        
        secondary="followed by khalid"
        sm={{color:"white" }}
      />
      .2s
      
    </ListItem>
    
    <Divider variant="inset" component="li" />
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Travis Howard" src="../Assets/Avatars/steward.png" />
      </ListItemAvatar>
      <ListItemText 
        primary="Summer BBQ"
      secondary="jdhghgsjv djhvdsj"
      />
      .5s
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Cindy Baker" src="../Assets/Avatars/steward.png" />
      </ListItemAvatar>
      <ListItemText
        primary="Oui Oui"
        secondary="jdvhsk jghash  cdf"/>
      .7s
    </ListItem>
  </List>

 
    
    </Grid>

      

    <Grid item xs={7} style={{backgroundColor:"black" ,padding:"150px",width:"1500px"}}>
<br/>
<br/>
<br/><br/>
          <img src='../Assets/messengar-logo.png' alt='hello'  />
          <Typography style={{color:"white"}}>Your Masseges</Typography>
          <br/>
          <Typography style={{color:"#1D1D1D"}}>Send private photo and massege to a freiend or group</Typography>
<br/>
<Button variant="contained">Contained</Button>

        </Grid>
        </Grid>

  </Box>
);
}

export default Messages