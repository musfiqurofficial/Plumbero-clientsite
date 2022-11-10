import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const [storedUser, setStoredUser] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setStoredUser(data)
            })
    }, [])

    console.log(storedUser);
    const [user, setUser] = useState(storedUser);

    const handleUpdateUser = event => {
        event.preventDefault();
        fetch(`http://localhost:5000/reviews/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('user updated')
                    console.log(data);
                }

            })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser);
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order!')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Successfully Delete!')
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])

    return (
        <div>
            <div>
                <div className="antialiased font-sans bg-gray-200">
                    <div className="container mx-auto px-4 sm:px-8">
                        <div className="py-8">
                            <div>
                                <h2 className="text-2xl font-semibold leading-tight">Total Review:</h2>
                            </div>
                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                    <table className="min-w-full leading-normal">
                                        <tbody>
                                            {
                                                reviews?.map(review => <Review
                                                    key={review._id}
                                                    review={review}
                                                    handleDelete={handleDelete}
                                                    handleUpdateUser={handleUpdateUser}
                                                    handleInputChange={handleInputChange}
                                                ></Review>)
                                            }
                                        </tbody>
                                    </table>
                                    <div
                                        className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                        <span className="text-xs xs:text-sm text-gray-900">
                                            Showing 1 to 2 of  reviews.
                                        </span>
                                        <div className="inline-flex mt-2 xs:mt-0">
                                            <button
                                                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                                Prev
                                            </button>
                                            <button
                                                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default Reviews;