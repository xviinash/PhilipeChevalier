import { useContext } from "react";
import ContactComponant from "../components/ContactComponant";
import IconComponant from "../components/IconComponant";
import DataContext from "../context/dataContext";

const Contact = () => {
  const { contact, apropos } = useContext(DataContext);
  return (
    <div>
      <section>
        <h2>Software</h2>
        <div>
            {apropos.logiciel.map((e, index) => (
              <IconComponant icon={e} key={index} />
            ))}
          </div>
      </section>
    <section>
      <h2>Contact me</h2>
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
