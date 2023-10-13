import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import PortraitIcon from '@mui/icons-material/Portrait';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
 
return (
    
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}` }
     
      
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3}} >
          <Typography >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
 
};

function a11yProps(index) {
  
  return {
    id: `simple-tab-${index}`,
    
    'aria-controls': `simple-tabpanel-${index}`,
  
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
   
    setValue(newValue);
  };
  const [postUser,setPostuser]=useState([]);
  const token = localStorage.getItem("token")
  const [posts,setPosts]=useState([])
  const userId=localStorage.getItem("userId")

  const fetchData = () => {
    axios.get("http://16.170.173.197/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setPostuser(response.data.posts)
        }).catch((error) => {
      console.log("Error Fedching memories", error)
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  const postsUser=postUser.filter((post)=>post.user.id==userId);
  function updateicon(id){
    const description=prompt("enter new description")
        axios 
      .request({ 
        method: "put", 
        url: `http://16.170.173.197/posts/${id}`, 
        data: { 
          description:description, 
          
 
 
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
        console.error("Error deleting post:", error); 
      });
  }
  function deleteicon(id){
    axios 
    .request({ 
      method: "delete", 
      url: `http://16.170.173.197/posts/${id}`, 
      data: { 
        id: id, 
      }, 
      headers: { 
        Authorization: `Bearer ${token}`, 
      }, 
    }) 
    .then((response) => { 
      fetchData(); 

    }) 
    .catch((error) => { 
      console.error("Error deleting post:", error); 
    }); 
  }
 function handleDelete(postId){
  const newDiscraption = prompt("please enter what do you want to do delete or edit ");
if(newDiscraption=="delete"){
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
      }); }
      else if(newDiscraption=="edit"){
        const description=prompt("enter new description")
        axios 
      .request({ 
        method: "put", 
        url: `http://16.170.173.197/posts/${postId}`, 
        data: { 
          description:description, 
          
 
 
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
 
    
    };
  return (
    <Box sx={{ width: '100%'}} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{marginLeft:"280px"}} >
      
      
          <Tab  style={{color: value === 0 ? 'white' : '#1D1D1D', }} label={<div><CalendarViewMonthIcon style = { {verticalAlign : 'middle'} } /> Profile</div>}{...a11yProps(0)} />
          
          <Tab style={{color: value === 1  ? 'white' : '#1D1D1D', }}  label={<div><BookmarkBorderIcon style = { {verticalAlign : 'middle'} } /> Reels </div>} {...a11yProps(1)} />
          <Tab style={{color: value === 2 ? 'white' : '#1D1D1D', }}  label={<div>< PortraitIcon style = { {verticalAlign : 'middle'} } /> Tageed </div>} {...a11yProps(2)} />
        </Tabs>
        <hr style={{marginTop:"0" ,borderColor:"#1D1D1D"}}/>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <ImageList sx={{ width: 900, height: 1000 }} cols={3} rowHeight={350}>
      {postsUser.map((item) => (
        <ImageListItem key={item.img} >
       <div><DeleteIcon style={{color:"white",marginRight:"10px"}}onClick={()=>{deleteicon(item.id)}} />
        <EditIcon style={{color:"white",marginRight:"90px"}}onClick={()=>{updateicon(item.id)}}/></div>
          <img
           onClick={()=>{handleDelete(item.id)}}
            srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
            alt={item.description}
            loading="lazy"
           style={{margin:"20px",width:"250px",height:"200px"}}
          />
        </ImageListItem>
      ))}
    </ImageList>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <ImageList sx={{ width: 900, height: 1000 }} cols={4} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <ImageList sx={{ width: 900, height: 1000 }} cols={4} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
      </CustomTabPanel>
    </Box>
  );
}

const postUser2=[];
const itemData = [
    {
      img: '../Assets/ExplorePics/explorePic1.avif',
      title: 'explorePic1',
    },
    {
      img: '../Assets/ExplorePics/explorePic10.webp',
      title: 'explorePic10',
    },
    {
      img: '../Assets/ExplorePics/explorePic11.webp',
      title: 'explorePic11',
    },
    
    {
      img: '../Assets/ExplorePics/explorePic12.webp',
      title: 'explorePic12',
    },
    
    {
      img: '../Assets/ExplorePics/explorePic13.webp',
      title: 'explorePic13',
    },
    
    {
      img: '../Assets/ExplorePics/explorePic14.webp',
      title: 'explorePic14',
    },
    {
      img: '../Assets/ExplorePics/explorePic2.avif',
      title: 'explorePic2',
    },
    {
      img: '../Assets/ExplorePics/explorePic3.avif',
      title: 'explorePic3',
    },
    {
      img: '../Assets/ExplorePics/explorePic4.avif',
      title: 'explorePic4',
    },
    {
      img: '../Assets/ExplorePics/explorePic5.avif',
      title: 'explorePic5',
    },
    {
      img: '../Assets/ExplorePics/explorePic6.avif',
      title: 'explorePic6',
    },
    {
      img: '../Assets/ExplorePics/explorePic7.avif',
      title: 'explorePic7',
    },
  
  ];