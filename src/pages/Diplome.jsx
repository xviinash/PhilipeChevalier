import { useContext } from "react";
import DiplomeCompnent from "../components/DiplomeCompnent";
import ParagrapheComponant from "../components/ParagrapheComponant";
import DataContext from "../context/dataContext";

const Diplome = () => {
    const { apropos } = useContext(DataContext);

    return (
        <section>
            <h2>Education</h2>
            <div>
                {apropos.parcours.map((e, index) => (
                    <DiplomeCompnent parcours={e} key={index} />
                ))}
            </div>
        </section>
    );
};

export default Diplome;
