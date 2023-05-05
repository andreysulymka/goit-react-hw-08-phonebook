import { Notify } from "notiflix";
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from 'service/connectapi';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.signUp(data);
            Notify.success(`${response.user.name}, cogratulation! Now are signed up.`);
            console.log(response);
            return response; 
        }  catch (error) {
        return rejectWithValue(error.response.data);
    }
  }
    
);

export const signIn = createAsyncThunk(
    'auth/signIn',
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.signIn(data);
            Notify.success(`${response.user.name}, welcome back to your phonebook`);
            return response;  
        }  catch (error) {
        return rejectWithValue(error.response.data);
    }
    }
);

export const signOut = createAsyncThunk(
    'auth/signOut',
    async (_, { rejectWithValue }) => {
        try {
            await api.signOut();
            Notify.failure(`You are signed out. See you soon.`);
        }  catch (error) {
        return rejectWithValue(error.response.data);
    }
    }
);

 export const refreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;

        if(token === null) {
             return thunkAPI.rejectWithValue('Unable to fetch user');
        };
        
       try {
      setAuthHeader(token);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);