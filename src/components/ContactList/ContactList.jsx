import clsx from 'clsx';
import { useSelector } from "react-redux";
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList() {
  const filterItems = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);

  const filteredContacts = filterItems.trim() === ''
    ? contacts
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterItems.toLowerCase())
      );

  return (
    <ul className={clsx(css.ContactList)}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}