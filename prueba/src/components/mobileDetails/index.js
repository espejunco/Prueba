import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './style.css'

function createData(features, dates ) {
  return { features, dates  };
}

const rows = [
  createData('Marca', 305),
  createData('Modelo', 452),
  createData('precio', 262),
  createData('Iso', 159),
  createData('Peso', 356),
  createData('Resolución de pantalla', 408),
  createData('Ram', 237),
  createData('Cámaras', 237),
  createData('Dimensiones', 237),
  createData('CPU', 237),
  createData('Batería', 237),

]

export default function MobileDetails() {

  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.features}>
              <TableCell component="th" scope="row">
                {row.features}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.dates}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
