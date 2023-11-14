import { ContactsListItem } from "./ContactsListItem"
import css from "./ContactsList.module.css"

export const ContactsList = ({filteredContacts, handlerDel})=>{
	return(
		<ul className={css.list}>
			{filteredContacts().map(contact => {
				return(<ContactsListItem
					key ={contact.id}
			contact={contact}
			del={()=>handlerDel(contact.id)}/>)})}
		</ul>
	)
}
