import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const ReviewForm = () => {
    const { user } = useContext(AuthContext);
    const { _id, price, serviceName } = useLoaderData();

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'Email Not Found!';
        const phone = form.phone.value;
        const rating = form.rating.value;
        const message = form.message.value;
        console.log(name, email, phone, message, rating);

        const review = {
            service: _id,
            serviceName: serviceName,
            reviewerName: name,
            price,
            phone,
            rating: rating,
            message,
            email
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Order Placed!')
                    form.reset();
                }
            })
            .catch(error => console.error(error))

    }
    return (
        <div className="">
            <form onSubmit={handlePlaceOrder} className="">
                <div className="mt-5">
                    <input name='name' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Name*" required />

                    <input name='email' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="email" defaultValue={user?.email} placeholder="Email*" readOnly />

                    <input name='phone' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="number" placeholder="Phone*" required />
                </div>
                <select className='mt-4 text-blue-500 text-md font-bold' name="rating" id="" required>
                    <option value="0">Give your honest Rating</option>
                    <option value="5">5</option>
                    <option value="4.5">4.5</option>
                    <option value="4">4</option>
                    <option value="3.5">3.5</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
                <div className="my-4">
                    <textarea name='message' placeholder="Message*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" requiblue></textarea>
                </div>
                <div className="my-2 lg:grid md:grid grid-cols-2 gap-3">
                    <button type='submit' className="uppercase text-center text-sm font-bold tracking-wide bg-blue-600 hover:bg-blue-400 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                        Submit Review
                    </button>
                    <Link to='/orders' type='submit' className="uppercase text-center text-sm font-bold tracking-wide hover:bg-blue-600 bg-blue-400 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                        View All Review
                    </Link>
                </div>
            </form>
            <Toaster position="bottom-center"
                reverseOrder={false}></Toaster>
        </div>
    );
};

export default ReviewForm;