import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../Components/Shares/SideBar/SideBar';

const DashBoardLayour = () => {
    return (
        <div className='md:flex relative  min-h-screen'>
            <div className=' w-60'>
                <SideBar></SideBar>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoardLayour;