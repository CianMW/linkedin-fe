import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DownloadPdf = ({ currentUser }) => {
  return (
    <><a href={process.env.REACT_APP_URL + `users/${currentUser._id}/pdf` }target="_blank">
      <button
        className="profile-button pencil-button"
       
      >
        <i class="bi bi-file-earmark-arrow-down-fill"></i>
      </button>
      </a>

    </>
  );
};

export default DownloadPdf;
