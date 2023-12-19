
import PropTypes from 'prop-types';

import { deleteContact } from "../../../redux/slices/contactSlice";
import { useDispatch } from "react-redux";

export const Contact = ({ contact }) => {

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  }

  return <>
     <li onClick={showDetail}>
      <div>
        <p>{contact.name}</p>
        <p
          name={contact.name}>
          {contact.number}
        </p>
      </div>
      <button 
        type="button" 
        onClick={() => handleDeleteContact(contact.id)}
      >
        delete
      </button>
    </li>
  </>
}



const showDetail = (evt) => {
  // console.log(evt.currentTarget);

}

Contact.propTypes = {
  contact: PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
}