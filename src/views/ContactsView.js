import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { contactsOperations } from 'redux/contacts';
import s from './Views.module.css';


export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <div className={s.container}>
      <h1 className={s.textphonebook}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.textcontacts}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

