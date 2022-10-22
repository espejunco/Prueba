import ColorPicker from "../../components/colorPicker/index.js";
import DetailsCards from "../../components/detailsCards";
import StoragePicker from "../../components/storagePicker/index.js";
import React from "react";
import './style.css'

function Home() {
    return (
        <div className="App">
            <ColorPicker />
            <DetailsCards />
            <StoragePicker />
        </div>
    );
}

export default Home;