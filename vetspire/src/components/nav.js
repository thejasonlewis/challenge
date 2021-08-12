import React from 'react';
import {Navbar, Container} from 'react-bootstrap';
  



class Nav extends React.Component {
    

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Vetspire</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                       
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
} export default Nav