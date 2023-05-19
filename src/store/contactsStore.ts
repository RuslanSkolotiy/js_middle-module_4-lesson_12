import { makeAutoObservable } from "mobx";
import mockContacts from "../__data__/contacts.json"
import { ContactDto } from "src/types/dto/ContactDto";

export const contactsStore = makeAutoObservable( {
    items: mockContacts as ContactDto[],
});