
import React from 'react';
import animate from '../assets/animate.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';


const ErrorPages = () => {
    return (
        <div>

            <Link to='/'>

                <div className='text-center my-10'>
                    <button className='btn bg-orange-600 font-semibold px-3 rounded text-white py-2'>Home Back</button>
                </div>
            </Link>
         <Lottie animationData={animate} loop={true} />;
        </div>
    );
};

export default ErrorPages;