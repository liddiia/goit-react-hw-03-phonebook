import css from './ContactsList.module.css'
export const ContactsListItem = ({contact, del}) =>{
	return(
	<li className={css.contactItem} >
        {contact.name}:
	 <span className={css.tel}>{contact.number}</span>
	 <button type="button" className={css.delButton} onClick={del}>Delete</button>
	 </li>
	
	)
}
