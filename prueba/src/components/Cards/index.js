//Dependencies
import React, { Component } from 'react';
import find from 'lodash/find';
import { Link } from 'react-router-dom';
//Internals
import './style.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()
 
export default function Cards() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );

  function Example() {
    const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://front-test-api.herokuapp.com/api/product/').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log(data)

    return (
      <div className="show-product">
        <div className="item-wrapper">
          {data.map((data) => {
            if (
              data.brand === data.brand) {
              return(
                // <Link to={`/product/${data.id}`}>
                  <div key={data.id} className="item">
                    {/* <Link to={`/product/${data.id}`}> */}
                    <div className="product-img">
                      <img src={data.imgUrl} />
                    </div>
                    <div className="product-details">
                      <h1 id="product-name">{data.model}</h1>
                      <h4 id="product-description">{data.brand}</h4>
                    </div>
                    {/* </Link> */}
                    <div className="price-add">
                      <h5 id="product-price">${data.price}</h5>

                    </div>
                  </div>
                // </Link>
              )
            }
          })}
        </div>
      </div>
    );
  }
}