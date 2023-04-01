import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card5() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://cdn1.vectorstock.com/i/1000x1000/43/60/toddlers-communication-skills-concept-icon-vector-32784360.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Communication Skills
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Communication skills are the abilities you use when giving and receiving different kinds of information
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}