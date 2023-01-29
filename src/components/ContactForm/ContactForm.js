import PropTypes from 'prop-types';
import { Container, Title, Button, Input } from './ContactForm.styled';
import React, {Component} from 'react';

export default class ContactForm extends Component{
  
  state = {
    name: '',
    number: ''
    
  };

  hendleChange =(e)=> {
    const {name, value} = e.currentTarget
    this.setState({[name]: value})
  }

  hendleSubmit =(e)=> {
    e.preventDefault()
    this.props.onSubm(this.state)
    this.reset()
  }

  reset =()=> {
    this.setState({name: '', number: ''})
  }
render() {

  return (
    <div>
      <Container>
        <form onSubmit={this.hendleSubmit}> 
          <Title>Name</Title>
          <Input
            onChange={this.hendleChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <Title>Number</Title>
          <Input
            onChange={this.hendleChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <Button>Add contact</Button>
        </form>
      </Container>
    </div>
  );
};
}

ContactForm.propTypes = {
  onSubm: PropTypes.func.isRequired,
};
