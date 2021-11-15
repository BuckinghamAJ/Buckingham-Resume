import "../static/Experiences.css";
import { useState, useEffect } from "react";
import { EXPERIENCE_API_URL } from "../static/constants.js";
import Experience from "./Experience";

function Experiences({ refProp }) {
  //Store list of all experiences
  const [experiences, setExperiences] = useState();

  //Function to call Experience
  const getExperienceData = async () => {
    const response = await fetch("http://localhost:8000/experiences/").then(
      (response) => response.json()
    );

    console.log(response);

    // update the state
    setExperiences(response);
  };

  useEffect(() => {
    getExperienceData();
  }, []);

  return (
    <div className="container-fluid" ref={refProp}>
      {experiences &&
        experiences.map((experience) => (
          <div className="row experience-container" key={experience.id}>
            <Experience experience={experience} />
          </div>
        ))}
    </div>
  );
}

export default Experiences;
