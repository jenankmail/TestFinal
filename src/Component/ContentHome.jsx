import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import img from '../Assets/Avatars/steward.png'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
function ContentHome() {
  return (
    
    <Box sx={{ flexGrow: 1 ,backgroundColor:"black" }} >
    <Grid container spacing={2} >
      <Grid item xs={6} md={8}>
      <Stack direction="row" spacing={5} >
    <div style={{color:"white"}}><Avatar alt="boy" src="../Assets/Avatars/boy.png" style={{border:"solid" ,borderColor:"color-mix(rgb(254,218,117)& rgb(250,126,30)&rgb(214,41,118)&rgb(150,47,191)&rgb(79,91,213))"}}/>ahmad</div>
    <div  style={{color:"white"}}><Avatar alt="cock-man" src="../Assets/Avatars/cock-man.png" style={{border:"solid" ,borderColor:"white"}} /> ameer</div>
    <div style={{color:"white"}}><Avatar alt="man" src="../Assets/Avatars/man.png" style={{border:"solid" ,borderColor:"white"}} />noor</div>
    <div style={{color:"white"}}><Avatar alt="nurse" src="../Assets/Avatars/nurse.png" style={{border:"solid" ,borderColor:"white"}}  />doctor</div>
    <div style={{color:"white"}}><Avatar alt="shop-assistant" src="../Assets/Avatars/shop-assistant.png" style={{border:"solid" ,borderColor:"white"}} />samer</div>
    <div style={{color:"white"}}><Avatar alt="singer" src="../Assets/Avatars/singer.png" style={{border:"solid" ,borderColor:"white"}} />salam</div>
    <div style={{color:"white"}}><Avatar alt="steward" src="../Assets/Avatars/steward.png" style={{border:"solid" ,borderColor:"white"}} />biro</div>
  </Stack>
  <br/>
  <hr/>
  <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'black' }}>
      <Box sx={{ my: 5, mx: 2 , width: 400,
        height: 300,}} >
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
            <ListItem >
            <Avatar alt="Remy Sharp" src="../Assets/Avatars/steward.png" />
       <Typography style={{color:"white"}}>khalid kmail  .  2h</Typography>
       </ListItem>        
            </Typography>
          </Grid>
          <Grid item>
            
            <Typography gutterBottom variant="h6" component="div">
             <MoreHorizIcon style={{color:"white"}}/>
            
            </Typography>
          </Grid>
        </Grid>
<img src='../Assets/Avatars/steward.png' width={300} height={300}/>
<Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
            <ListItem >
            <Typography style={{color:"white" ,textAlign:"left"}}><FavoriteBorderIcon /><TelegramIcon/>
</Typography>
       </ListItem>        
            </Typography>
          </Grid>
          <Grid item>
            
          <Typography style={{color:"white" ,textAlign:"right"}}><BookmarkBorderIcon/>

</Typography>
          </Grid>
        </Grid>

<Typography style={{textAlign:"left" ,color:"white"}}>7888 like</Typography>
        <Typography color="white" variant="body2" style={{textAlign:"left" }} >
        <Typography style={{textAlign:"left" ,color:"white" ,fontSize:"1"}}>narjes</Typography>

          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
          just down the hall.
        </Typography>
      </Box>
      <Divider variant="middle" />
   
      
    </Box>

      </Grid>
      <Grid item xs={6} md={4}  style={{width:"800px"}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="../Assets/Avatars/steward.png" />
        </ListItemAvatar>
        <ListItemText style={{color:"white"}}
          primary="khalid kmail"
          
          secondary="followed by khalid"
          
        />
       </ListItem>
       <div style={{ display: "flex",color:"white" }}>
  <p >
    suggestions for you
  </p>
  <p >
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  </p>
  <p>
    see more
  </p>
</div>
    
       
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
         <ListItemText
        primary="Follow"
          sx={{color:"blue"}}
        />
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
         <ListItemText
        primary="Follow"
          sx={{color:"blue"}}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="../Assets/Avatars/steward.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary="jdvhsk jghash  cdf"/>
         <ListItemText
        primary="Follow"
          sx={{color:"blue"}}
        />
      </ListItem>
    </List>
  
      </Grid>
     
      
    </Grid>
  </Box>
 
  )
}

export default ContentHome