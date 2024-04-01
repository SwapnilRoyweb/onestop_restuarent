import React from 'react';

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
                </div>
            </div>

            {/* Edit part */}
            <div className='bg-slate-500 p-5 rounded-lg'>

                <h1 className='text-2xl font-bold text-white mb-5'>Edit Information</h1>

                <div>
                    <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
                </div>
            </div>
        </div>
    );
};

export default Profile;