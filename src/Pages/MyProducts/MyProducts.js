import { faRectangleAd, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const MyProducts = () => {

    const loadedPhones = useLoaderData();
    const [myPhones, setMyPhones] = useState(loadedPhones);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this post?');
        if (proceed) {
            fetch(`https://recycle-phone-server-six.vercel.app/phones/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Post deleted successfully!');
                        const remainingPhones = myPhones.filter(phn => phn._id !== id);
                        setMyPhones(remainingPhones);
                    }
                    else {
                        toast.error('Could not delete post!');
                    }
                })
        }
    }

    const handleAdvertise = id => {
        console.log(id);
    }

    return (
        <div>
            <h3 className="text-3xl mb-5">My Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Resale Price</th>
                            <th>Status</th>
                            <th>Remove</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myPhones &&
                            myPhones?.map((phone, i) => <tr key={phone._id}>
                                <th>{i + 1}</th>
                                <td>{phone.name}</td>
                                <td>Tk. {phone.price.resale}</td>
                                <td>Unsold</td>
                                <td>
                                    <label>
                                        <button onClick={() => handleDelete(phone._id)} className="btn btn-outline btn-error">
                                            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                        </button>
                                    </label>
                                </td>
                                <td>
                                    <label>
                                        <button onClick={() => handleAdvertise(phone._id)} className="btn btn-outline btn-primary">
                                            <FontAwesomeIcon icon={faRectangleAd}></FontAwesomeIcon>
                                        </button>
                                    </label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;