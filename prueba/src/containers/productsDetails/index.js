import Topbar from "../../components/topbar/index.js";
import StoragePicker from "../../components/storagePicker/index.js";
import { Breadcrumbs, Link, Typography } from '@mui/material'
import React from "react";
import './style.css'
import MobileDetails from "../../components/mobileDetails/index.js";

function ProductDetails() {
    return (
        <div className="App">
            <Topbar />
            <Breadcrumbs marginTop="10px" marginLeft="18px" aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="./Products">
                    Products
                </Link>
                <Link underline="hover" color="inherit" href="./productDetails">
                    ProductsDetails
                </Link>
            </Breadcrumbs>

            <MobileDetails />
            <StoragePicker />
        </div>
    );
}

export default ProductDetails;