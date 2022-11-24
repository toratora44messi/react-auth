import { Link } from "react-router-dom";
import React from "react"
import RestrictToolsLink_Link from "./RestrictToolsLink";
import Autocomplete_selector from "./mui_components/autocomplete";
import {GroupSizesColors, UploadButtons} from "./mui_components/button";
import { ColorCheckboxes } from "./mui_components/Checkbox";
import { FloatingActionButtonZoom, TabPanel } from "./mui_components/FloatingActionButton";
import { ImageAvatars } from "./mui_components/Avatar";
import { BadgeMax } from "./mui_components/Badge";

const Mui_Comp_Study = () => {
    return(
        <>
        <h2>Autocomplete</h2>
        <Autocomplete_selector /> 
        <h2>Button</h2>
        <UploadButtons />
        <h2>Button Group</h2>
        <GroupSizesColors />
        <h2>Checkbox</h2>
        <ColorCheckboxes />
        <h2>Floating Action Button</h2>
        <FloatingActionButtonZoom />
        <h2>Abatar</h2>
        <ImageAvatars />
        <h2>Badge</h2>
        <BadgeMax />
        <h2>Badge</h2>
        <h2>Badge</h2>
        <h2>Badge</h2>
        <h2>Badge</h2>
        </>
    );
}

export default Mui_Comp_Study