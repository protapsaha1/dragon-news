import React, { useContext } from 'react';
import { Button, Container, Dropdown, Image, Nav, Navbar } from 'react-bootstrap';
import { UserProvider } from '../../../providers/ContextProvider';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const { user, userSignOut } = useContext(UserProvider);
    const logOut = () => {
        userSignOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mt-3'>
                <Container>
                    <Link to="/" className='Noto Sans text-decoration-none text-secondary fs-2'>Dragon news</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none text-secondary mx-2' to="/">Home</Link>
                            <Link className='text-decoration-none text-secondary mx-2' to="/about">About</Link>
                            <Link className='text-decoration-none text-secondary mx-2' to="/career">Career</Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            <div className='d-flex align-items-center'>
                                <div>
                                    {
                                        user && user.displayName
                                    }
                                </div>
                                <div>
                                    {
                                        user ?
                                            <Image style={{ height: 40, width: 40 }} className='mx-2' src={user.photoURL} alt="" roundedCircle />
                                            :
                                            <FaUserCircle style={{ height: 40, width: 40 }} className='mx-2' />

                                    }
                                </div>
                            </div>
                            {
                                user
                                    ?
                                    <Button onClick={logOut} variant="secondary">Logout</Button>
                                    :
                                    <Link to="/login"><Button variant="secondary">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;

// <Dropdown>
//     <Dropdown.Toggle className='p-0'>
{/* </Dropdown.Toggle>
<Dropdown.Menu>
<Link to="/register">Register</Link>
</Dropdown.Menu>
</Dropdown> */}