import { useContext } from "react";
import ContactComponant from "../components/ContactComponant";
import IconComponant from "../components/IconComponant";
import DataContext from "../context/dataContext";
import Titre from "../components/TitreComponant";

const Contact = () => {
  const { contact, apropos } = useContext(DataContext);
  return (
    <div>
      <section>
        <Titre titre={"Software"} />
        <div id="logiciel_container">
          {apropos.logiciel.map((e, index) => (
            <IconComponant icon={e} key={index} />
          ))}
        </div>
      </section>
      <section>
        <Titre titre={"Contact me"} />
        <div>
          {contact.map((c, index) => (
            <ContactComponant contact={c} key={index} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Contact;
