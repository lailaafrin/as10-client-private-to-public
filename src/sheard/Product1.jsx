import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';





const Product1 = () => {
    return (

        <div className='h-42 '>
            <Carousel className=' text-center'>
                
                    <img src="https://i.ibb.co/GtjMrZ8/Photography-PRL-Image-6-1.webp" />


                    <img src="https://i.ibb.co/yV84Qby/brand5.jpg" />

            
                
                    <img src="https://i.ibb.co/mD87Zxv/brand3.jpg" />

                



            </Carousel>
       </div>
    );
};

export default Product1;