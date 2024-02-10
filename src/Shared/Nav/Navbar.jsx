import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            {/* Temporary button for admin panel */}
            <div className='w-full flex flex-row items-center justify-center gap-5'>
                <Link to='/adminHome' className=''><button className='bg-indigo-300 py-3 px-8 font-semibold mt-10 rounded-full w-fit '>Admin-Home</button></Link>
                <Link to='/' className=''><button className='bg-indigo-300 py-3 px-8 font-semibold mt-10 rounded-full w-fit '>User-Home</button></Link>
            </div>
        </div>
    );
};

export default Navbar;