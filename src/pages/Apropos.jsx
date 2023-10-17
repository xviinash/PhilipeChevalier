import { useContext } from "react";
import DiplomeCompnent from "../components/DiplomeCompnent";
import ParagrapheComponant from "../components/ParagrapheComponant";
import DataContext from "../context/dataContext";

const Apropos = () => {
  const { apropos } = useContext(DataContext);

  return (
    <section>
      <h2>About me</h2>
      <div className="parts_a_propos">
        {apropos.information.map((e, index) => (
          <ParagrapheComponant contain={e} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Apropos;
