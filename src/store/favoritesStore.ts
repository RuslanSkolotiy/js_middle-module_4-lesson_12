import { makeAutoObservable } from "mobx";
import mockContacts from "../__data__/contacts.json";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";

export const favoritesStore = makeAutoObservable({
    items: mockContacts
        .slice(0, 4)
        .map((item) => item.id) as FavoriteContactsDto,
});
