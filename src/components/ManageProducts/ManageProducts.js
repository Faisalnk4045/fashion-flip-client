import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct';
import './ManageProducts.css'

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = `https://immense-crag-73109.herokuapp.com/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])


    const handleDeleteProduct = (id) => {
        console.log(id);
        const proceed = window.confirm('Are you sure, you want to delete the product?')
        if (proceed) {
            const url = `https://immense-crag-73109.herokuapp.com/deleteProduct/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('successfullly deleted!')
                        const remaining = products.filter(order => order._id !== id);
                        setProducts(remaining);
                    }
                })
        }

    }

    return (
        <>
            {!loading ?
                <div style={{ marginBottom: '300px' }} className='container border p-2 rounded-3 mt-5'>
                    <div id='table-container'>
                        <table>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Delete</th>
                            </tr>
                            {
                                products.map(product => <ManageProduct
                                    key={product._id}
                                    product={product}
                                    handleDeleteProduct={handleDeleteProduct}
                                ></ManageProduct>)
                            }
                        </table>
                    </div>
                </div>
                :
                <div style={{ marginBottom: '300px' }} className='container text-center mt-5'>
                    <Spinner animation="border" variant="dark" />
                </div>
            }
        </>
    );
};

export default ManageProducts;