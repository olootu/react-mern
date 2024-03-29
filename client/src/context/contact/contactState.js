import React, {useReducer} from "react";
import {v4 as uuid} from 'uuid';
import contactContext from "./contactContext";
import contactReducer from  "./contactReducer";
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    UPDATE_CONTACT
} from '../types';
import ContactContext from "./contactContext";
import { STATES } from "mongoose";

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jill Johnson',
                email: 'jill@email.com',
                phone: '111-111-1111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Sara Watson',
                email: 'sara@email.com',
                phone: '222-111-2222',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Harry White',
                email: 'harry@email.com',
                phone: '333-111-3333',
                type: 'professional'
            }

        ],
        current: null,
        filtered: null
    }

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact
    const addContact = contact => {
        contact.id = uuid();
        dispatch({type: ADD_CONTACT, payload: contact});

    }

    // Delete Contact

    const deleteContact = id => {
        dispatch({type: DELETE_CONTACT, payload: id});

    }

    // Set Current Contact
    const setCurrent = contact => {
        dispatch({type: SET_CURRENT, payload: contact});

    }

    // Clear Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    }

    // Update Contact

    const updateContact = contact => {
        dispatch({type: UPDATE_CONTACT, payload: contact});

    }
    
    // Filter Contact
    const filterContacts = text => {
        dispatch({type: FILTER_CONTACTS, payload: text});

    }

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    }

    return(
        <ContactContext.Provider
        value={{
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,
            filterContacts,
            clearFilter
        }}
        >
            { props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;