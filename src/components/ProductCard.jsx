import React from 'react';

const ProductCard = (service) => {
    const { _id, image, brand, price, category,rating } = service || {};
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{brand}</h1>
                        <p className="py-6">{price}</p>
                        <p className="py-6">{category}</p>
                        <p className="py-6">{rating}</p>
                        <button className="btn btn-primary">Add Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;