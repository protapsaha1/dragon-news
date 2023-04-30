import React, { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png';
import { UserProvider } from '../../../providers/ContextProvider';

const RightNavbar = () => {
    const { signInPopPup, githubSignIn } = useContext(UserProvider);

    const googleLogin = () => {
        signInPopPup()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const gitLogin = () => {
        githubSignIn()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='h-100 sticky top-0'>
            <h3 className='bg-secondary text-center text-white p-3 mt-2'>Login with</h3>
            <Button onClick={googleLogin} className='mb-2 w-100' variant="outline-secondary"><FaGoogle /> Login with Google</Button><br />
            <Button onClick={gitLogin} className='mb-2 w-100' variant="outline-dark"><FaGithub /> Login with Github</Button><br />
            <Button className='mb-2 w-100' variant="outline-info"><FaFacebook /> Login with Facebook</Button>
            <div>
                <h4 className='mt-4'>Find us on </h4>
                <ListGroup>
                    <ListGroup.Item className='p-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='p-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='p-2'><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='my-4'>
                <QZone></QZone>
            </div>
            <div className='position-relative'>
                <img src={bg} alt="" />
                <div className='position-absolute top-0 start-0 p-4 text-center'>
                    <h3 className='text-white'>Create an Amazing Newspaper</h3>
                    <p className='text-white'><small>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</small></p>
                </div>
                <Button variant="danger" className='position-absolute bottom-0 mx-5 my-5 ' style={{marginLeft: 50}}>Learn More</Button>
            </div>
        </div>

    );
};

export default RightNavbar;