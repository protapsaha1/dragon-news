import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import EditorInSights from '../EditorInSights/EditorInSights';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import useTitle from '../../../hooks/useTitle';

const News = () => {
    useTitle('News')
    const categoryNewses = useLoaderData();
    const { image_url, details, category_id } = categoryNewses;
    return (
        <div>
            <Card className='my-4 mx-auto'>
                <Card.Img variant="top" src={image_url} className='p-2' />
                <Card.Body>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/categories/${category_id}`}>
                        <Button variant='danger'><FaArrowLeft /> All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
            <EditorInSights />
        </div>
    );
};

export default News;