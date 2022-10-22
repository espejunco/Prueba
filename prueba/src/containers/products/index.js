import Card from "../../components/detailsCards";
import Topbar from "../../components/topbar";
import React from "react";
import './style.css'

function Home() {
    return (
        <div className="App">
            <Topbar />
            <Card />
        </div>
    );
}

export default Home;