import React from 'react';
import { FaRegHandPointRight } from "react-icons/fa";

const RestuarentCard = ({ restuarent }) => {

    // console.log(restuarent);

    const { Image, Name, Place, Price, Ratings, Type, _id } = restuarent;

    return (
        <div className='w-80 lg:w-96 h-64 lg:h-80 rounded-2xl relative'>
            <div className='absolute inset-0 flex flex-col items-start p-8 justify-end transition-opacity duration-300 bg-black bg-opacity-70 opacity-0  hover:opacity-90 rounded-2xl text-white'>
                <div className='flex flex-row justify-between items-end w-full'>
                    <div>
                        <p className='font-semibold'>{Name}</p>
                        <p className='font-semibold'>Price: {Price}$</p>
                        <p className='font-semibold'>Category: {Type}</p>
                    </div>
                    <button className="btn btn-circle btn-outline hover:bg-slate-900" title='Details'>
                        <FaRegHandPointRight className='text-2xl text-white'/>
                    </button>
                </div>
            </div>
            <img src={Image} alt="" className='rounded-2xl w-full h-full object-cover' />
        </div>
    );
};

export default RestuarentCard;