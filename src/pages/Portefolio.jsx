import { useEffect, useState } from "react";
import { Behance } from "../resources/Behance";

const Portefolio = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    new Behance().getProjectsByUser().then((rep) => setProject(rep.projects));
  }, []);

  return (
    <section>
      <h2>Le Portefolio</h2>
      <div id="project_container">
        <div id="presentation_project">
          {project.map((e, index) => (
            <img key={index} src={e.covers.original} alt={e.slug} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portefolio;
