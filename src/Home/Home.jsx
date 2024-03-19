import React from 'react';
import { Link } from 'react-router-dom';
import AllData from '../AllData/AllData';
import { MdYoutubeSearchedFor } from "react-icons/md";
import { TbFilterBolt } from "react-icons/tb";

const Home = () => {
    return (
        <div>

            {/* Search bar */}
            <div className='flex md:hidden flex-row gap-1 justify-center items-center mt-5'>
                <label htmlFor="search"></label>
                <div className='flex flex-row justify-center items-center gap-1'>
                    <input type="text" name="" id="" className='w-11/12 md:w-96 p-3 rounded-full bg-gradient-to-l from-[#FFDEE9] to-[#B5FFFC] text-xl font-semibold' />
                    <button className='bg-gradient-to-l from-[#0093E9] to-[#80D0C7] p-2 rounded-full -ml-12 transition ease-in-out delay-150 hover:scale-125 duration-300 '><MdYoutubeSearchedFor className='text-xl font-bold' /></button>
                </div>
                <div className="dropdown dropdown-bottom dropdown-end lg:dropdown-right">
                    <div tabIndex={0} role="button" className="m-1 btn h-fit btn-accent btn-xs sm:btn-sm md:btn-md"><TbFilterBolt className='text-md md:text-xl' /><span className='font-bold'>Filter</span></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-3 shadow-2xl shadow-slate-400 bg-white rounded-box w-40 text-black">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                {/* <button className="btn h-fit btn-accent btn-xs sm:btn-sm md:btn-md"></button> */}
            </div>

            {/* All Restuarents */}
            <div className='my-10'>
                <AllData></AllData>
            </div>

        </div>
    );
};

export default Home;