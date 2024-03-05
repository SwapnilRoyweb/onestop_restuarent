import React from 'react';
import { Link } from 'react-router-dom';
import { MdYoutubeSearchedFor } from "react-icons/md";

const Navbar = () => {
    return (
        <div className='w-full flex flex-row items-center justify-around'>
            <h1 className='text-3xl lg:text-5xl uppercase font-extrabold'>Onestop</h1>

            {/* Search bar */}
            <div className='flex flex-col justify-center items-center mt-5 lg:mt-8'>
                <label htmlFor="search"></label>
                <div className='flex flex-row justify-center items-center gap-1'>
                    <input type="text" name="" id="" className='w-11/12 md:w-96 p-3 rounded-full bg-gradient-to-l from-[#FFDEE9] to-[#B5FFFC] text-xl font-semibold' />
                    <button className='bg-gradient-to-l from-[#0093E9] to-[#80D0C7] p-2 rounded-full -ml-12 transition ease-in-out delay-150 hover:scale-125 duration-300 '><MdYoutubeSearchedFor className='text-xl font-bold' /></button>
                </div>
            </div>

            <div>
                <p>Profile</p>
            </div>
            {/* Temporary button for admin panel */}
            {/* <div className='w-full flex flex-row items-center justify-center gap-5'>
                <Link to='/adminHome' className=''><button className='bg-indigo-300 py-3 px-8 font-semibold mt-10 rounded-full w-fit '>Admin-Home</button></Link>
                <Link to='/' className=''><button className='bg-indigo-300 py-3 px-8 font-semibold mt-10 rounded-full w-fit '>User-Home</button></Link>
            </div> */}
        </div>
    );
};

export default Navbar;