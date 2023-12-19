
import '../../src/index.css';
import { ContactList } from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";

// !!!!!!!!!!!!!! щоб додати глобально доступ до стор
import { Provider } from "react-redux";
import {store, persistor} from "../redux/store";

import { PersistGate } from 'redux-persist/integration/react';

const App = () => {

  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div>
        <div >
          <div>
            <h2>Phonebook</h2>
            <Filter/>
            <ContactForm/>
          </div>
          <div>
            <h2>Contacts</h2>
            <ContactList/>
          </div>
        </div>
        <div></div>
      </div>
    </PersistGate>
  </Provider>
}

export default App;

