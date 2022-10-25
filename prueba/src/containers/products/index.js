import Cards from "../../components/Cards";
import React from "react";
import './style.css'
import { Breadcrumbs, Link } from '@mui/material'

function Products() {
    return (
        <div className="App">
            <Breadcrumbs marginTop="10px" marginLeft="18px" aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/products">
                    Products
                </Link>
            </Breadcrumbs>
            <Cards />

        </div>
    );
}

export default Products;
