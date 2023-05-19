import { makeAutoObservable } from "mobx";
import mockContacts from "../__data__/contacts.json";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";

export const favoritesStore = makeAutoObservable({
    items: [
        mockContacts[0].id,
        mockContacts[1].id,
        mockContacts[2].id,
        mockContacts[3].id,
    ] as FavoriteContactsDto,
});
