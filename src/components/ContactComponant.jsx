import React from "react";

const ContactComponant = ({ contact }) => {
  return (
    <div className="contact_componant">
      <img src={contact.icon} alt={contact.name} />
      <p>{contact.name}</p>
    </div>
  );
};

export default ContactComponant;
