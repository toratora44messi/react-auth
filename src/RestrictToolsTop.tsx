import { Link } from "react-router-dom"
import RestrictToolsLink_Link from "./RestrictToolsLink"

const RestrictToolsTop_index = () => {
    return(
        <>
        <h3>Restrict Tools</h3>
        <RestrictToolsLink_Link isAll={false}/>
        </>
    )
}

export default RestrictToolsTop_index