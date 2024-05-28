import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CountriesDetails = () => {
  return (
    <div className="countries-details-div">
      <div className="back">
        <FontAwesomeIcon icon={faArrowLeft} />
        <Link>Back</Link>
      </div>
      <div className="countries-details">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default CountriesDetails;
