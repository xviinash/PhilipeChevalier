import React from "react";

const PortefolioComponent = ({ project }) => {

  

  return (
    <div href={project.url} target="_blank">
        <img src={project.covers.original_webp} alt={project.slug} />
        <div className="project_footer">
            <div>{project.name}</div>
            <span>{new Date(project.published_on * 1000).toLocaleDateString("fr")}</span>
            <div className="fields_container">
              {project.fields.map((e, index) => <div key={index} className="flieds">{e}</div> )}
            </div>
            <a href={project.url} target="_blank">En savoir plus</a>
        </div>
    </div>
  );
};

export default PortefolioComponent;
