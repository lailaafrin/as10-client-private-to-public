import React from 'react';
import { Link } from 'react-router-dom';

const BarndName = ({card}) => {
    const { _id, image,brand, brand_id } = card || {};
    
    
    return (
        <>
            <Link to={`/brand/${_id }`}>
                
        

                <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl mx-auto">
                    
                    <figure><img src={image}className='h-96' alt="" /></figure>
                    <div className="card-body">
                        <button className="btn ">{brand}</button>

                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>
            
            </Link>
           
        </>
    );
};

export default BarndName;