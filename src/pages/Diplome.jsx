import { useContext } from "react";
import DiplomeCompnent from "../components/DiplomeCompnent";
import DataContext from "../context/dataContext";
import Titre from "../components/TitreComponant";

const Diplome = () => {
    const { apropos } = useContext(DataContext);

    return (
        <section>
            <Titre titre={"Education"}/>
            <div>
                {apropos.parcours.map((e, index) => (
                    <DiplomeCompnent parcours={e} key={index} />
                ))}
            </div>
        </section>
    );
};

export default Diplome;
