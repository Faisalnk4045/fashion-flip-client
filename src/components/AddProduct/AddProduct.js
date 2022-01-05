import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const url = `https://immense-crag-73109.herokuapp.com/addNewProduct`;
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
                    alert('New Product Added successfully');
                    reset();
                }
            })
    };

    return (
        <div className='d-flex justify-content-start mt-5'>
            <form className='border p-5 rounded' onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="forName" className="form-label">Product name</label>
                    <input defaultValue="" {...register("name")} type="text" className="form-control" id="forName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="forDescription" className="form-label">Description</label>
                    <textarea defaultValue="" {...register("description")} type="text" className="form-control" id="forDescription" />
                </div>
                <div className="mb-3">
                    <label htmlFor="forPrice" className="form-label">Price</label>
                    <input defaultValue="" {...register("price")} type="text" className="form-control" id="forPrice" />
                </div>
                <div className="mb-4">
                    <label htmlFor="forImg" className="form-label">Image url</label>
                    <input defaultValue="" {...register("img")} type="text" className="form-control" id="forImg" />
                </div>
                <input className="btn btn-dark w-100" type="submit" value="Add New Product" />
            </form>
        </div>
    );
};

export default AddProduct;