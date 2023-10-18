
import React from 'react';
import render2 from '../assets/render2.json'
import Lottie from 'lottie-react';

const Banner = () => {
    return (
       

        <div className="hero h-[600px] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Lottie animationData={render2} loop={true} />;
                <div className=''>
                    <h1 className=" text-center animate-text bg-gradient-to-r from-blue-500 via-orange-500 to-roange-500 bg-clip-text text-transparent text-5xl font-bla  lg:mt-24 font-bold  ">Food and Beverage Management</h1>
                    <p className="py-6">This introductory textbook provides a thorough guide to the management of food and beverage outlets, from their day-to-day running through to the wider concerns of the hospitality industry.</p>
                    <button className="btn btn-outline ml-52">Toogle moode</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;