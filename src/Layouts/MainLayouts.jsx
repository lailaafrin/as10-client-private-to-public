import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer';

const MainLayouts = () => {

    const loc = useLocation();

    useEffect(() => {
        if (loc.pathname === "/") {
            document.title = `Food and Beverage`;
        } else {
            document.title = `Food ${ loc.pathname.replace("/", "-") }`;
        }

        if (loc.state) {
            document.title = ` ${ loc.state }`;
        }
    }, [ loc.pathname ]);
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