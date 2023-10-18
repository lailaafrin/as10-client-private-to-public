import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyCartData from '../components/MyCartData';

const MyCart = () => {
    const brands = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 px-52'>
            
            
            {
                brands?.map(brand => <MyCartData
                    key={brand._id}
                    brand={brand}
                ></MyCartData>)
            }
        </div>
    );
};

export default MyCart;