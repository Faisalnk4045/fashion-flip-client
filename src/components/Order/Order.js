import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Order = (props) => {
    const { orderId, img, name, description, price, status, date } = props.order;
    const { handleCancelOrder } = props;

    return (
        <div>
            <Col>
                <Card className='p-0 shadow-sm'>
                    <Card.Img variant="top" className='img-fluid' src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text><small className='text-muted'>{description.slice(0, 100)}</small></Card.Text>
                        <Card.Text><small className='text-muted'>Price: ${price}</small></Card.Text>
                        <Card.Text><small className='text-dark'>Order Date: {date}</small></Card.Text>
                        <Card.Text><small className='text-dark'>Order Status: <b> <span className={status === 'pending' ? 'text-danger' : 'text-success'}>{status}</span></b></small></Card.Text>

                        <Button onClick={() => handleCancelOrder(orderId)} variant='outline-dark' className='w-100'>Cancel Order</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Order;