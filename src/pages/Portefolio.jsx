import { useEffect, useState } from "react";
import { Behance } from "../resources/Behance";

const Portefolio = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    new Behance().getProjectsByUser().then((rep) => setProject(rep.projects));
  }, []);

  return (
    <div id="portefolio_section">
      <section>
        <h2>Le Portefolio</h2>
        <div id="project_container">
          <div id="presentation_project">
            {project.map((e, index) => (
              <a href={e.url} target="_blank">
                <img key={index} src={e.covers.original} alt={e.slug} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portefolio;
