import { observer } from "mobx-react-lite";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { contactGroupsStore } from "src/store/contactGroupsStore";

export const GroupListPage = observer(() => {
    const groups = contactGroupsStore.items;
    return (
        <Row xxl={4}>
            {groups.map((groupContacts) => (
                <Col key={groupContacts.id}>
                    <GroupContactsCard groupContacts={groupContacts} withLink />
                </Col>
            ))}
        </Row>
    );
});
