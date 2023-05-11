import { createSlice } from "@reduxjs/toolkit";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import mockGroups from "../../__data__/group-contacts.json"
import { RootState } from "../store";

type InitialState = {
    items: GroupContactsDto[]
};

const initialState: InitialState = {
    items: mockGroups
}

export const groupsSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {},
})

export const selectGroups = (state: RootState) => state.groups.items;