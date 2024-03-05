import React from 'react';
import { Link } from 'react-router-dom';
import AllData from '../AllData/AllData';

const Home = () => {
    return (
        <div>
            

            {/* All Restuarents */}
            <div className='my-10'>
                <AllData></AllData>
            </div>

        </div>
    );
};

export default Home;