import React from 'react';

const ContactForm = ({ name, number, handleNameChange, handleNumberChange, addContact }) => {
  return (
    <form onSubmit={(event) => addContact(event)}>
      <label>
        Name
        <input type="text" value={name} onChange={handleNameChange} required />
        {/* <input type="text" name="name" required /> */}
      </label>
      <label>
        Number
        <input type="text" value={number} onChange={handleNumberChange} required />
        {/* <input type="tel" name="number" required /> */}
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;