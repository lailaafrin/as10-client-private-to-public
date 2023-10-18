import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import BarndName from '../sheard/BarndName';


const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  sm:mt-80 lg:mt-16'>
                {
                    brands?.map(brand => <BarndName
                        key={brand._id}
                        brand={brand}
                    ></BarndName>)
                }
           </div>
        </div>
    );
};

export default Home;