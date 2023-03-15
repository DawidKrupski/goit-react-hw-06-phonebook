import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('contacts')) || [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactAction: (state, action) => {
      const { name, number } = action.payload;
      const contactExist = state.items.find(contact => contact.name === name);
      if (!contactExist) {
        state.items.push({ name, number, id: nanoid() });
        localStorage.setItem('contacts', JSON.stringify(state.items));
      }
    },
    deleteContactAction: (state, action) => {
      const contactId = action.payload;
      const contactDelete = state.items.filter(
        contact => contact.id !== contactId
      );
      localStorage.setItem('contacts', JSON.stringify(contactDelete));
      return { ...state, items: contactDelete };
    },
    setFilterAction: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContactAction, deleteContactAction, setFilterAction } =
  contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
