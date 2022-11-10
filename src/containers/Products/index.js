import Cards from "../../components/Cards";
import React from "react";
import "./style.css";
import { Breadcrumbs, Link } from "@mui/material";

function Products() {
  return (
    <div className="App">
      <Breadcrumbs
        marginTop="10px"
        marginLeft="25px"
        aria-label="breadcrumb"
        zIndex="1"
        position="fixed"
        backgroundColor="white"
        width="150%"
      >
        <Link underline="hover" color="inherit" href="/" fontSize="12px">
          Products
        </Link>
      </Breadcrumbs>
      <Cards />
    </div>
  );
}

export default Products;
