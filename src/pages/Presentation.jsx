import { useContext } from "react";
import DataContext from "../context/dataContext";
import IconComponant from "../components/IconComponant";

const Presentation = () => {
  const { presentation } = useContext(DataContext);

  return (
    <div id="presentation_section">
      <div id="phrase_general">
        <div>
          Hello, <br />
          I'm{" "}
          <span>
            {presentation.prenom} {presentation.nom}
          </span> <br/>
          aka <span>xviinash</span>
        </div>
        <h4 id="activite_presentation">{presentation.activite}</h4>
      </div>
      <div>
        <section>
          <h2>Turn me :) (it's comming)</h2>
          <img src={presentation.photo} alt={presentation.prenom} />
        </section>
      </div>
      <div id="reseaux_container">
        {presentation.resaux.map((e, index) => (
          <IconComponant icon={e} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Presentation;
