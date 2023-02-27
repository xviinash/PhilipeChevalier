import { useContext } from "react";
import ContactComponant from "../components/ContactComponant";
import DataContext from "../context/dataContext";

const Contact = () => {
  const { contact } = useContext(DataContext);
  return (
    <div>
      <section id="contact_section">
        <div id="contact_container">
          <h2>Contact</h2>
          <div>
            {contact.map((c, index) => (
              <ContactComponant contact={c} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
