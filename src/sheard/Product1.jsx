
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Product1 = () => {
    const products = useParams();
 useEffect(() => {

     fetch('https://momgo-as10-server-e8vflbg5k-lailaafrin.vercel.app/brand')
            .then(res => res.json())
            .then(data=>console.log(data))
      
    //  const filterproduct = products.filter((product) => product.brand == products);
    //  console.log(filterproduct);
    }, [])

       
    
    return (

        <div className=' '>
            <Carousel className=' text-center'>
                
                    <img className="" src="https://i.ibb.co/GtjMrZ8/Photography-PRL-Image-6-1.webp" />


                    <img src="https://i.ibb.co/yV84Qby/brand5.jpg" />

            
                
                    <img src="https://i.ibb.co/mD87Zxv/brand3.jpg" />

            </Carousel>
            

            <div className="grid grid-cols-2">
                <ProductCard></ProductCard>
            </div>
       </div>
    );
};

export default Product1;


// useEffect(() => {
//     fetch("http://localhost:5000/product")
//         .then((res) => res.json())
//         .then((data) => setProducts(data.slice(0, 10))); // Slice the array to get the first 10 products
// }, []);
