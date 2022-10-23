import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import './style.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
 
 const queryClient = new QueryClient()
 
 export default function Cards() {
   return (
     <QueryClientProvider client={queryClient}>
       <Example />
     </QueryClientProvider>
   )
 }
 
 function Example() {
   const { isLoading, error, data } = useQuery('repoData', () =>
     fetch('https://front-test-api.herokuapp.com/api/product/ZmGrkLRPXOTpxsU4jjAcv').then(res =>
       res.json()
     )
   )
 
   if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + error.message

   console.log(data)
 
   return (
    <Card sx={{ maxWidth: 345 }} className='Card'>
      <CardActionArea>
        <CardActionArea>
          <CardMedia
            component="img"
            src={data.imgUrl}
            alt="CardMedia Image Example"
            height="260"
            title="CardMedia Image Example"
          />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
             {data.model} {data.brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.price}
          </Typography>
          <Button variant="outlined">Más</Button>
        </CardContent>
      </CardActionArea>
    </Card>
   )
 }