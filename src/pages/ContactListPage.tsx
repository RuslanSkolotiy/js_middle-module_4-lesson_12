import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import { contactsStore } from "src/store/contactsStore";
import { observer } from "mobx-react-lite";
import { contactGroupsStore } from "src/store/contactGroupsStore";

type filterType = {
    name: string | undefined;
    groupId: string | undefined;
};

export const ContactListPage = observer(() => {
    const contacts = contactsStore.items;
    const groups = contactGroupsStore.items;
    const [filter, setFilter] = useState<filterType>({
        name: "",
        groupId: "",
    });

    const onSubmit = (fv: Partial<FilterFormValues>) => {
        setFilter((prevState) => ({
            ...prevState,
            name: fv.name,
            groupId: fv.groupId,
        }));
    };

    // Фильтрация списка
    let filteredContacts = contacts;
    if (filter.name) {
        const fvName = filter.name.toLowerCase();
        filteredContacts = filteredContacts.filter(
            ({ name }) => name.toLowerCase().indexOf(fvName) > -1
        );
    }
    if (filter.groupId) {
        const groupContacts = groups.find(({ id }) => id === filter.groupId);

        if (groupContacts) {
            filteredContacts = filteredContacts.filter(({ id }) =>
                groupContacts.contactIds.includes(id)
            );
        }
    }

    return (
        <Row xxl={1}>
            <Col className="mb-3">
                <FilterForm
                    groupContactsList={groups}
                    initialValues={{}}
                    onSubmit={onSubmit}
                />
            </Col>
            <Col>
                <Row xxl={4} className="g-4">
                    {filteredContacts.map((contact) => (
                        <Col key={contact.id}>
                            <ContactCard contact={contact} withLink />
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    );
});
