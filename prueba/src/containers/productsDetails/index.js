import ColorPicker from "../../components/colorPicker/index.js";
import DetailsCards from "../../components/detailsCards";
import Topbar from "../../components/topbar/index.js";
import StoragePicker from "../../components/storagePicker/index.js";
import { Breadcrumbs, Link, Typography} from '@mui/material'
import React from "react";
import './style.css'

function ProductDetails() {
    return (
        <div className="App">
            <Topbar />
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Products
                </Link>

                <Typography color="text.primary">Products Details</Typography>
            </Breadcrumbs>
            <ColorPicker />
            <DetailsCards />
            <StoragePicker />
        </div>
    );
}

export default ProductDetails;