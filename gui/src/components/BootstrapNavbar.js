import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import logo from '../logo.png';
import loginicon from '../icon/login.svg' 
import signupicon from '../icon/user_add.svg' 

class BootstrapNavbar extends React.Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="info" variant="light" expand="lg" sticky="top">
                            <Navbar.Brand href="#home">
                                <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top"/>{' '}
                            </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>                                    <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/about-us">Contact Us</Nav.Link>
                                        <Nav.Link href="/contact-us">About Us</Nav.Link>

                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    <Form className="d-flex">
                                        <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                        />
                                        <Button variant="outline-success">Search</Button>
                                    </Form>
                                    <Nav.Link href="/sign-in"><img alt="" src={loginicon} width="30" height="30" className="d-inline-block align-top"/>{' '}</Nav.Link>
                                    <Nav.Link href="/sign-up"><img alt="" src={signupicon} width="30" height="30" className="d-inline-block align-top"/>{' '}</Nav.Link>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Routes>
                                <Route exact path='/' element={< Home />}></Route>
                                <Route exact path='/about-us' element={< AboutUs />}></Route>
                                <Route exact path='/contact-us' element={< ContactUs />}></Route>
                                <Route exact path='/sign-in' element={< Login />}></Route>
                                <Route exact path='/sign-up' element={< SignUp />}></Route>
                            </Routes>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}
export default BootstrapNavbar;

