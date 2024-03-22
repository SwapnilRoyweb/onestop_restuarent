import React from 'react';
import { FaSearchLocation, FaHome, FaUserCog } from "react-icons/fa";
import { Link } from 'react-router-dom';

const BottomNav = () => {
    return (
        <div className="flex sm:hidden btm-nav btm-nav-xs rounded-full bottom-5 text-white">
            <Link to='/' className='hover:active bg-pink-200 text-pink-600 hover:border-pink-600 hover:border-2 hover:bg-pink-200 rounded-s-full'>
                <button>
                    <FaHome></FaHome>
                </button>
            </Link>
            <Link to='/search' className="hover:active bg-blue-200 text-blue-600 hover:border-blue-600 hover:border-2 hover:bg-blue-200">
                <button>
                    <FaSearchLocation></FaSearchLocation>
                </button>
            </Link>
            <Link to='/profile' className='hover:active bg-teal-200 text-teal-600 hover:border-teal-600 hover:border-2 hover:bg-teal-200 rounded-e-full'>
                <button>
                    <FaUserCog></FaUserCog>
                </button>
            </Link>
        </div>
    );
};

export default BottomNav;