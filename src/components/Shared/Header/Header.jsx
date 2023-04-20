import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import user from '../../../assets/2.png';
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary mt-3 mb-2'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-light'>
                <Button variant="danger">Latest</Button>
                <Marquee className='' pauseOnHover={true} speed={50}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mt-3'>
                <Container>
                    <Navbar.Brand to="/">Dragon news</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link to="/">Home</Nav.Link>
                            <Nav.Link to="/about">About</Nav.Link>
                            <Nav.Link to="/career">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {/* <img src={user} alt="" roundedCircle /> */}
                            <Button variant="secondary">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;

{/* <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </nav>
            <div>
                <img src="" alt="" />
                
                    <button>Login</button>
                    <button>Log Out</button>
                
            </div> */}