
import { useSelector, useDispatch } from "react-redux";

import { addContact } from "../../redux/slices/contactSlice";

const ContactForm = () => {

  const contacts = useSelector(store => store.contacts);
  const dispatch = useDispatch();
  

  const onAddContact = (evt) => {
    evt.preventDefault();
    const input = evt.target;
    const name = input.name.value;
    const number = input.number.value;
 


    const equalName = contacts.find(
      element => element.name.toLowerCase() === name.toLowerCase());

    if (equalName) return alert(`${equalName.name} is already in contacts.`);

    const action = addContact({ name, number });
    dispatch(action);
    
    input.name.value = "";
    input.number.value = "";
  }

  return <div>
       <form
        onSubmit={onAddContact}> 
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></input>
        </label>
        <label >
          Number
          <input 
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
      </div>

}

export default ContactForm;
