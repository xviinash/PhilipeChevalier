import { useContext } from "react";
import DataContext from "../context/dataContext";
import IconComponant from "../components/IconComponant";
import { ArrowDownToLine, ArrowDownRight } from 'lucide-react';

const Presentation = () => {
  const { presentation } = useContext(DataContext);

  return (
    <section id="presentation_section">
      <div id="phrase_general">
        <div>
          Hello, <br />
          I'm{" "}
          <span>
            {presentation.prenom} {presentation.nom}
          </span> <br />
          aka <span>xviinash</span>
        </div>
        <p id="activite_presentation">{presentation.activite}</p>
      </div>
      <section>
        <h2>Turn me :) (it's comming)</h2>
        <img src={presentation.photo} alt={presentation.prenom} />
      </section>
      <div id="lien_pdf">
        <a href="#"><ArrowDownToLine /> Portfolio [FR] (PDF)</a>
        <a href="#"><ArrowDownToLine /> Curriculum vitæ (PDF)</a>
      </div>
      <div id="reseaux_container">
        {presentation.resaux.map((e, index) => (
          <IconComponant icon={e} key={index} />
        ))}
      </div>
      <a id="lien_youtube" href="https://www.youtube.com/@xviinash/" target="_blank"><ArrowDownRight /> Check my latest project on YouTube </a>
    </section>
  );
};

export default Presentation;
