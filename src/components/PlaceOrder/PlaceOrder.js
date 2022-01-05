import React from 'react';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Card, Col, Row, Container, Spinner } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const PlaceOrder = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        const url = `https://immense-crag-73109.herokuapp.com/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])

    const onSubmit = data => {
        data.order = product._id;
        data.status = 'pending';

        const url = `https://immense-crag-73109.herokuapp.com/placeOrder`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order placed successfully');
                    reset();
                }
            })
    };

    return (
        <Container>
            <Row className='mt-5'>
                <Col lg={4}>
                    {product.name ?
                        <Card className='p-0 mb-3'>
                            <Card.Img variant="top" className='img-fluid' src={product.img} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text><span className='mt-3'>Price: ${product.price}</span></Card.Text>
                                <Card.Text><small className='text-muted'>{product.description}</small></Card.Text>
                            </Card.Body>
                        </Card> : <div className='container text-center mt-5'>
                            <Spinner animation="border" variant="dark" />
                        </div>}
                </Col>
                <Col lg={8}>
                    <form className='border p-5 rounded' onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="forName" className="form-label">Name</label>
                            <input defaultValue={user.displayName} {...register("name")} type="text" className="form-control" id="forName" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="forEmail" className="form-label">Email</label>
                            <input defaultValue={user.email} {...register("email")} type="email" className="form-control" id="forEmail" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="forAddress" className="form-label">Address</label>
                            <input defaultValue="" {...register("address")} type="text" className="form-control" id="forAddress" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="forDate" className="form-label">Date</label>
                            <input defaultValue="" {...register("date")} type="date" className="form-control" id="forDate" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="forPhone" className="form-label">Phone</label>
                            <input defaultValue="" {...register("phone")} type="text" className="form-control" id="forPhone" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="forCity" className="form-label">City</label>
                            <input defaultValue="" {...register("city")} type="text" className="form-control" id="forCity" required />
                        </div>
                        <input className="btn btn-success" type="submit" value="Place Order" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default PlaceOrder;