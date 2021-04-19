import React from 'react';
import { Card, Image } from 'react-bootstrap';
import tomImage from './../img/tom.png'

function UserDisplay() {
  return(
  <>
    <Card style={{ width: '18rem' }}>
    <Card.Header style={{ height: '8rem' }}></Card.Header>
    <Card.Body>
    <Image src={tomImage} style={{ height: '50px' }} roundedCircle />
    <Card.Title>John Doe</Card.Title>
    <Card.Text>
      A bio snippet.
    </Card.Text>
    <Card.Link href="#">Tweets</Card.Link>
    <Card.Link href="#">Following</Card.Link>
    <Card.Link href="#">Followers</Card.Link>
    </Card.Body>
    </Card>
  </>
  );
}

export default UserDisplay;