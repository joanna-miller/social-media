import React from 'react';
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';

function Header(){
  return(
  <>
  <Navbar id ='navbar' bg="light" variant="light">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#notifications">Notifications</Nav.Link>
      <Nav.Link href="#messages">Messages</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
  </>
  );
}

export default Header;