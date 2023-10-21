
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Marquee from "react-fast-marquee";


const Product1 = () => {
    const products = useParams();
    const [ cards, setCards ] = useState([])
    console.log(products)
    useEffect(() => {

        fetch('https://momgo-as10-server-e8vflbg5k-lailaafrin.vercel.app/brand')
            .then(res => res.json())
            .then(data => {
                setCards(data.slice(0,4))

                const filtered = data.filter(a => a.brand == products.id)
                setCards(filtered)

                
            })

    }, [])



    console.log(cards);

    return (

        <div className=' '>

            
               
            
            {/* <Carousel className=' text-center'>
                
                    <img className="" src="https://i.ibb.co/
                    GtjMrZ8/Photography-PRL-Image-6-1.webp" />
                
               
            <img src="https://i.ibb.co/yV84Qby/brand5.jpg" />
               



                <img src="https://i.ibb.co/mD87Zxv/brand3.jpg" />

            </Carousel> */}

            <Marquee className="mt-12">
                {/* <h1 className="">FOOD TEXTURE AND SWALLOWING PROBLEMS</h1> */}

                <img className="h-24" src="https://i.ibb.co/
                    GtjMrZ8/Photography-PRL-Image-6-1.webp" />
                <h1 className="text-7xl text-orange-600 font-bold">REFERENCES

                </h1>
                <img className="h-24" src="https://i.ibb.co/mD87Zxv/brand3.jpg" />
                <h1 className="text-7xl text-orange-600 font-bold">PRESENTATION</h1>
                <img className="h-24 w-full" src="https://i.ibb.co/yV84Qby/brand5.jpg" />
                <h1 className="text-7xl text-orange-600 font-bold">TASTE
</h1>
                

               
            </Marquee>

            <div className="grid lg:grid-cols-2 sm:mx-24 lg:mx-52 gap-8 mt-12">


                {
                    cards.map(card => <ProductCard
                        key={card._id}
                        card={card}

                    ></ProductCard>)
                }
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
