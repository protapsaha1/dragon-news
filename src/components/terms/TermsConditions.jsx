import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
    return (
        <div>
            <h1>Our Terms and conditions</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facere quas accusantium eligendi recusandae fugiat error?
                Pariatur tenetur molestias delectus numquam saepe, voluptate
                quo eum necessitatibus nesciunt accusantium? Voluptates, autem culpa.
            </p>
            <p>Go back <Link to="/register">Register</Link></p>
        </div>
    );
};

export default TermsConditions;