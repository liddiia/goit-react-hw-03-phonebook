import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const newContact = { ...this.state, id: nanoid() };
    this.props.addContact(newContact);
  }
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  render() {
    return (
      // <dir className={css.formBox}>
        <form className={css.contactForm} onSubmit={this.handleSubmit}>
          <label className={css.formLabel}>
            Name: <input
              type="text"
              className={css.formInput}
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
            ></input>
          </label>

          <label className={css.contactFormLabel}>
           Number: <input type="tel" className={css.formInput} name = "number"
           placeholder="XXX-XX-XX"
           value = {this.state.number} onChange={this.handleChange} pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}" required ></input>
          </label>
          <button type="submit" className={css.submitBtn}>Submit</button>
        </form>
      // </dir>
    );
  }
}
