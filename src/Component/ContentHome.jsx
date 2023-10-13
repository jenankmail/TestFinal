import React, { useEffect, useState } from 'react'
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
import axios from "axios"
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import {  IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";


function ContentHome() {
  const navigate=useNavigate();
  const [posts,setPosts]=useState([])
  const [toggid,setToggid]=("");
  const token = localStorage.getItem("token")
  const [isFavorite, setIsFavorite] = useState(localStorage.getItem('like'));
  
localStorage.getItem('like',isFavorite);
  function handleToggleFavorite (id){
    
    setIsFavorite(!isFavorite);
    
  };
  
  console.log(token)
  useEffect(()=>{
    axios.get("http://16.170.173.197/posts", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setPosts(response.data.posts)
  }).catch((error) => {
    console.log("Error Fedching memories", error)
  })

  },[]);
  function addLike(postid){
    if(isFavorite){
    console.log("not like")
    }else{
      
      axios.get(`http://16.170.173.197/posts/likes/${postid}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
           const token = response.data.token;
           const existinglike=response.data.likes;
           const newlike=existinglike+1;
           axios.put(`http://16.170.173.197/posts/likes/${postid}`,{
            likes: newlike
           },{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((response) => {
            console.log(response)
          }).catch((error) => {
            console.log(error)
          })
  
        }).catch((error) => {
          console.log(error)
        })
    }
  }
  function handleDelete(postId){
    console.log(postId)
    axios 
      .request({ 
        method: "delete", 
        url: `http://16.170.173.197/posts/${postId}`, 
        data: { 
          id: postId, 
        }, 
        headers: { 
          Authorization: `Bearer ${token}`, 
        }, 
      }) 
      .then((response) => { 
     
 
      }) 
      .catch((error) => { 
        console.error("Error deleting post:", error); 
      }); 
 
    
    };
  const postsReverce=posts.slice().reverse();
  const [anchorEl, setAnchorEl] = useState(null);
 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function handleUpdate(id){
    const newDiscraption = prompt("please add the new disc");

    axios
      .request({
        method: "put",
        url: `http://16.170.173.197/posts/${id}`,
        data: {
          description: newDiscraption,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  }
  return (
    
    <Box sx={{ flexGrow: 1 ,backgroundColor:"black" }} >
    <Grid container spacing={2} >
      <Grid item xs={6} md={8}>
      <Stack direction="row" spacing={5} >
    <div style={{color:"white"}}><Avatar alt="boy" src="../Assets/Avatars/boy.png" style={{border:"solid" ,borderBlockColor:"color-mix(rgb(254,218,117)& rgb(250,126,30)&rgb(214,41,118)&rgb(150,47,191)&rgb(79,91,213))",color:" #874c82"}}/>ahmad</div>
    <div  style={{color:"white"}}><Avatar alt="cock-man" src="../Assets/Avatars/cock-man.png" style={{border:"solid" ,borderColor:"#874c82"}} /> ameer</div>
    <div style={{color:"white"}}><Avatar alt="man" src="../Assets/Avatars/man.png" style={{border:"solid" ,borderColor:"#874c82"}} />noor</div>
    <div style={{color:"white"}}><Avatar alt="nurse" src="../Assets/Avatars/nurse.png" style={{border:"solid" ,borderColor:"#874c82"}}  />doctor</div>
    <div style={{color:"white"}}><Avatar alt="shop-assistant" src="../Assets/Avatars/shop-assistant.png" style={{border:"solid" ,borderColor:"#874c82"}} />samer</div>
    <div style={{color:"white"}}><Avatar alt="singer" src="../Assets/Avatars/singer.png" style={{border:"solid" ,borderColor:"#874c82"}} />salam</div>
    <div style={{color:"white"}}><Avatar alt="steward" src="../Assets/Avatars/steward.png" style={{border:"solid" ,borderColor:"#874c82"}} />biro</div>
  </Stack>
  <br/>
  <hr/>
  
  {postsReverce.map((post, index)=>(
      <Box sx={{ my: 5, mx: 2 , width: 400,
        height: 300,marginBottom:"300px"}} >
        <Grid container alignItems="center" >
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
            <ListItem >
            <Avatar alt="Remy Sharp" src={post.user.avatar} style={{marginRight:"10px"}}/>
            <Typography style={{color:"white"}}>{post.user.userName}  .  2h</Typography>
       </ListItem>        
            </Typography>
          </Grid>
          <Grid item>
            
            <Typography gutterBottom variant="h6" component="div">
            <div>
      <Button
        aria-controls="three-dot-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon style={{color:"white"}}/>
      </Button>
      <Menu
        id="three-dot-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <button onClick={() => handleDelete(post.id)}>
        <MenuItem >
          
          Delete
        
        </MenuItem>
        </button>
        <MenuItem onClick={() => {
          // Handle the edit action here
          handleUpdate(post.id);
        }}>
          Edit
        </MenuItem>
      </Menu>
    </div>
            
            </Typography>
          </Grid>
        </Grid>
       
<img src={post.image} width={360} height={300}/>
<Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
            <ListItem >
            <Typography style={{color:"white" ,textAlign:"left"}}><a  onClick={()=>{
             addLike(post.id)
             handleToggleFavorite(post.id)
             
              }} >
          {isFavorite  ? <FavoriteIcon   style={{color:"red",fontSize:"22px"}}/> : <FavoriteBorderIcon  style={{color:"white",fontSize:"22px"}}/>}
        </a>
        <TelegramIcon/>
</Typography>
       </ListItem>        
            </Typography>
          </Grid>
          <Grid item>
            
          <Typography style={{color:"white" ,textAlign:"right"}}><BookmarkBorderIcon/>

</Typography>
          </Grid>
        </Grid>

<Typography style={{textAlign:"left" ,color:"white"}}>{post.likes.length} like</Typography>
        <Typography color="white" variant="body2" style={{textAlign:"left" }} >

          {post.description}
        </Typography>
       
      </Box>
       
     
 
    
))} 
  

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
         <ListItemText
        primary="Follow"
          sx={{color:"blue"}}
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
      <Typography style={{fontSize:"13px",color:"	#A8A8A8"}}>About.Help.Press.Api.Jobs.Privacy.Terms</Typography>
      <Typography style={{fontSize:"13px",marginRight:"45px",color:"	#A8A8A8"}}>Location.Language.Meta Verified</Typography>
      <br/>
      <Typography style={{fontSize:"13px",color:"	#A8A8A8"}}>2023 INSTGRAM FROM META</Typography>
    </List>
  
      </Grid>
     
     
    </Grid>
  </Box>
 
  )
}

export default ContentHome