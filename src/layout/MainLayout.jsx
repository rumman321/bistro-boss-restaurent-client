import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div><Outlet></Outlet></div>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;