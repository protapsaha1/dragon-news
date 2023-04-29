import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaRegBookmark, FaRegStar, FaShareSquare, FaStar } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    // console.log(news)
    const { _id, title, author, image_url, details, total_view, rating } = news;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex'>
                            <Image className='me-2' style={{ height: 50, width: 50 }} src={author?.img} alt="" roundedCircle />
                            <div className='flex-grow-1'>
                                <p className='m-0 fw-bold'>{author?.name ? author?.name : 'Mr. John '}</p>
                                <p className='m-0'>{moment(author?.published_date).format("YYYY-MM-DD")}</p>
                            </div>
                        </div>
                        <div>
                            <FaRegBookmark />
                            <FaShareSquare className='mx-2' />
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant='top' src={image_url} className='my-3 ' />
                    <Card.Text>
                        {details.length < 200 ? <>{details}</> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read more</Link></>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between align-items-center '>
                        <div className='flex-grow-1'>
                            <Rating
                                placeholderRating={rating?.number}
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar className='text-warning' />}
                                fullSymbol={<FaStar />}
                                readonly
                            /> <span className='m-0 '>{rating?.number}</span>
                        </div>
                        <p className='m-0'><AiFillEye /> {total_view}</p>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;