import React from 'react';
import { Link } from 'react-router-dom';

const BarndName = ({brand}) => {
    const { _id,image, name } = brand || {};
    return (
        <>
            <Link to='/product1'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={image} alt="" /></figure>
                    <div className="card-body">
                        <button className="btn ">{name}</button>

                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>
            </Link>
            
           
        </>
    );
};

export default BarndName;