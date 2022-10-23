import Cards from "../../components/Card/index.js";
import Topbar from "../../components/topbar";
import React from "react";
import './style.css'
import { Breadcrumbs, Link } from '@mui/material'

function Products() {
    return (
        <div className="App">
            <Topbar />
            <Breadcrumbs  marginTop="10px" marginLeft="18px" aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Products
                </Link>
            </Breadcrumbs>
            <Cards />

        </div>
    );
}

export default Products;