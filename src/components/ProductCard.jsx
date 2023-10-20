import React from 'react';

const ProductCard = ({card}) => {
console.log(card)
    const { _id, image, brand, price, category,rating } = card || {};
    return (
        
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} /></figure>
                <div className="card-body">
                <h2 className="card-title">Brand Name{brand}</h2>
                    <p>{category} </p>
                    <p>price:${price} </p>
                    <p>{rating} </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Update Product</button>
                    </div>
                </div>
            </div>
        
        
    );
};

export default ProductCard;