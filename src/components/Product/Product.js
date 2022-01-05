import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Product = (props) => {
    const { _id, img, name, description, price } = props.product;
    const { handleBuyNow } = props;
    return (
        <div>
            <Col>
                <Card className='p-0 border-0 shadow'>
                    <Card.Img variant="top" className='img-fluid' src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text><small className='text-muted'>{description.slice(0, 120)}...</small></Card.Text>
                        <Card.Text><span className='text-dark'>Price: ${price}</span></Card.Text>

                        <Button onClick={() => handleBuyNow(_id)} variant='outline-dark' className='w-100'>Buy now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Product;