import StoragePicker from "../../components/storagePicker/index.js";
import { Breadcrumbs, Link  } from '@mui/material'
import React from "react";
import './style.css'
import MobileDetails from "../../components/mobileDetails/index.js";

function Product() {
    return (
        <div className="App">
            <Breadcrumbs marginTop="10px" marginLeft="18px" aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/products">
                    Products
                </Link>
                <Link underline="hover" color="inherit" href="/product">
                    ProductsDetails
                </Link>
            </Breadcrumbs>
            <MobileDetails />
            <StoragePicker /> 
        </div>
    );
}

export default Product;