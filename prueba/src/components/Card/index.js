import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import './style.css';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className='Card'>
      <CardActionArea>
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://picsum.photos/400/300"
            alt="CardMedia Image Example"
            height="260"
            title="CardMedia Image Example"
          />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Marca y modelo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $$$
          </Typography>
          <Button variant="outlined">Más</Button>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
