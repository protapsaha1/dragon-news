import React from 'react';
import logo from '../../../assets/logo.png';
import user from '../../../assets/2.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
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