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
import CommentIcon from '@mui/icons-material/Comment';
import commentIcon from '../Assets/commont.png';
function ContentHome() {
  const navigate=useNavigate();
  const [posts,setPosts]=useState([])
  const [postSelected,setPostSelected]=useState(0);
  const [toggid,setToggid]=("");
  const [menu,setMenu]=useState(false);
  const [menuClose,setMenuClose]=useState(false);
  const token = localStorage.getItem("token")
  const [isFavorite, setIsFavorite] = useState(localStorage.getItem('like'));
  const avatar=localStorage.getItem("avatar");
  const [likeId,setLikeId]=useState("");
localStorage.setItem('like',isFavorite);
  function handleToggleFavorite (id){
    
    setIsFavorite(!isFavorite);
    
  };
  
  const fetchData = () => {
    axios.get("http://16.170.173.197/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setPosts(response.data.posts)
    }).catch((error) => {
      console.log("Error Fedching memories", error)
    })
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  
  function addLinkePost(id){
    console.log(id)
    setLikeId(id);
    
    setIsFavorite(!isFavorite);
    axios 
    .request({ 
      method: "post", 
      url: `http://16.170.173.197/posts/like/${id}`, 
      data: { 
        id: id, 
      }, 
      headers: { 
        Authorization: `Bearer ${token}`, 
      }, 
    }) 
      .then((response) => {
        console.log(response)
        fetchData();

      }).catch((error) => {
        console.log(error)
      }) 
  }
  function handleDelete(){
    axios 
      .request({ 
        method: "delete", 
        url: `http://16.170.173.197/posts/${postSelected}`, 
        data: { 
          id: postSelected, 
        }, 
        headers: { 
          Authorization: `Bearer ${token}`, 
        }, 
      }) 
      .then((response) => { 
     
        console.log(postSelected)
        fetchData();
      }) 
      .catch((error) => { 
        console.error("Error deleting post:", error); 
        const errorMessage = "An error occurred while deleting the post , Make sure the post is for you: " + error;
        window.alert(errorMessage);
      }); 
 
    
    };
  const postsReverce=posts.slice().reverse();
  const [anchorEl, setAnchorEl] = useState(null);
 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setMenu(false);
    setAnchorEl(null);
  };
  function handleUpdate(){
    const newDiscraption = prompt("please add the new disc");

    axios
      .request({
        method: "put",
        url: `http://16.170.173.197/posts/${postSelected}`,
        data: {
          description: newDiscraption,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        fetchData();
      })
      .catch((error) => {
    const errorMessage = "An error occurred while deleting the post: " + error;
  window.alert(errorMessage);
      });
  }
  function handleverticon(id){
    console.log(id)
    setPostSelected(id);
    setMenu(true);
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
        <MoreVertIcon style={{color:"white"}} onClick={()=>{handleverticon(post.id)}}/>
      </Button>
      <Menu
    id="three-dot-menu"
    anchorEl={anchorEl}
    open={menu}
    onClose={handleClose}
  >
    
    <MenuItem onClick={() => handleDelete()} >
      
      Delete
    
    </MenuItem>
   
    <MenuItem onClick={() => {
      // Handle the edit action here
      handleUpdate();
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
             
            addLinkePost(post.id)
             
              }} >
              
                  {!isFavorite  ? <FavoriteIcon   style={{color:"red",fontSize:"22px"}}/> : <FavoriteBorderIcon  style={{color:"white",fontSize:"22px"}}/>}
                  

                  

        </a>
        <CommentIcon style={{width:"20px",height:"20px"}}/>
        <TelegramIcon />
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
          secondary= {<span style={{ color:"#A8A8A8" }}>follow by said</span>}
         
        />
         <ListItemText
        primary="Follow"
         
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
          
          secondary={<span style={{ color:"#A8A8A8" }}>followed by mohammad</span>}

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
          primary="Ward Daraghmeh"
        secondary= {<span style={{ color:"#A8A8A8" }}>followed by moath</span>}
       
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
        <ListItemText style={{color:"#FFF"}}
          primary="Batool Azzam"
          secondary={<span style={{ color:"#A8A8A8" }}>follow by anwar</span>}
          />
                 

         <ListItemText
        primary="Follow"
          sx={{color:"blue"}}
        />
      </ListItem>
      <br/>
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