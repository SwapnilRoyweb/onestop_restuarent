import React from 'react';
import { FaSearchLocation, FaHome, FaUserCog  } from "react-icons/fa";

const BottomNav = () => {
    return (
        <div className="flex sm:hidden btm-nav btm-nav-xs rounded-full bottom-5 text-white">
            <button className='hover:active bg-pink-200 text-pink-600 hover:border-pink-600 hover:border-2 hover:bg-pink-200 rounded-s-full'>
                <FaHome></FaHome>
            </button>
            <button className="hover:active bg-blue-200 text-blue-600 hover:border-blue-600 hover:border-2 hover:bg-blue-200">
                <FaSearchLocation></FaSearchLocation>
            </button>
            <button className='hover:active bg-teal-200 text-teal-600 hover:border-teal-600 hover:border-2 hover:bg-teal-200 rounded-e-full'>
                <FaUserCog></FaUserCog>
            </button>
        </div>
    );
};

export default BottomNav;