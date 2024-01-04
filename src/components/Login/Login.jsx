import React, { useContext, useState } from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserProvider } from '../../providers/ContextProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login')
    console.log(location)
    const from = location.state?.from?.pathname || "/categories/0";
    console.log('from', from)
    const { signInEmail } = useContext(UserProvider)
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");



    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInEmail(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess("Successfully login");
                navigate(from, { replace: true })
                form.reset("");

            })
            .catch(error => {
                setError(error.message);
                // console.log(errorMessage)
            })
    }
    return (
        <Container className='mx-auto my-auto w-25 p-2'>
            <h3 className='text-center'>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter your email address" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control type={show ? "text" : "password"} name='password' placeholder="Enter your Password" required />
                        <InputGroup.Text onClick={() => setShow(!show)}>
                            {
                                show ? <span><FaRegEye /></span> : <span> <FaRegEyeSlash /></span>
                            }
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <Form.Text className='text-success'>
                    {success}
                </Form.Text>
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Remember me" />
                </Form.Group>
                <Button className='w-50 mx-auto' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            Don`t have an account ? <Link className='text-danger text-decoration-none' to="/register">Register</Link>
        </Container>
    );
};

export default Login;