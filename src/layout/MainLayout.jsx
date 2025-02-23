import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';


const MainLayout = () => {
    const location =  useLocation()
    const isLogin = location.pathname == '/login' || location.pathname == '/signup'
    console.log(location)   
    return (
        <div className='max-w-screen-lg mx-auto'>
            {isLogin || <Navbar></Navbar>}
            <div className='min-h-[70vh]'><Outlet></Outlet></div>
            {isLogin || <Footer></Footer>}
            
        </div>
    );
};

export default MainLayout;