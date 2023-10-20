import React from 'react';

const Section1 = () => {
    return (
        <section>
            
               
            <h1 className='text-3xl py-8 divider text-center text-orange-500 font-bold '>Our Company</h1>

            <div>

                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/vjwzqhh/brand2.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-outline">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Section1;