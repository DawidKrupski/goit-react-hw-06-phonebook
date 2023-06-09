import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddContact } from './AddContact/AddContact';
import { Filter } from './ContactList/Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { addContactAction, deleteContactAction } from 'redux/contactSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const contactExist = contacts.find(contact => contact.name === name);
    if (!contactExist) {
      dispatch(addContactAction({ name, number }));
    } else {
      alert(`${name} is already in contacts.`);
    }
  };

  const handleInputChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleDelete = id => {
    dispatch(deleteContactAction(id));
  };

  return (
    <div style={{ marginLeft: 'calc(50% - 150px)' }}>
      <h1>Phonebook</h1>
      <AddContact
        name={name}
        number={number}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contact={contacts} handleDelete={handleDelete} />
    </div>
  );
};
