import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Review = (props) => {

    const { displayName, description, rating } = props.review;
    return (
        <Col>
            <Card className='p-lg-3 border-0 shadow'>
                <Card.Body>
                    <Card.Text className='d-flex justify-content-between align-items-center'>
                        <small className='text-dark'>{displayName}</small>
                    </Card.Text>
                    <Card.Text><small className='text-muted'>{description}</small></Card.Text>
                    <Rating readonly style={{ color: 'rgb(197,168,128)' }}
                        initialRating={rating}
                        emptySymbol="far fa-star fs-6"
                        fullSymbol="fas fa-star fs-6" />
                    <br />
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;