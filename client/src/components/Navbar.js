
// import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import '../styles/Navbar.css'
import { useState } from 'react'
import Signin from './SignIn'
import { useSelector, useDispatch } from 'react-redux'
import { setValue, clearUser } from '../redux/user';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Navigate, useNavigate } from 'react-router-dom'

const NavBar = () => {
    // const [user, setUser] = useState({ name: "" });
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    console.log(user);
    const navigate = useNavigate()



    return (
        <Navbar className='NavBar-Container' bg="dark" variant="dark" sticky='top' position='fixed'>
            <Container id='Navbar-container' sticky='top'>

                <Navbar.Brand href="/">
                    <img src='./photos/logo.png' width="80"
                        height="50" alt='.png' />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {/* <Nav.Link href="/payment">Pay</Nav.Link> */}
                    <Nav.Link href="/transaction">User transactions</Nav.Link>
                    <Nav.Link href="/dashboard">Landlord dashboard</Nav.Link>
                    {/* {user ? 
                        <Button
                        onClick={() => {
                            localStorage.clear();
                            dispatch(setValue({}))
                            
                        }}
                        >
                        LOG OUT
                        </Button>
                        : 
                        <Nav.Link id="signin" href="/sign-in" element={<Signin user={user} />}>Sign In</Nav.Link> 
                    } */}
                    <div id='sign-in-div'>
                    {
                        user.isLoggedin ?
                            <Button variant='info'
                                onClick={() => {
                                    localStorage.clear();
                                    dispatch(clearUser())
                                    navigate('/')

                                }}
                            >
                                LOG OUT
                            </Button>
                            : 
                            // <Nav.Link id="signin" href="/sign-in" element={<Signin user={user} />}>Sign In</Nav.Link>
                            <Button variant='info' onClick={() => navigate('/sign-in')}>Log In</Button>
                   }
                    </div>
                </Nav>
            </Container>
        </Navbar>



    )

}

export default NavBar

