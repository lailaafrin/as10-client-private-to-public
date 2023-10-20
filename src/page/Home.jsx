import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import BarndName from '../sheard/BarndName';
import Section1 from '../components/Section1';
import Section3 from '../components/Section3';


const Home = () => {
    const [ cards, setCards ] = useState([]);
    useEffect(() => {
        fetch('https://momgo-as10-server-e8vflbg5k-lailaafrin.vercel.app/brand')
            .then(res => res.json())
            .then(data=>setCards(data.slice(0,6)))
    },[])

   
    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  sm:mt-80 lg:mt-16'>
                {
                    cards?.map(card => <BarndName
                        key={card._id}
                    card={card}
                    ></BarndName>)
                }
            </div>
            <Section1></Section1>

            <div className='mt-8'>
                <Section3></Section3>
            </div>
        </div>
    );
};

export default Home;