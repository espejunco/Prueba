//Dependencies
import React from 'react';
//Internals
import './style.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { Outlet, Link } from "react-router-dom";

const queryClient = new QueryClient()

export default function Cards() {
  return (
    <QueryClientProvider client={queryClient}>
      <Group /> 
      </QueryClientProvider>
  );

  function Group() {
    const { isLoading, error, data } = useQuery('repoData', () =>
      fetch('https://front-test-api.herokuapp.com/api/product').then(res =>
        res.json()
      )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
      <div className="show-product">
        <div className="item-wrapper">
          {data.map((data) => {
            
            if (data.brand === data.brand) {
              return (
                
                <div key={data.id} className="item">

                  <div className="product-img">
                    <Link to={`/product/${data.id}` }>
                    <img src={data.imgUrl} />
                  </Link>
                </div>
                <div className="product-details">
                    <h1 id="product-name">{data.model}</h1>
                    <h4 id="product-description">{data.brand}</h4>
                  </div><div className="price-add">
                    <h5 id="product-price">${data.price}</h5>

                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    
    );
  }
}