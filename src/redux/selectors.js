import { createSelector } from "@reduxjs/toolkit";

//filter
export const filterSelector = state => state.filter;

//auth
export const tokenSelector = state => state.auth.token;
export const isRefreshingSelector = state => state.auth.isRefreshing;
export const isLoggedInSelector = state => state.auth.isLoggedIn;
export const emailSelector = state => state.auth.user.email;


//contacts
export const contactsSelector = state => state.contacts.items;
export const isLoadingSelector = state => state.contacts.isLoading;
export const shownContacts = createSelector(
    [contactsSelector, filterSelector],
    (contacts, filterValue) =>
      contacts.filter(contact => contact.name.toLowerCase().includes(filterValue))
  );
