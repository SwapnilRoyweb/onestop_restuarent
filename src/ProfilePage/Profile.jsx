import React from 'react';
import { MdAlternateEmail, MdLocationPin  } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";


const Profile = () => {
    return (
        <div className='my-20 flex flex-col md:flex-row justify-around items-center'>
            {/* side part */}
            <div className='flex flex-col items-center justify-center'>
                <div className="avatar -m-6">
                    <div className="w-20 mask mask-hexagon">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className='bg-slate-300 min-h-screen p-5 rounded-lg w-44'>
                    <h1 className='text-center mt-2 font-semibold text-lg'>Swapnil Roy</h1>
                    <div className='mt-5 text-center'>
                        <h1 className='text-md font-bold underline underline-offset-2'>User Information</h1>
                        <div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit part */}
            <div className='bg-slate-500 p-5 rounded-lg'>

                <h1 className='text-2xl font-bold text-white mb-5'>Edit Information</h1>

                <div className='flex flex-col gap-5'>
                    <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
                    <label className="input input-bordered flex items-center gap-2 text-white">
                        <MdAlternateEmail/>
                        <input type="text" className="grow rounded-sm px-3" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 text-white">
                        <FaUserEdit/>
                        <input type="text" className="grow rounded-sm px-3" placeholder="Username" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 text-white">
                        <RiLockPasswordFill/>
                        <input type="password" className="grow rounded-sm px-3" placeholder='Password' />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 text-white">
                        <MdLocationPin />
                        <input type="text" className="grow rounded-sm px-3" placeholder='Location' />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 text-white">
                        <FaPhone />
                        <input type="number" className="grow rounded-sm px-3" placeholder='Phone Number' />
                    </label>
                    
                </div>
            </div>
        </div>
    );
};

export default Profile;