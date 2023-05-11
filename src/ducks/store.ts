import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, contactsReducerName } from "./contacts";
import { groupsReducer, groupsReducerName } from "./contactGroups";
import { favoritesReducer, favoritesReducerName } from "./favorites";

const rootReducer = combineReducers({
    [contactsReducerName]: contactsReducer,
    [groupsReducerName]: groupsReducer,
    [favoritesReducerName]: favoritesReducer
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,

})

export type RootState = ReturnType<typeof rootReducer>;
