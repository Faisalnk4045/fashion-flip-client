import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth';

const UserReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.displayName = user.displayName;
        data.email = user.email;
        const url = `https://immense-crag-73109.herokuapp.com/addReview`;
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
                    alert('New Review Added successfully');
                    reset();
                }
            })
    };

    return (
        <div className='d-flex justify-content-start mt-5'>
            <form className='border p-5 rounded' onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="forName" className="form-label">Your name</label>
                    <input defaultValue={user.displayName} {...register("displayName")} type="text" className="form-control" id="forName" disabled />
                </div>
                <div className="mb-3">
                    <label htmlFor="forEmail" className="form-label">Email</label>
                    <input defaultValue={user.email} {...register("email")} type="email" className="form-control" id="forEmail" disabled />
                </div>
                <div className="mb-3">
                    <label htmlFor="forDescription" className="form-label">Description</label>
                    <textarea defaultValue="" {...register("description")} type="text" className="form-control" id="forDescription" />
                </div>
                <div className="mb-3">
                    <label htmlFor="forPrice" className="form-label">Rating (0-5)</label>
                    <input defaultValue="" {...register("rating")} type="text" className="form-control" id="forPrice" />
                </div>
                <input className="btn btn-dark w-100" type="submit" value="Submit Review" />
            </form>
        </div>
    );
};

export default UserReview;