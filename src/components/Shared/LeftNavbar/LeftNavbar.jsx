import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error.message))
    }, [])
    return (
        <div>
            <h4 className='bg-secondary text-center text-white p-3 mt-2'>All Categories</h4>
            <h4 className='bg-light text-center text-dark p-3 mt-2'>National news</h4>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/categories/${category.id}`}>
                            <Button variant="light">{category.name}</Button>
                        </Link>

                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;