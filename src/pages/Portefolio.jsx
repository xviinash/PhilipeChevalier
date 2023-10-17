import { useEffect, useState } from "react";
import PortefolioComponent from "../components/PortefolioComponent";
import { Behance } from "../resources/Behance";

const Portefolio = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    new Behance().getProjectsByUser().then((rep) => setProject(rep.projects));
  }, []);

  return (
    <section>
      <h2>Behance project</h2>
      <div id="presentation_project">
          {project.map((e, index) => (
            <PortefolioComponent key={index} project={e} />
          ))}
      </div>
    </section>
  );
};

export default Portefolio;
