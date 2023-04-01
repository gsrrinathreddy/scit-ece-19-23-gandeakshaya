import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://logos-world.net/wp-content/uploads/2020/03/Microsoft-Word-Logo.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          MS WORD
          </Typography>
          <Typography variant="body2" color="text.secondary">
          MS Word is a popular word processor and one of the most comprehensive solutions to creating documents on the market. 
          You can produce a wide variety of documents with it, including reports, letters, resumes, and more. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}