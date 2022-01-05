import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Product from '../Product/Product';

const OurProducts = ({ page }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `https://immense-crag-73109.herokuapp.com/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (page === 'home')
                    setProducts(data.slice(0, 8));
                else
                    setProducts(data);
            })
    }, [page]);

    const history = useHistory();
    const handleBuyNow = (id) => {
        history.push(`/placeOrder/${id}`);
    }

    return (
        <div className='container pb-5'>
            <div className='text-center mb-5 pt-5 pb-1'>
                <h6 style={{ color: 'rgb(197,168,128)' }}>AWESOME PRODUCTS</h6>
                <h1>{page === 'home' ? 'Featured' : 'Explore All'} Products</h1>
            </div>
            <Row xm={1} md={2} lg={4} className="g-4">
                {
                    products.length > 0 ?
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            handleBuyNow={handleBuyNow}
                        ></Product>)
                        :
                        <div className='container text-center mt-5'>
                            <Spinner animation="border" variant="dark" />
                        </div>
                }
            </Row>
        </div>
    );
};

export default OurProducts;