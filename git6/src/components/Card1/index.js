import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card1() {
  return (
    <Card sx={{ maxWidth: 375 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://techedo.com/images/programming-img.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          C
          </Typography>
          <Typography variant="body2" color="text.secondary">
          C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. 
          C programming is an excellent language to learn to program for beginners.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}