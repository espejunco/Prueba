//Dependencies
import React from 'react';
//Internals
import './style.css';
import { useQuery } from 'react-query'
import { Link } from "react-router-dom";

export default function Cards() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://front-test-api.herokuapp.com/api/product').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className='item-wrapper'>
      {data.map((data) => {
        return (
          <div key={data.id} className="item">
            <div className="images">
              <Link to={`/product/${data.id}`}>
                <img src={data.imgUrl} className='image' alt='img-product' />
              </Link>
            </div>
            <div className="product-details">
              <h4>{data.model}</h4>
              <h5>{data.brand}</h5>
              <h2>€{data.price}</h2>

              <button className="add">Add to Cart</button>

            </div>
          </div>
        )
      }
      )}
    </div>
  );
}