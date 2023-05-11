import { createSlice } from "@reduxjs/toolkit";
import { ContactDto } from "src/types/dto/ContactDto";
import mockContacts from "../../__data__/contacts.json"
import { RootState } from "../store";

type InitialState = {
    items: ContactDto[]
};

const initialState: InitialState = {
    items: mockContacts
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
})

export const selectContacts = (state: RootState) => state.contacts.items;