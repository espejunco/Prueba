import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Button } from "@mui/material";
import "./style.css";

export default function Topbar() {
  return (
    <div className="Navbar">
      <Tabs>
        <Tab label="LOGO" href="/" />
      </Tabs>
      <Button className="Troller">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 4V2H7V4M6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM16 16C14.9 16 14 16.9 14 18C14 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16ZM6.2 12.8V12.7L7.1 11H14.5C15.2 11 15.9 10.6 16.2 10L20.1 3L18.4 2L14.5 9H7.5L3.3 0H0V2H2L5.6 9.6L4.2 12C4.1 12.3 4 12.6 4 13C4 14.1 4.9 15 6 15H18V13H6.4C6.3 13 6.2 12.9 6.2 12.8Z"
            fill="#667085"
          />
        </svg>
      </Button>
    </div>
  );
}
