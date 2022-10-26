import { Breadcrumbs, Link  } from '@mui/material'
import React from "react";
import './style.css'
import MobileDetails from "../../components/mobileDetails/index.js";

function Product() {
    
    return (
        <div className="App">
                <Breadcrumbs marginTop="40px" marginLeft="25px" aria-label="breadcrumb" zIndex='1' position='fixed' backgroundColor='white'>
                <Link underline="hover" color="inherit" href="/" fontSize='12px'>
                    Products
                </Link>
                <Link underline="hover" color="inherit" fontSize='12px' href="#">
                    Products Details
                </Link>
            </Breadcrumbs>
            <MobileDetails/>
        </div>
    );
}

export default Product;