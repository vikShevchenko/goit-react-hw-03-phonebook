import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { Component } from 'react';
import  ContactForm  from './ContactForm/ContactForm.js';
import { ContactList } from './ContactList/ContactList.js';
import Filter from './Filter/Filter.js';
import { Section, Title } from './App.styled';

// const cont = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };


  addForm = (data) => {
    const name = data.name;
    const number = data.number

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(3), name, number }],
    }));
  };

  deleteItem = itemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== itemId),
    }));
  };

  searchContact = e => this.setState({ filter: e.target.value });

  filterContacts = items =>
    items.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    componentDidUpdate(prevProps, PrevStates){ //Записуе нове в локал якщо є зміни
      if(PrevStates.contacts !== this.state.contacts){
        localStorage.setItem("localContacts", JSON.stringify(this.state.contacts))
      }
    }

  render() {
    const { contacts, filter } = this.state;

    return (
      <div
        style={{
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Title>Phonebook</Title>
        <ContactForm onSubm={this.addForm} />
        <Section>
          <Title>Contacts</Title>
          {contacts.length > 0 ? (
            <>
              <Filter onChange={this.searchContact} value={filter} />
              <ContactList
                items={this.filterContacts(contacts)}
                onDelete={this.deleteItem}
              />
            </>
          ) : (
            Notiflix.Report.info('Ooops, there is no contact in your phonebook')
          )}
        </Section>
      </div>
    );
  }
}
