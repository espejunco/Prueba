import {React, useState }from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import './style.css'
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
    const [selectedStorage, setSelectedStorage] = useState();
    const [selectedColor, setSelectedColor] = useState([0]);
    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    function createData(features, dates) {
      return { features, dates };
    }

    const options = data.options
    const storages = options.storages
        const colors = options.colors

    const handleSelectColor = (e) => {
      setSelectedColor(e.target.value);
    };

  const handleSelectStorage = (e) => {
    setSelectedStorage(e.target.value);
  };
    const rows = [
      createData('Marca', data.brand),
      createData('Modelo', data.model),
      createData('precio', data.price),
      createData('Iso', data.os),
      createData('Peso', data.weight),
      createData('Resolución de pantalla', data.displayResolution),
      createData('Ram', data.ram),
      // eslint-disable-next-line 
      createData('Cámaras', ("   trasera:   " + data.primaryCamera + "  ~\n  " + "   Frontal:   " + data.secondaryCmera)),
      createData('Dimensiones', data.dimentions),
      createData('CPU', data.cpu),
      createData('Batería', data.battery),
    ]

    return (
      <div className="show-product">
        <div className="container">
          <div className="container-2">
            <img className="product-img" src={data.imgUrl}  alt='img' />
            <button class="btncl">Add to Cart</button>
            </div>
            <div className='bodyclass'>
            <h5>Características</h5>
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
      <div>
      <h5>Colores</h5>
      <div className="storages_list">
        {colors.map((color) => (
          <label className='label'>
            <input
              key={color.code}
              type="radio"
              value={color.code}
              name="color"
              defaultChecked={selectedColor === color.code}
              onChange={handleSelectColor}
            />{" "}
            {color.name}
          </label>
        ))}
      </div>

      </div>
      <div>
      <h5>Almacenamiento</h5>
      <div className="storages_list">
        {storages.map((storage) => (
          <label className='label'>
            <input
              key={storage.code}
              type="radio"
              value={storage.code}
              name="storage"
              defaultChecked={selectedStorage === storage.code}
              onChange={handleSelectStorage}
            />{" "}
            {storage.name}
          </label>
        ))}
      </div>
      </div>
          </div>
        </div>
      </div>
    );
  }
}

