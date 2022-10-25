import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './style.css'
import ColorPicker from '../colorPicker'
//Internals
import './style.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import {useParams} from 'react-router-dom';


const queryClient = new QueryClient()

export default function Cards() {
  return (
    <QueryClientProvider client={queryClient}>
      <Data />
    </QueryClientProvider>
  );

  function Data() {

    
    const {id} = useParams();

    const { isLoading, error, data } = useQuery('repoData', () =>
      
      fetch(`https://front-test-api.herokuapp.com/api/product/${id}`).then(res =>
        res.json()
      )
    )
    console.log(id)
    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    function createData(features, dates) {
      return { features, dates };
    }

    const rows = [
      createData('Marca', data.brand),
      createData('Modelo', data.model),
      createData('precio', data.price),
      createData('Iso', data.os),
      createData('Peso', data.weight),
      createData('Resolución de pantalla', data.displayResolution),
      createData('Ram', data.ram),
      createData('Cámaras', data.primaryCamera),
      createData('Dimensiones', data.dimentions),
      createData('CPU', data.cpu),
      createData('Batería', data.battery),
    ]
    return (
      <div className="show-product">
        <div className="item-wrapper">
          <div className='container'>
            <img src={data.imgUrl} className="product-img" alt='img' />
          </div>
          <TableContainer component={Paper} className='tableC'>
            <Table sx={{ maxHeight: 50 }} aria-label="custom pagination table" className='table'>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.features}>
                    <TableCell>{row.imgUrl}</TableCell>
                    <TableCell >
                      {row.features}
                    </TableCell>
                    <TableCell style={{ width: 800 }} align="right">
                      {row.dates}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <ColorPicker/>
          </TableContainer>

        </div>
      </div>
    );
  }
}

