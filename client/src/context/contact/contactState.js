import React, {useReducer} from "react";
import uuid from 'uuid';
import contactContext from "./contactContext";
import contactReducer from  "./contactReducer";
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    FILTER_CONTACTS,
    CLEAR_FILTER
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

        ]
    }

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact

    // Delete Contact

    // Set Current Contact

    // Clear Contact

    // Update Contact
    
    // Filter Contact

    // Clear Filter

    return(
        <ContactContext.Provider
        value={{contacts: state.contacts}}
        >
            { props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;