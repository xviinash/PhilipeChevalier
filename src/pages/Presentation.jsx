import { useContext } from "react";
import DataContext from "../context/dataContext";
import IconComponant from "../components/IconComponant";
import { ArrowDownToLine } from 'lucide-react';

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
        <p id="activite_presentation">{presentation.activite}</p>
      </div>
      <div>
        <section>
          <h2>Turn me :) (it's comming)</h2>
          <img src={presentation.photo} alt={presentation.prenom} />
        </section>
        <div id="lien_pdf">
          <a href="#"><ArrowDownToLine /> Portfolio [FR] (PDF)</a>
          <a href="#"><ArrowDownToLine /> Curriculum vitæ (PDF)</a>
        </div>
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
