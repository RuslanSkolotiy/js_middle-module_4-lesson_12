import { makeAutoObservable } from "mobx";
import mockGroups from "../__data__/group-contacts.json";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const contactGroupsStore = makeAutoObservable({
    items: mockGroups as GroupContactsDto[],
});
