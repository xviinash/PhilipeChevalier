import { useEffect, useState } from "react";
import PortefolioComponent from "../components/PortefolioComponent";
import { Behance } from "../resources/Behance";
import Titre from "../components/TitreComponant";

const Portefolio = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    new Behance().getProjectsByUser().then((rep) => setProject(rep.projects));
  }, []);

  return (
    <section>
      <Titre titre={"Behance project"}/>
      <div id="presentation_project">
          {project.map((e, index) => (
            <PortefolioComponent key={index} project={e} />
          ))}
      </div>
    </section>
  );
};

export default Portefolio;
