import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import Order from '../Order/Order';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [found, setFound] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        const url = `https://immense-crag-73109.herokuapp.com/myOrders/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user.email])

    useEffect(() => {
        const url = `https://immense-crag-73109.herokuapp.com/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        setLoading(true);
        const found = [];
        products.forEach(product => {
            myOrders.forEach(order => {
                if (order.order === product._id) {
                    const newObj = product;
                    newObj.orderId = order._id;
                    newObj.status = order.status;
                    newObj.date = order.date;
                    found.push(newObj)
                }
            })
        })
        setFound(found);
        setLoading(false);
    }, [products, myOrders])

    const handleCancelOrder = (id) => {
        const proceed = window.confirm('Are you sure, you want to cancel the order?')
        if (proceed) {
            const url = `https://immense-crag-73109.herokuapp.com/deleteOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('successfullly canceled!')
                        const reamainingOrders = found.filter(order => order.orderId !== id)
                        setFound(reamainingOrders);
                    }
                })
        }
    }

    return (
        <Container style={{ marginBottom: '300px' }} className='mt-5'>
            <Row lg={4} className="g-4">
                {
                    !loading ?
                        found.map(order => <Order
                            key={order._id}
                            order={order}
                            handleCancelOrder={handleCancelOrder}
                        ></Order>)
                        :
                        <div className='container text-center mt-5'>
                            <Spinner animation="border" variant="dark" />
                        </div>
                }
            </Row>
        </Container>
    );
};

export default MyOrders;