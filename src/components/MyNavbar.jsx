import React from "react";
import {
  Nav,
  Container,
  Navbar,
  Button,
  Form,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import logo from "../img/logo.png";

const MyNavbar = () => {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">People</Nav.Link>
            <NavDropdown title="Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">HTML</NavDropdown.Item>
              <NavDropdown.Item href="#action4">CSS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">JAVASCRİPT</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex ms-4">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              variant="outline-warning
            bg-dark"
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
