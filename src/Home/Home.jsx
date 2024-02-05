import React from 'react';
import { MdYoutubeSearchedFor } from "react-icons/md";

const Home = () => {
    return (
        <div>
            {/* Search bar */}
            <div className='w-full flex flex-col justify-center items-center mt-10'>
                <label htmlFor="search"></label>
                <div className='flex flex-row justify-center items-center gap-1'>
                    <input type="text" name="" id="" className='w-96 p-5 rounded-full bg-gradient-to-l from-[#FFDEE9] to-[#B5FFFC]'/>
                    <button className='bg-gradient-to-l from-[#0093E9] to-[#80D0C7] p-3 rounded-full -ml-16'><MdYoutubeSearchedFor className='text-2xl font-bold'/></button>
                </div>
            </div>

        </div>
    );
};

export default Home;