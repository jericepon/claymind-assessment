import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../logo.svg'

const Header = () => {
    return (
        <Navbar className="navbar navbar-default" bg="light" variant="light">
            <Navbar.Brand href="#home">
                <img src={logo} alt="Hilton" />
            </Navbar.Brand>

            <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header
