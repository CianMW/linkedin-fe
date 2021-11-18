import {Button} from "react-bootstrap"
import { Link } from "react-router-dom"




const DownloadCSV = ({user}) =>{

  

    return(
        <>
        <a href={ process.env.REACT_APP_URL +`users/${user._id}/csv`} target="_blank">
        <button className="profile-button">
        Download as CSV
        </button>
        </a>
        </>
    )
}

export default DownloadCSV