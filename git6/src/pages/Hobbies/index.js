import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function HOBBIES() {
  return (
    <ImageList sx={{ width: 500, height: 500}}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">HOBBIES</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://media.webdunia.com/_media/en/img/article/2020-10/22/full/1603375069-3701.jpg',
    title: 'Badminton',
    
    rows: 1,
    cols: 3,
    featured: true,
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/2/23/Lofi_girl_logo.jpg',
    title: 'Listening to Music',
    
  },
  {
    img: 'https://i.ytimg.com/vi/ndhOO5Jkhj0/maxresdefault.jpg',
    title: 'Drawing',
    
  },
  
];