import { useContext } from "react";
import DiplomeCompnent from "../components/DiplomeCompnent";
import IconComponant from "../components/IconComponant";
import ParagrapheComponant from "../components/ParagrapheComponant";
import DataContext from "../context/dataContext";

const Apropos = () => {
  const { apropos } = useContext(DataContext);

  return (
    <section>
      <h2>A Propos</h2>
      <div>
        <div>
          <img src="src/assets/icons/sections/diplome.svg" alt="diplome" />
        </div>
        {apropos.parcours.map((e, index) => (
          <DiplomeCompnent parcours={e} key={index} />
        ))}
      </div>
      <div>
        <div>
          <img src="src/assets/icons/sections/parametre.svg" alt="parametre" />
        </div>
        {apropos.logiciel.map((e, index) => (
          <IconComponant icon={e} key={index} />
        ))}
      </div>
      <div>
        <div>
          <img
            src="src/assets/icons/sections/information.svg"
            alt="information"
          />
        </div>
        <div>
          {apropos.information.map((e, index) => (
            <ParagrapheComponant contain={e} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apropos;
