import React from 'react';
import { MdYoutubeSearchedFor } from "react-icons/md";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* Search bar */}
            <div className='w-full flex flex-col justify-center items-center mt-10'>
                <label htmlFor="search"></label>
                <div className='flex flex-row justify-center items-center gap-1'>
                    <input type="text" name="" id="" className='w-11/12 md:w-96 p-5 rounded-full bg-gradient-to-l from-[#FFDEE9] to-[#B5FFFC] text-xl font-semibold' />
                    <button className='bg-gradient-to-l from-[#0093E9] to-[#80D0C7] p-3 rounded-full -ml-16 transition ease-in-out delay-150 hover:scale-125 duration-300 '><MdYoutubeSearchedFor className='text-2xl font-bold' /></button>
                </div>
            </div>

            {/* Temporary button for admin panel */}
            <div className='w-full flex items-center justify-center'>
                <Link to='/adminHome' className=''><button className='bg-indigo-300 py-3 px-8 font-semibold mt-10 rounded-full w-fit '>Admin-Home</button></Link>
            </div>

        </div>
    );
};

export default Home;