import React, { memo, useEffect, useState } from 'react';
import { CommonPageProps } from './types';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { ContactDto } from 'src/types/dto/ContactDto';
import { useSelector } from 'react-redux';
import { selectContacts } from 'src/ducks/contacts';
import { selectFavorites } from 'src/ducks/favorites';

export const FavoritListPage = () => {
  const allContacts = useSelector(selectContacts);
  const favorites = useSelector(selectFavorites)
  const [contacts, setContacts] = useState<ContactDto[]>([])
  useEffect(() => {
    setContacts(() => allContacts.filter(({ id }) => favorites.includes(id)));
  }, [allContacts, favorites])
  return (
    <Row xxl={4} className="g-4">
      {contacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
}
