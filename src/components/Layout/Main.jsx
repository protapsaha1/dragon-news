import React from 'react';
// import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import LeftNavbar from '../Shared/LeftNavbar/LeftNavbar';
import RightNavbar from '../Shared/RightNavbar/RightNavbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}><LeftNavbar /></Col>
                    <Col lg={6}>main content</Col>
                    <Col lg={3}><RightNavbar /></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;