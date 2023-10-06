import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
export default function Explore() {
  return (
    <ImageList sx={{ width: 900, height: 1000 }} cols={3} rowHeight={164}>
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