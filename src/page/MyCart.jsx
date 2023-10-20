import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DeletAdd from '../components/DeletAdd';




const MyCart = () => {
    const  loadedCard = useLoaderData();
    const [ updateCards, setUpdateCards ] = useState(loadedCard);
    // console.log(cards)
    return (
        <div className=''>
            <div className="overflow-x-auto ml-16 mt-12">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className='text-orange-500  font-bold text-2xl'>
                            <th>image</th>
                            <th>Name</th>
                            <th>Brand_Name</th>
                            <th>Ceategory</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Details</th>
                            <th>Edit</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        </tbody>
                </table>
            </div>

            {
                            updateCards?.map(card => <DeletAdd
                                key={card._id}
                                card={card}
                                updateCards={updateCards}
                                setUpdateCards={setUpdateCards}
                            ></DeletAdd>)
                        }
                       
                     
        
        </div>
    );
};

export default MyCart;