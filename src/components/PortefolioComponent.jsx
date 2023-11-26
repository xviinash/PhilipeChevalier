import React from "react";
import { ArrowDownRight } from "lucide-react";

const PortefolioComponent = ({ project }) => {

  return (
    <a href={project.url} target="_blank">
      <img src={project.covers['404_webp']} alt={project.slug} />
      <div className="project_footer">
        <div className="arrow_project"> <ArrowDownRight /> Open with Behance</div>
        <h4>{project.name}</h4>
        <div className="fields_container">
          {project.fields.map((e, index) => <div key={index} className="flieds">{e}</div>)}
        </div>
      </div>
    </a>
  );
};

export default PortefolioComponent;
