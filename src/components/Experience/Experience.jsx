import React from "react";
import { ExperienceData } from "../../data/ExperienceData";



const Experience = () => {
  return (
    <>
      <div className="experience-timeline">
            {ExperienceData.map((experience) => (
              <div key={experience.id} className="experience-item">
                <div className="date">{experience.date}</div>
                <div className="content">
                  <h2>{experience.activity}</h2>
                  <p>{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
    </>
  );
};

export default Experience;






