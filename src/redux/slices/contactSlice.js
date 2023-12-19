import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: [
    {"id": "id-1", "name": "Jesus Christ", "number": "777-77-77"},
    {"id": "id-2", "name": "Steve Jobs", "number": "444-99-22"},
    {"id": "id-3", "name": "Stephen Wozniak", "number": "645-17-79"},
    {"id": "id-4", "name": "Freddie Mercury", "number": "227-91-26"},
    {"id": "id-5", "name": "Woodrow Wilson", "number": "645-17-79"},
    {"id": "id-6", "name": "Adam Mickiewicz", "number": "227-91-26"},],
  reducers: {
    addContact: {
      reducer: (store, { payload }) => { store.push(payload) },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
        }
      }
    }},
    deleteContact: (store, { payload }) => store.filter(contact => contact.id !== payload),
  }
});

export const { addContact, deleteContact } = contactsSlice.actions; 

export default contactsSlice.reducer;
