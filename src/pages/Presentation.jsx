import { useContext } from "react";
import DataContext from "../context/dataContext";
import IconComponant from "../components/IconComponant";

const Presentation = () => {
    const {presentation} = useContext(DataContext);

    return (
        <section id="presentation_section">
            <div id="phrase_general">
                <div>
                    Bonjour,
                    Je suis <span>{presentation.prenom} {presentation.nom}</span>
                </div>
                <div>CV</div>
            </div>
            <div>
                <img src={presentation.photo} alt={presentation.prenom} />
            </div>
            <div>
                {presentation.resaux.map((e, index) => (
                    <IconComponant icon={e} key={index}/>
                ))}
            </div>
        </section>
    );
};

export default Presentation;