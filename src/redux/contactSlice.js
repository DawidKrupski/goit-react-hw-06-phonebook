import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactInitialState = [];

const contactSlice = createSlice({
  name: 'contact',
  initialState: contactInitialState,
  reducers: {
    addContactAction: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContactAction: {
      reducer(state, action) {
        const index = state.findIndex(contact => contact.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      },
    },
  },
});

export const { addContactAction, deleteContactAction } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
