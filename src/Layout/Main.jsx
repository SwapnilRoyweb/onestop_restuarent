import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from '../Shared/BottomNav/BottomNav';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Nav/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <BottomNav></BottomNav>
        </div>
    );
};

export default Main;