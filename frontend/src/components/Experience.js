import { BACKEND_URL } from "../static/constants";
import "../static/Experience.css";
import { useState } from "react";

function Experience({ experience }) {
  const [showAccomplishments, setshowAccomplishments] = useState(false);

  function alternateAccomplishments() {
    {
      showAccomplishments
        ? setshowAccomplishments(false)
        : setshowAccomplishments(true);
    }
  }

  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <div className="col-sm-1 col-md-2">
        <img
          src={`${BACKEND_URL}${experience.companyLogo}`} // Undefinied URL
          alt={experience.company}
          className="roundCompanyLogo img-fluid"
        />
      </div>
      <div className="col-sm-11 col-md-10 personalExperience">
        <div className="divTitleLogo">
          <h5 className="title">{experience.company}</h5>
          <span className="bigDot">&#9679;</span>
          <h6 className="nextToTitle">
            {experience.location.city}, {experience.location.stateAbbreviation}
          </h6>
          <span className="bigDot">&#9679;</span>
          <h6 className="nextToTitle">
            {year === experience.endYear
              ? `${experience.startYear} - Current`
              : `${experience.startYear} - ${experience.endYear}`}
          </h6>
        </div>
        <p className="companyMission fw-light">{experience.companyMission}</p>
        <h4>{experience.title}</h4>
        <p className="fw-light">{experience.summary}</p>
        <button
          className="btn btn-accomplishments"
          onClick={alternateAccomplishments}
        >
          Key Achievements
        </button>
        <ul
          className={
            showAccomplishments
              ? "accomplishments active pt-3"
              : "accomplishments"
          }
        >
          {showAccomplishments &&
            experience.accomplishments.map((accomplishment) => (
              <li className="singleAccomplishment" key={accomplishment.id}>
                {accomplishment.accomplishment}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Experience;
