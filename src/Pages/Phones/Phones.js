import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PhoneCard from '../PhoneByCategory/PhoneCard';

const Phones = () => {

    const allPhones = useLoaderData();
    const [phones, setPhones] = useState(allPhones);

    const handleSorting = event => {
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;

        if (category === 'All') {
            setPhones(allPhones);
        }
        else {
            fetch(`http://localhost:5000/phones?category=${category}`)
                .then(res => res.json())
                .then(data => setPhones(data))
        }
    }

    return (
        <>
            <form onSubmit={handleSorting} className="flex items-center justify-end mt-10 mx-10">
                <div>
                    <span className='font-bold'>Sort By Category : </span>
                    <select name='category' className="select select-bordered mr-5">
                        <option disabled>Select</option>
                        <option>All</option>
                        <option>Android</option>
                        <option>Button</option>
                        <option>Apple</option>
                    </select>
                </div>
                <input className='btn bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 hover:font-semibold rounded-md text-black' type="submit" value="Apply Sorting" />
            </form>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-10 my-10'>
                {
                    phones.map(phone => <PhoneCard
                        key={phone._id}
                        phone={phone}
                    ></PhoneCard>)
                }
            </div>
        </>
    );
};

export default Phones;