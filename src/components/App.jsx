import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import ContactForm from './ContactForm/ContactForm.js';
import { ContactList } from './ContactList/ContactList.js';
import Filter from './Filter/Filter.js';
import { Section, Title } from './App.styled';
import { useState, useEffect } from 'react';
import { cont } from '../data.js'

const App = () => {

  const [contacts, setContacts] = useState(cont)
  const [filter, setFilter] = useState('')

  const addForm = (data) => {

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts(prevState => ([...contacts, { id: nanoid(3), name: data.name, number: data.number }]));
  };

  const deleteItem = itemId => {
    setContacts(prevState => (prevState.filter(item => item.id !== itemId)));
  };

  const searchContact = e => {
    setFilter(e.target.value);
  }

  const filterContacts = items => {
    console.log("items", items, "filterWord", filter)

    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    )
  }

  useEffect(() => {
    if (localStorage.getItem('localContacts')) {
      setContacts(JSON.parse(localStorage.getItem('localContacts')))
    }

  }, [])

  useEffect(() => {
    if (cont !== contacts) {
      localStorage.setItem("localContacts", JSON.stringify(contacts))
    }
  }, [contacts])

  return (
    <div style={{
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101'
    }}>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addForm} />

      <Section>
        <Title>Contacts</Title>
        {contacts.length > 0 ? (
          <>
            <Filter onChange={searchContact} value={filter} />
            <ContactList
              items={filterContacts(contacts)}
              onDelete={deleteItem}
            />
          </>
        ) : (
          Notiflix.Report.info('Ooops, there is no contact in your phonebook')
        )}
      </Section>
    </div>
  );

}
export default App