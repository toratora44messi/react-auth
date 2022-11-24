import React from "react";
import { color } from "@mui/system";
import { Link } from "react-router-dom";
import './App.css'
import { pink } from "@mui/material/colors";
import { Battery1Bar } from "@mui/icons-material";
import Autocomplete_selector from "./mui_components/autocomplete";

const Copy_Select = () => {
    return(
        <>
        <h3>Copy Restrict Setting</h3>
        <div>
            <Link to={`/`}>Restrict Tools Top</Link>へ戻る
        </div>
        <h4>button study CSS</h4>
        <button className="button">
            <img src ={"./../img/b1.png"}/>
            拡縮なし
        </button>
        <h3>MUI Autocomplete</h3>
        <Autocomplete_selector />
        </>
    );

};

export default Copy_Select