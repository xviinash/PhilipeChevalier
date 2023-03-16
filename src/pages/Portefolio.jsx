import { useEffect, useState } from "react";
import PortefolioComponent from "../components/PortefolioComponent";
import { Behance } from "../resources/Behance";

const Portefolio = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    new Behance().getProjectsByUser().then((rep) => setProject(rep.projects));
  }, []);

  return (
    <div id="portefolio_section">
      <section>
        <h2>Le Portfolio</h2>
        <div id="project_container">
          <div id="presentation_project">
            {project.map((e, index) => (
              <PortefolioComponent key={index} project={e}/>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portefolio;
