import { useSelector } from 'react-redux';

export const ContactList = ({ handleDelete }) => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  console.log(filter);
  // console.log(
  //   contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   )
  // );

  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts.filter(contact => contact.name.toLowerCase());

  console.log(filteredContacts);

  return (
    <div>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.number}
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
