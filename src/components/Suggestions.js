import React from 'react';
import { Card, Image, ListGroup, Button } from 'react-bootstrap';
import fakePerson from './../img/fake-person.png'
import fakePerson2 from './../img/fake-person2.png'
import fakePerson3 from './../img/fake-person3.png'

function Suggestions() {
  return(
  <>
    <Card>
      <Card.Header>People you may know</Card.Header>
      <ListGroup as="ul">
        <Card.Body>
          <ListGroup.Item><Image src={ fakePerson } style={{ height: '50px' }} roundedCircle /> fake_user_1<Button variant="outline-info" size='sm'>Add Friend</Button></ListGroup.Item>
          <ListGroup.Item><Image src={ fakePerson2 } style={{ height: '50px' }} roundedCircle /> fake_user_2<Button variant="outline-info" size='sm'>Add Friend</Button></ListGroup.Item>
          <ListGroup.Item><Image src={ fakePerson3 } style={{ height: '50px' }} roundedCircle /> fake_user_3<Button variant="outline-info" size='sm'>Add Friend</Button></ListGroup.Item>
        </Card.Body>
      </ListGroup>
    </Card>
  </>
  );
}

export default Suggestions;