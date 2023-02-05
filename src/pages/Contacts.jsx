import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
        <title>Contacts</title>
      <ContactEditor />
      <ContactList />
    </>
  );
}