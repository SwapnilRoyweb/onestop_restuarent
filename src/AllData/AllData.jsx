import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import RestuarentCard from '../Components/RestuarentCard/RestuarentCard';

const AllData = () => {

    const [restuarents, setRestuarents] = useState([]);

    useEffect(() => {
        fetch('https://restusrent-data-server.vercel.app/foods')
            .then(res => res.json())
            .then(data => setRestuarents(data))
    }, [])

    return (
        <div className='w-full flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    restuarents.map(restuarent => <RestuarentCard key={restuarent._id} restuarent={restuarent}></RestuarentCard>)
                }
            </div>
        </div>
    );
};

export default AllData;