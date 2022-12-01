import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {

    const { name, imgURL: photo } = category;

    return (
        <div className="card bg-gradient-to-r from-orange-100 via-blue-300 to-pink-300 border border-black shadow-xl rounded-lg">
            <h2 className="text-2xl font-bold text-center my-5 uppercase">{name}</h2>
            <figure><img src={photo} alt="phone" /></figure>
            <div className="card-body justify-center items-center">
                <Link to={`/phones/category/${name}`} className="btn w-full bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 rounded-md hover:font-bold text-black"><FontAwesomeIcon className='mr-2' icon={faRocket}></FontAwesomeIcon>Explore Category</Link>
            </div>
        </div>
    );
};

export default CategoryCard;