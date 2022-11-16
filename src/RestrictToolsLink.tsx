import React from "react"
import { Link } from "react-router-dom"

const RestrictToolsLink_Link = ({isAll}: {isAll: boolean}) => {
    if (isAll===true) {
        return(
            <>
            <GetAllLink />
            </>
        )
    } else {
        return(
            <>
            <GetAppLink />
            </>
        )
    }
}

const GetAllLink = () => {
    return(
        <div>
        Restrict Tools <Link to={`/`}>Topへ戻る</Link>
        <GetAppLink/>
        </div>      
    )

}

const GetAppLink = () => {
    return(
        <div>
            <Link to={`/Copy`}>Copy</Link>
            <hr/>
            <Link to={`/Fax/`}>Fax</Link>
        </div>
    )
}

export default RestrictToolsLink_Link