import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {

    const { name, imgURL: photo } = category;

    return (
        <div className="card bg-gradient-to-r from-orange-100 via-blue-300 to-pink-300 border-black shadow-xl rounded-lg">
            <figure><img src={photo} alt="phone" /></figure>
            <div className="card-body justify-center items-center">
                <h2 className="card-title">{name}</h2>
                <Link to={`/category/${name}`} className="btn bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 rounded-md hover:font-bold text-black">Explore</Link>
            </div>
        </div>
    );
};

export default CategoryCard;