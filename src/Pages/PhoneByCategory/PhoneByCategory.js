import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PhoneCard from './PhoneCard';

const PhoneByCategory = () => {

    const phones = useLoaderData();

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-10 my-10'>
            {
                phones.map(phone => <PhoneCard
                    key={phone._id}
                    phone={phone}
                ></PhoneCard>)
            }
        </div>
    );
};

export default PhoneByCategory;