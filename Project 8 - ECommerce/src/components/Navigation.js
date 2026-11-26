import React from 'react';
import { Navbar, Container, Nav, Badge, Button } from 'react-bootstrap';

export default function Navigation({ cartItemCount, onOpenCart }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">TechStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
          </Nav>
          <Nav>
            <Button 
              variant="outline-light" 
              onClick={onOpenCart}
              className="d-flex align-items-center"
            >
              Cart
              <Badge bg="danger" className="ms-2">
                {cartItemCount}
              </Badge>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}