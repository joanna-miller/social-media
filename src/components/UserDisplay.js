import React from 'react';
import { Card, Image } from 'react-bootstrap';
import tomImage from './../img/tom.png'

function UserDisplay() {
  return(
  <>
    <Card style={{ width: '18rem' }}>
      <Card.Header style={{ height: '8rem' }}></Card.Header>
      <Card.Body>
        <Card.Title><Image src={tomImage} style={{ height: '50px' }} id='profileImg' roundedCircle /> Tom from Myspace</Card.Title>
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