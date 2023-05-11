import { createSlice } from "@reduxjs/toolkit";
import mockContacts from "../../__data__/contacts.json"
import { RootState } from "../store";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";

type InitialState = {
    items: FavoriteContactsDto
};

const initialState: InitialState = {
    items: [
        mockContacts[0].id,
        mockContacts[1].id,
        mockContacts[2].id,
        mockContacts[3].id,
    ]
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {},
})

export const selectFavorites = (state: RootState) => state.favorites.items;