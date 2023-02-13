import { useContext } from "react";
import DataContext from "../context/dataContext";

const Presentation = () => {
    const {presentation} = useContext(DataContext);

    return (
        <section>
            <div>
                <div>
                    Bonjour,
                    Je suis <span>{presentation.prenom} {presentation.nom}</span>
                </div>
                <div>CV</div>
            </div>
            <img src={presentation.photo} alt={presentation.prenom} />
            <div>
                <img src={presentation.resaux[0].icon} alt={presentation.resaux[0].name} />
                <img src={presentation.resaux[1].icon} alt={presentation.resaux[1].name} />
            </div>
        </section>
    );
};

export default Presentation;