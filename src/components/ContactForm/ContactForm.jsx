import React from 'react';

const ContactForm = ({ name, number, handleNameChange, handleNumberChange, addContact }) => {
  return (
    <form onSubmit={(event) => addContact(event)}>
      <label>
        Name
        <input type="text" value={name} onChange={handleNameChange} required />
      </label>
      <label>
        Number
        <input type="tel" name="number" value={number} onChange={handleNumberChange} required />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;