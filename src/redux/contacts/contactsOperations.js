import { Notify } from "notiflix";
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'service/connectapi';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, thunkAPI) => {
        try {
            const contacts = await api.fetchContacts();
            return contacts; 
        }  catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contactData, thunkAPI) => {
        try {
            const contacts = await api.addContact(contactData);
            Notify.success(`${contactData.name} is successfully added to your contact list`);
            return contacts;  
        }  catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (data, thunkAPI) => {
        try {
            await api.deleteContact(data.id);
            Notify.failure(`${data.name} is deleted from your contact list`);
            return data.id; 
        }  catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
