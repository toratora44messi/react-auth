import { Link } from "react-router-dom";
import React from "react"
import RestrictToolsLink_Link from "./RestrictToolsLink";

const Fax_Select = () => {
    const isAll = true;
    return(
        <>
            <h3>Fax Restrict Setting</h3>
            <div>
            <RestrictToolsLink_Link isAll={true}/>
            </div>
        </>
    );

};

export default Fax_Select