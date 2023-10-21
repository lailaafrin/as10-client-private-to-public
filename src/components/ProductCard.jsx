import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({card}) => {
console.log(card)
    const { _id, image, brand, price, category,rating } = card || {};
    return (
        
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='h-96' src={image} /></figure>
                <div className="card-body">
                <h2 className="card-title">Brand Name:{brand}</h2>
                    <p>CategoryName:{category} </p>
                    <p>price:${price} </p>
                    <p>{rating} </p>
                <div className='flex'>
                    <Link to='/addproduct'>

                        <div className="card-actions  justify-center">
                            <button className="btn bg-gray-700 text-white">Add Product</button>
                        </div>
                    </Link>
                    
                    
                    <Link to='/mycart'>
                        <div className="card-actions  justify-center">
                            <button className="btn bg-orange-300">Update Product</button>

                        </div>
                    </Link>
                    
                   </div>
                </div>
            </div>
        
        
    );
};

export default ProductCard;