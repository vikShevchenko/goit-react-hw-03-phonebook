import PropTypes from 'prop-types';
import { Container, Title, Button, Input } from './ContactForm.styled';
import React, { useState } from 'react';

const ContactForm = ({ onSubmit }) => { //

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ name, number })
    setName('')
    setNumber('')
  }

  return (
    <div>
      <Container>
        <form onSubmit={handleSubmit}>

          <Title>Name</Title>
          <Input
            onChange={(e) => setName(e.currentTarget.value)}
            type="text"
            name="name"
            value={name}
            //pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <Title>Number</Title>
          <Input
            onChange={(e) => setNumber(e.currentTarget.value)}
            type="tel"
            name="number"
            value={number}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <Button>Add contact</Button>
        </form>
      </Container>
    </div>
  );
};


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm

