import React, { Component } from 'react';

import css from './App.module.css';
import { Notify } from 'notiflix';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import {ContactForm}  from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
    filter: '',
  };

      addContact  = (contact) => {
    const hasDuplicates = this.state.contacts.some(cont =>
cont.name.toLowerCase() === contact.name.toLowerCase()
    )
    if(hasDuplicates){
      Notify.failure(`${contact.name} is already exists`)
      return
    }
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }))
    };

    
componentDidMount() {
  
  const Contacts = JSON.parse(localStorage.getItem('contacts'))??[];
  this.setState({contacts: Contacts});
}
componentDidUpdate(prevState){
  if(prevState.contacts!== this.state.contacts){
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
}

  deleteContact = (id) => {
      this.setState((prevState) => ({
        contacts: prevState.contacts.filter((contact) => contact.id!== id),
      }));
    };
  filterContacts = (evt) => {
      this.setState({filter: evt.target.value})
    };
  handlerFilter =()=>{
      let filteredCondtacts=[];
      if(this.state.filter){
        filteredCondtacts = this.state.contacts.filter((contact)=> contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
      }else{
        return filteredCondtacts = this.state.contacts
      }
  
    return filteredCondtacts
  }

  render(){
       return (
     <>
<h1 className={css.titel}>Phonebook</h1>
<ContactForm addContact={this.addContact}/>
<h2 className={css.subtitel}>Contacts</h2>
 <Filter filter ={Filter}
        filterContacts={this.filterContacts} />
<ContactsList handlerDel={this.deleteContact}
        filteredContacts={this.handlerFilter}
        
        />
</>
);
  }}
 
 