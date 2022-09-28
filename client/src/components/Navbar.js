
// import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import '../styles/Navbar.css'

const NavBar = () => {


  
    return (
        <Navbar  className='NavBar-Container' bg="dark" variant="dark" sticky='top' >
            <Container id='Navbar-container'>
                {/* {isAuthenticated ? <logoutButton/> : <loginButton/>} */}
                <Navbar.Brand href="/">PayFlat</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/payment">Pay</Nav.Link>
                    <Nav.Link href="/transaction">User transactions</Nav.Link>
                    <Nav.Link href="/dashboard">Landlord dashboard</Nav.Link>
                    <Nav.Link id="signin" href="/sign-in">Sign In</Nav.Link>
                </Nav>
            </Container>
        </Navbar>



    )

}

export default NavBar

