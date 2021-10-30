import React, { useState } from 'react'
import { CloseButton, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../logo.svg'

const Header = () => {
    const [Open, setOpen] = useState(false)

    return (
        <Navbar className="navbar navbar-default" expand="lg" bg="light" fixed='top' variant="light">
            <Container>
                <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setOpen(!Open)} />

                <Nav className={`me-auto ${Open ? '' : 'd-none'} d-lg-flex`}>
                    <CloseButton onClick={() => setOpen(!Open)}>&times;</CloseButton>
                    <Nav.Link onClick={() => setOpen(!Open)} href="#map">Map</Nav.Link>
                    <Nav.Link onClick={() => setOpen(!Open)} href="#gallery">Photo gallery</Nav.Link>
                    <Nav.Link onClick={() => setOpen(!Open)} href="#amenities">Amenities</Nav.Link>
                </Nav>
                <Navbar.Brand className="me-0" href="#banner">
                    <img src={logo} alt="Hilton" />
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header
