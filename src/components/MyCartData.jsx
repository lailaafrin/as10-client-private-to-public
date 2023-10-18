import React from 'react';

const MyCartData = ({ brand }) => {
    const { name, price,  rating, category, description, photo } = brand || {};
    return (
        <>
            <div className="hero  px-24">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={photo} className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{ description}</p>
                        <p className="py-6">{ category}</p>
                        <p className="py-6">{ price}</p>
                        <p className="py-6">{ rating}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyCartData;