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
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
//import Explore from './Explore'
import Masseges from './Messages'
import Explore from './Explore';
import ContentHome from './ContentHome';
import Profile from './Profile';
import Test from './Test';
import { Routes ,Route ,Link, Navigate } from 'react-router-dom';
import Messages from './Messages';
import { Modal } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { useEffect } from 'react';
import { PrevLink } from './PrevLink';
import App from '../App';
const drawerWidth = 240;

function Home() {
  const [PrevModal,SetPrevModal] =useState(null);

useEffect(()=>{
  if(PrevModal=='/mmo'){
    console.log("create")
  }else{
  <PrevLink.Provider  value={{link:PrevModal}}/>
 console.log(PrevModal)
  }
})
  let listheader =[{name:'Home' ,icon:<HomeIcon/>,link:"/home"}, {name:'Search', icon:<SearchIcon/>,link:"*"}, {name:'Explore',icon:<ExploreIcon />,link:"/explore"}, {name:'Reels',icon:<SlideshowIcon/>,link:"/reels"},{name:'Messages',icon:<ChatIcon/>,link:"/massages"},{name:'Notification',icon:<FavoriteBorderIcon/>,link:"notification"},{name:'Create',icon:<AddCircleOutlineIcon/>,link:"/mmo"},{name:'Khalid Kmail',icon:<Avatar alt="Remy Sharp" src="../Assets/Avatars/steward.png"  sx="small"/>,link:"/profile"}];
  const drawer = (
    <div style={{backgroundColor:"black" ,color:"white" ,height:"100%"}}>
      <Divider />
      <List>
        {listheader.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon style={{color:"white"}}>
                {text.icon}
              </ListItemIcon>
              <Link to={text.link} style={{textDecoration:"none" ,color:"white"}} onClick={()=>{
                SetPrevModal(text.link)
              }} >
               
              <ListItemText primary={text.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Box sx={{ display: 'flex' ,backgroundColor:"black"}}>
     
      <Box
        component="nav"
        sx={{ width: { sm:300 }, flexShrink: { sm: 0 },marginTop:{sm:100},backgroundColor:"black" ,paddingtop:{sm:15}}}
    
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          
        >
        <img src='../Assets/instagram-logo.png' alt='hello' style={{backgroundColor:"black" }}/>
          {drawer}
        </Drawer>
      </Box>
      <Box sx={{backgroundColor:"black" }}  >
        
      <Routes>
         <Route  path="/home" element={<ContentHome/>}/>
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