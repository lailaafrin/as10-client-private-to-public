import React from 'react';
import { useLoaderData } from 'react-router-dom';


const MyCart = () => {
    const brands = useLoaderData();
    return (
        <div className=''>
            
            
            <div className="overflow-mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th></th>
                            
                            <th>photo</th>
                            <th>Name</th>
                            <th>brandname</th>
                            <th>category</th>
                            <th>price</th>
                            <th>Ratting</th>
                            <th>Details</th>
                            <th>ADD Cart</th>
                            <th>DELETE</th>
                            <th></th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            brands?.map(brand =>
                                <tr key={brand._id}>
                                    <td></td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={brand.photo} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {brand.name}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <td>{ brand.category}</td>
                                     <td>{ brand.price}</td>
                                    <td>{brand.rating}</td>
                                    <td>{brand.description}</td>
                                    
                                    
                                    <th>
                                        <button className="btn btn-ghost btn-xs">add cart</button>
                                    </th>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Delete</button>
                                    </th>
                                </tr>
                                )
                        }
                       
                       
                    
                      
                    </tbody>
                    
                    

                </table>
            </div>
        </div>
    );
};

export default MyCart;