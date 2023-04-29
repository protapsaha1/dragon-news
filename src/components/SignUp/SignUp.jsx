import React, { useContext, useState } from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UserProvider } from '../../providers/ContextProvider';

const SignUp = () => {
    const { createEmailPass, userUpdate, userEmailUpdate, verifyEmail } = useContext(UserProvider);
    const [show, setShow] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");



    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(name, photoUrl, email, password, confirm)
        if (password === confirm) {
            setError("Please confirm your password")
        }
        if (password.length === 8) {
            setError("Please your password create 8 character")
        }
        // if (/?=.*[A-Z]/.test(password)) {
        //     setError("Please add a capital character");
        // }
        // if (/?=.*[a-z]/.test(password)) {
        //     setError("Please add a lower Case character");
        // }

        createEmailPass(email, password)
            .then(result => {
                const createdUser = result.user;
                setSuccess("SuccessFully registered");
                form.reset("");
            })
            .catch(error => {
                setError(error.message)
            })

        userUpdate(name, photoUrl)
            .then(() => {
                // update profile
            })
            .catch(error => {
                setError(error.message)
            })

        // userEmailUpdate(email)
        //     .then(() => {
        //         // update email
        //     })
        //     .catch(error => {
        //         setError(error.message)
        //     })

        // verifyEmail()
        //     .then(() => {
        //         // verify email
        //     })
    }
    const handleTerms = e => {
        setAccepted(e.target.Checked)
        console.log(e.target.checked)
    }

    return (
        <Container className='w-25 mx-auto mb-3'>
            <h3 className='text-center'>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" >
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' id='name' placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photoUrl' id='photo' placeholder="Enter your photo Url" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' id='email' placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control type={show ? "text" : "password"} name='password' id='password' placeholder="Enter your Password" required />
                        <InputGroup.Text onClick={() => setShow(!show)}>
                            {
                                show ? <span><FaRegEye /></span> : <span> <FaRegEyeSlash /></span>
                            }
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control type={showConfirm ? "text" : "password"} name='confirm' id='confirm' placeholder="Enter Confirm Password" required />
                        <InputGroup.Text onClick={() => setShowConfirm(!showConfirm)}>
                            {
                                showConfirm ? <span><FaRegEye /></span> : <span> <FaRegEyeSlash /></span>
                            }
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>
                <Form.Text className="text-success">
                    {success}
                </Form.Text>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>

                <Form.Group className="mb-3" >
                    <Form.Check
                        onClick={handleTerms}
                        type="checkbox"
                        name='accept'
                        label={<>Accept <Link to="/terms">Terms and Conditions</Link></>} />
                </Form.Group>

                <Button className='w-50' disabled={!accepted}  variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            Have an account ? Please <Link className='text-danger text-decoration-none' to="/login">Login</Link>
        </Container>
    );
};

export default SignUp;


