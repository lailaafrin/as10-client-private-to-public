import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer';

const MainLayouts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default MainLayouts;