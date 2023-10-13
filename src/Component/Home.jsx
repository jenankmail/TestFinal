import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Explore from './Explore';
import ContentHome from './ContentHome';
import Profile from './Profile';
import Test from './Test';
import { Routes ,Route ,Link, Navigate } from 'react-router-dom';
import Messages from './Messages';
//import { Modal } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { useEffect } from 'react';
import { PrevLink } from './PrevLink';
import App from '../App';
import CreateModal from './CreateModal';
import SignUp from './LogIn';
import LogInInstagram from './SignUp';
import { useNavigate } from "react-router-dom";
import axios from "axios"
import LogoutIcon from '@mui/icons-material/Logout';
const drawerWidth = 240;

function Home() {
  const userName=localStorage.getItem("userName");
const avatar=localStorage.getItem("avatar")
  const [posts,setPosts]=useState([])
  const token = localStorage.getItem("token")
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
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate=useNavigate()
  let [ShowModal,SetShowModal]=useState(false)
function handleClosed(e){
  e.preventDefault()
  localStorage.removeItem('token')
  navigate('/')
}
  function CreateAlert(){
  SetShowModal(true);
  }

 function closeModal(){
  if(ShowModal){
  SetShowModal(false)}
 }
 
  let listheader =[{name:'Home' ,icon:<HomeIcon/>,link:"/home/contentHome"}, {name:'Search', icon:<SearchIcon/>,link:"*"}, {name:'Explore',icon:<ExploreIcon />,link:"/home/explore"}, {name:'Reels',icon:<SlideshowIcon/>,link:"/reels"},{name:'Messages',icon:<ChatIcon/>,link:"/home/massages"},{name:'Notification',icon:<FavoriteBorderIcon/>,link:"notification"}];
  const drawer = (
    <div style={{backgroundColor:"black" ,color:"white" ,height:"100%"}}>
      <Divider  />
      <List>
        {listheader.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon style={{color:"white"}}>
                {text.icon}
              </ListItemIcon>
              <Link to={text.link} style={{textDecoration:"none" ,color:"white"}}  >
               
              <ListItemText primary={text.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        
      </List>
    <div style={{paddingRight:"90px"}}>
    <ListItemIcon style={{color:"white"}}>
    <AddCircleOutlineIcon/>
              </ListItemIcon>
   
<button onClick={handleOpen} style={{border:"none",backgroundColor:"black",color:"white"}}><ListItemText primary="Create"/></button>

    </div>
    <div style={{paddingRight:"80px"}}>
    <ListItemIcon style={{color:"white"}}>
 
    <Avatar alt="Remy Sharp" src={avatar}  sx="small"/>
              </ListItemIcon>
              <Link to="/home/profile" style={{textDecoration:"none" ,color:"white"}}  >
              
             {userName}
              
               </Link>
              
    </div>
    <br/>
    <div style={{paddingRight:"90px"}}>
    <ListItemIcon style={{color:"white"}}>
    <LogoutIcon/>
              </ListItemIcon>
   
<button onClick={handleClosed} style={{border:"none",backgroundColor:"black",color:"white"}}><ListItemText primary="Logout"/></button>

    </div>
   
              
      <Divider />
      
    </div>
  );


  return (
    <>
    <Box sx={{ display: 'flex' ,backgroundColor:"black"}} >
     
      <Box
      style={{backgroundColor:"black"}}
        component="nav"
        sx={{ width: { sm:300 }, flexShrink: { sm: 0 },marginTop:{sm:100},backgroundColor:"black" ,paddingtop:{sm:15}}}
    
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="permanent"
          sx={{backgroundColor:"black",
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth ,backgroundColor:"black"},
          }}
          
        >
        <img src='../Assets/instagram-logo.png' alt='hello' style={{backgroundColor:"black" ,margin:"15px"}}/>
          {drawer}
          
          <CreateModal open={open} handleClose={handleClose} setPosts={setPosts} />
        </Drawer>

      </Box>
      <hr style={{marginRight:"19px",marginLeft:"0px"}}/>
      <Box sx={{backgroundColor:"black" }}  >
      
      <Routes>
         <Route  path="/contentHome" element={<ContentHome/>}/>
         <Route  path="/" element={<ContentHome/>}/>
         <Route  path="/explore" element={<Explore/>}/>
         <Route  path="/massages" element={<Messages/>}/>
         <Route  path="/profile" element={<Profile/>}/>
        

    </Routes>
   
      </Box>
     


    </Box>
   
    </>
  );
}

Home.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Home;