import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shares/Footer/Footer';
import Navbar from '../Components/Shares/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;