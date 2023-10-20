import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const DeletAdd = ({ card, updateCards, setUpdateCards }) => {
    const { _id, name, price, brand, rating, category, description, image } = card || {};
    
    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                

                fetch(`https://momgo-as10-server-e8vflbg5k-lailaafrin.vercel.app/brand/${ _id }`, {
                    method:"DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedcount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Cart has been deleted.',
                                'success'
                            )
                        };
                            const remaining = updateCards.filter(updateCard => updateCard._id !== _id);
                        setUpdateCards(remaining);
                        
                    });

            }
        })
    }
    return (
        
            <div className="overflow-mx-auto">
                <table className="table">
                    {/* head */}
                    
                    <tbody>
                      <tr>
                                    <td></td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={image} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {name}


                                    </td>
                                    <td>{brand}</td>
                                    <td>{category}</td>
                                    <td>{price}</td>
                                    <td>{rating}</td>
                                    <td>{description}</td>


                                    <th>
                            <Link to={`/updateproduct/${_id}`}>
                                <button className="btn btn-ghost btn-xs text-green-600">update</button>
                            </Link>
                                    </th>
                                    <th>

                           
                                <button
                                    onClick={() => handleDelete(_id)}
                                    className="btn   text-3xl text-red-600"> < AiOutlineDelete /></button>
                            
                                    </th>
                                </tr>
                            
                    </tbody>



                </table>
            </div>
        
    );
};

export default DeletAdd;