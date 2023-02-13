import { useContext } from "react";
import DiplomeCompnent from "../components/DiplomeCompnent";
import IconComponant from "../components/IconComponant";
import ParagrapheComponant from "../components/ParagrapheComponant";
import DataContext from "../context/dataContext";
import DiplomeSvg from "../assets/icons/sections/diplome.svg";

const Apropos = () => {
    const { apropos } = useContext(DataContext);

    return (
        <section>
            <h2>A Propos</h2>
            <div>
                <div>
                    <DiplomeSvg />
                </div>
                {apropos.parcours.map((e, index) => (<DiplomeCompnent parcours={e} key={index} />))}
            </div>
            <div>
                <div>Parametre Icon</div>
                {apropos.logiciel.map((e, index) => (<IconComponant icon={e} key={index} />))}
            </div>
            <div>
                <div>Information Icon</div>
                <div>
                    {apropos.information.map((e,index) => (<ParagrapheComponant contain={e} key={index}/>))}
                </div>
            </div>
        </section>
    );
};

export default Apropos;