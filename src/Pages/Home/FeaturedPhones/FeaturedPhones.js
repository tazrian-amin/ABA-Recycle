import React from 'react';
import CategoryCard from './CategoryCard';

const FeaturedPhones = () => {

    const categories = [
        {
            name: 'Android',
            imgURL: 'https://images.unsplash.com/photo-1583573636246-18cb2246697f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1638&q=80'
        },
        {
            name: 'Button',
            imgURL: 'https://www.cnet.com/a/img/resize/c2982d38c3959b0da46b01c86914a8996c60f161/hub/2018/10/25/5a11a506-326e-49be-a5de-7d83bda54d15/group-shot-1.jpg?auto=webp&width=1200'
        },
        {
            name: 'Apple',
            imgURL: 'https://images.unsplash.com/photo-1574763788197-1808b6ac8142?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80'
        }
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-4/5 mx-auto'>
            {
                categories.map((category, i) => <CategoryCard
                    key={i}
                    category={category}
                ></CategoryCard>)
            }
        </div>
    );
};

export default FeaturedPhones;