import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { contactsSelectors } from 'redux/contacts';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap'
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();
  
 useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));
  
  return (
  <ul className={s.ul}>
    {contacts.map(({ id, name, number }) => (
      <li
        className={s.li}
        key={id}>
        <span className={s.name}>{name}:</span>
        <span className={s.number}>{number}</span>
        <Button className={s.button} variant="danger" size="sm" type="button"
          onClick={() => onDeleteContact(id)}>Удалить</Button>
        
      </li>
    ))}
    </ul>
    );
}

  

