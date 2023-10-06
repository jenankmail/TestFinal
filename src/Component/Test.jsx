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
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
      
      
          <Tab  sx={{color:"white"}} label={<div><CalendarViewMonthIcon style = { {verticalAlign : 'middle'} } /> Profile</div>}{...a11yProps(0)} />
          
          <Tab sx={{color:"white"}}  label={<div><BookmarkBorderIcon style = { {verticalAlign : 'middle'} } /> Reels </div>} {...a11yProps(1)} />
          <Tab sx={{color:"white"}}  label={<div>< PortraitIcon style = { {verticalAlign : 'middle'} } /> Tageed </div>} {...a11yProps(2)} />
        </Tabs>
       
      </Box>
      <CustomTabPanel value={value} index={0}>
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