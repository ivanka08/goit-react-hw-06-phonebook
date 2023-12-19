
import { Contact } from "./Contact/Contact";
import { useSelector } from "react-redux";



export const ContactList = () => {
  const contacts = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter);

  const filterContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizedValue = filter.toLowerCase();
    const filteredContactsArray = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue));
  
    return filteredContactsArray;
  }

  const filteredContacts = filterContacts();



  return <ul>
    {filteredContacts.length > 0 ? filteredContacts.map((contact =>
      <Contact key={contact.id} contact={contact}/>
    )) : <p> no matches <span>☹</span></p>}
  </ul>
}



