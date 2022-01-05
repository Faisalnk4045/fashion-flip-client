import React from 'react';

const ManageProduct = (props) => {
    const { _id, name, img, price } = props.product;
    const { handleDeleteProduct } = props;

    return (
        <tr>
            <td>
                <img src={img} style={{ width: '50px', height: '50px' }} alt="" />
            </td>
            <td>{name}</td>
            <td>{price}</td>
            <td>In stock</td>
            <td>
                <span>
                    <button className='btn btn-outline-danger' onClick={() => handleDeleteProduct(_id)}>
                        <i className="fas fa-times-circle"></i>
                    </button>
                </span>
            </td>
        </tr>
    );
};

export default ManageProduct;