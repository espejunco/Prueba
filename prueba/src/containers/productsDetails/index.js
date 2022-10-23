import ColorPicker from "../../components/colorPicker/index.js";
import Topbar from "../../components/topbar/index.js";
import StoragePicker from "../../components/storagePicker/index.js";
import { Breadcrumbs, Link, Typography} from '@mui/material'
import React from "react";
import './style.css'
import MobileDetails from "../../components/mobileDetails/index.js";

function ProductDetails() {
    return (
        <div className="App">
            <Topbar />
            <Breadcrumbs  marginTop="10px" marginLeft="18px" aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Products
                </Link>
                <Typography color="text.primary">Products Details</Typography>
            </Breadcrumbs>
            <MobileDetails />
            <ColorPicker />
            <StoragePicker />
        </div>
    );
}

export default ProductDetails;