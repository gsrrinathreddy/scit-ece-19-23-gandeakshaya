import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card2() {
  return (
    <Card sx={{ maxWidth: 375 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://play-lh.googleusercontent.com/vzHVyL8G7birnPZ0zuCQQ2uDxuLIXzYOUGjFDFzIqfx-ww1fq8IysoEiWzhWI3Dw08g"
      
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          HTML
          </Typography>
          <Typography variant="body2" color="text.secondary">
          HTML is the standard markup language for Web pages.With HTML you can create your own Website.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}