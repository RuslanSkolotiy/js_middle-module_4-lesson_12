import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { selectGroups } from 'src/ducks/contactGroups';

export const GroupListPage = () => {
  const groups = useSelector(selectGroups);
  return (
    <Row xxl={4}>
      {groups.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
};
