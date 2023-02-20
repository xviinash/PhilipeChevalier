import React from "react";

const ContactComponant = ({ contact }) => {
  return (
    <div className="contact_componant">
      <img src={contact.icon} alt={contact.name} />
      <a href={contact.lien} target="_blank">{contact.name}</a>
    </div>
  );
};

export default ContactComponant;
