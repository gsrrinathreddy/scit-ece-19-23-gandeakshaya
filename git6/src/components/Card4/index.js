import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card4() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://img.freepik.com/premium-vector/time-management-logo_109327-310.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Time Management
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Time management is the process of planning and exercising conscious control of time spent on specific activities, 
          especially to increase effectiveness, efficiency, and productivity.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}