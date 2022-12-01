import React from 'react';

const PhoneCard = ({ phone }) => {

    const { name, photo, price, usage, posting_time, seller, _id } = phone;
    const handleAddToWishlist = (id) => {
        console.log('handleAddToWishlist', id);
    }

    const handleAddToCart = (id) => {
        console.log('handleAddToCart', id);
    }

    return (
        <div className="card bg-gradient-to-r from-orange-100 via-blue-300 to-pink-300 border-black shadow-xl rounded-lg border border-black">
            <h2 className="text-2xl font-bold text-center my-5">{name}</h2>
            <figure><img src={photo} alt={name} /></figure>
            <div className='flex justify-evenly my-5'>
                <button onClick={() => handleAddToWishlist(_id)} className="btn bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 rounded-md hover:font-bold text-black">Add to Wishlist</button>
                <button onClick={() => handleAddToCart(_id)} className="btn bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 rounded-md hover:font-bold text-black">Add to Cart</button>
            </div>
            <ul className="mx-auto mb-5">
                <li className='font-semibold list-disc'>Resale Price: Tk.{price.resale}/-</li>
                <li className='font-semibold list-disc'>Original Price: Tk.{price.original}/-</li>
                <li className='font-semibold list-disc'>Used for: {usage}</li>
                <li className='font-semibold list-disc'>Location of Collection: {seller.location}</li>
                <li className='font-semibold list-disc'>Seller's Name: {seller.name}</li>
                <li className='font-semibold list-disc'>Posted On: {posting_time.split('T')[0]}</li>
            </ul>
        </div>
    );
};

export default PhoneCard;