import React from 'react';
import { FaRegHandPointRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const RestuarentCard = ({ restuarent }) => {

    // console.log(restuarent);

    const { Image, Name, Place, Price, Ratings, Type, _id } = restuarent;

    return (
        <div className='w-80 lg:w-96 h-64 lg:h-80 rounded-xl relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-500 border-2 border-x-0 border-yellow-500'>
            <p className='absolute top-3 right-3 w-fit px-3 bg-yellow-500 text-center text-white rounded-lg flex flex-row items-center gap-1'>{Ratings}<FaStar/></p>
            <div className='absolute inset-0 flex flex-col items-start p-8 justify-end transition-opacity duration-300 bg-black bg-opacity-50 opacity-0  hover:opacity-100 rounded-xl text-white'>
                <div className='flex flex-row justify-between items-end w-full'>
                    <div>
                        <p className='font-semibold'>{Name}</p>
                        <p className='font-semibold'>Price: {Price}$</p>
                        <p className='font-semibold'>Category: {Type}</p>
                    </div>
                    <button className="btn btn-circle btn-outline hover:bg-slate-900" title='Details'>
                        <FaRegHandPointRight className='text-2xl text-white' />
                    </button>
                </div>
            </div>
            <img src={Image} alt="" className='rounded-xl w-full h-full object-cover' />
        </div>
    );
};

export default RestuarentCard;