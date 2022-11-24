import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shares/Navbar/Navbar';
import SideBar from '../Components/Shares/SideBar/SideBar';

const DashBoardLayour = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SideBar></SideBar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoardLayour;