import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatedProduct = () => {

    const product = useLoaderData();
    const { _id, name, price, brand, rating, category, description, photo } = product;


    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;


        const name = form.name.value;
        const price = form.price.value;
        const brand = form.brand.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const updateProduct = { name, price, brand, rating, category, description, photo }

        console.log(updateProduct);


        fetch(`https://momgo-as10-server-k8s9ip1nx-lailaafrin.vercel.app/brand/${ _id }`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)

        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Cart updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            });
    };

    return (
        <div className="bg-[#F4F3F0] p-24 mx-52">
            <h2 className="text-3xl font-extrabold text-center text-orange-500">Update a Product</h2>
            <form onSubmit={handleUpdate}>
                {/* form name and price row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form product row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" defaultValue={brand} placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and description row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo URL row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Product" className="btn text-orange-300 w-full bg-gray-800" />

            </form>
        </div>
    );
};

export default UpdatedProduct;