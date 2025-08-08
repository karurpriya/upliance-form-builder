// src/redux/formSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { FormsState, FormConfig, Field } from '../types';

const initialState: FormsState = {
  currentForm: {
    name: '',
    fields: [],
  },
  savedForms: [],
};

const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    addField: (state, action: PayloadAction<Field>) => {
      state.currentForm.fields.push(action.payload);
    },
    updateField: (state, action: PayloadAction<Field>) => {
      const { id } = action.payload;
      const index = state.currentForm.fields.findIndex(field => field.id === id);
      if (index !== -1) {
        state.currentForm.fields[index] = action.payload;
      }
    },
    deleteField: (state, action: PayloadAction<string>) => {
      state.currentForm.fields = state.currentForm.fields.filter(
        field => field.id !== action.payload
      );
    },
    reorderFields: (state, action: PayloadAction<{ newOrder: Field[] }>) => {
      state.currentForm.fields = action.payload.newOrder;
    },
    saveForm: (state, action: PayloadAction<FormConfig>) => {
      state.savedForms.push(action.payload);
    },
    setFormForPreview: (state, action: PayloadAction<FormConfig>) => {
      state.currentForm = {
        name: action.payload.name,
        fields: action.payload.fields
      };
    }
  },
});

export const { addField, updateField, deleteField, reorderFields, saveForm, setFormForPreview } = formSlice.actions;

export default formSlice.reducer;