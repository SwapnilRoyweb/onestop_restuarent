import React from 'react';
import { FaSearchLocation, FaHome, FaUserCog  } from "react-icons/fa";

const BottomNav = () => {
    return (
        <div className="flex sm:hidden btm-nav btm-nav-xs rounded-full bottom-5 text-white">
            <button>
                <FaHome></FaHome>
            </button>
            <button className="active">
                <FaSearchLocation></FaSearchLocation>
            </button>
            <button>
                <FaUserCog></FaUserCog>
            </button>
        </div>
    );
};

export default BottomNav;