import React, { memo, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { ContactDto } from "src/types/dto/ContactDto";
import { favoritesStore } from "src/store/favoritesStore";
import { contactsStore } from "src/store/contactsStore";

export const FavoritListPage = () => {
    const allContacts = contactsStore.items;
    const favorites = favoritesStore.items;
    const [contacts, setContacts] = useState<ContactDto[]>([]);
    useEffect(() => {
        setContacts(() =>
            allContacts.filter(({ id }) => favorites.includes(id))
        );
    }, [allContacts, favorites]);
    return (
        <Row xxl={4} className="g-4">
            {contacts.map((contact) => (
                <Col key={contact.id}>
                    <ContactCard contact={contact} withLink />
                </Col>
            ))}
        </Row>
    );
};
