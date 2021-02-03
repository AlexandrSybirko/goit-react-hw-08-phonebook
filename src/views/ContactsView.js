import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';


export default function ContactsView() {
  // const dispatch = useDispatch();

  // useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <>
      <Section>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
