import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navLinks = <>
        
        <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased ">
            <NavLink to='/' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-400" : ""
            } >
                Home
            </NavLink>
        </li>
        <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased ">
            <NavLink to='/error' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-400" : ""
            } >
                Error
            </NavLink>
        </li>
        <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased ">
            <NavLink to='/addproduct' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-400" : ""
            } >
                AddProduct
            </NavLink>
        </li>

        <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased ">
            <NavLink to='/mycart' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-400" : ""
            } >
                MyCart
            </NavLink>
        </li>

        
    
        </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start ml-4">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52">
                        {
                            navLinks  
                        }
                    </ul>
                </div>

                <a href="#" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" className="h-8 mr-3" />
                    <span className='text-4xl font-bold text-orange-400'> BACARDI</span>
                </a>
                
        </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end px-4">
                {
                    user?.email ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                            <div className="avatar online">
                                <div className="w-10 rounded-full  ">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </div>

                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                            </li>
                            <li>
                                <button className="btn btn-sm  btn-ghost"
                                    onClick={logOut}
                                >Logout</button>

                            </li>
                        </ul>
                    </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-sm  btn-ghost text-orange-400">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default NavBar;