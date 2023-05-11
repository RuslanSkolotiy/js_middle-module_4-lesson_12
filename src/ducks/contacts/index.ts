import { contactsSlice } from "./slice"

export { selectContacts } from "./slice"
export const contactsReducer = contactsSlice.reducer;
export const contactsReducerName = contactsSlice.name;
