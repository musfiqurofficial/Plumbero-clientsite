import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewForm from '../page/review/ReviewForm';

const SingleService = () => {
    const { _id, category, serviceName, serviceHolder, position, ratings, price, img, details } = useLoaderData();
    return (
        <div>
            <section className="bg-gray-200 text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 ">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-white">
                        <img src={img} alt="" className="object-cover w-full rounded lg:col-span-7 bg-gray-200" />
                        <div className="p-6  lg:col-span-5">
                            <h3 className="text-2xl font-semibold text-amber-400 sm:text-4xl group-hover:underline group-focus:underline">{serviceName}</h3>
                            <p className="text-xs text-gray-800">{category}</p>
                            <p className='py-4'>{details}</p>
                            <div className='flex justify-between items-end'>
                                <div>
                                    <p className='font-bold'><span className='text-lg text-blue-400'>{serviceHolder}</span></p>
                                    <p className='font-bold text-xs text-blue-300'>{position}</p>
                                </div>
                                <p>{ratings}</p>
                                <div className="text-xs">Price: <span className='text-amber-300 font-bold text-lg'>{price}<span className='text-xs text-black'>Tk</span></span></div>
                            </div>
                            {/* <Link to={`/reviewForm/${_id}`} className='mt-10 btn w-full bg-blue-600 hover:bg-amber-400 rounded-lg text-md font-bold py-3 text-white border-none' >Review</Link> */}

                            <label htmlFor="my-modal-3" className='mt-10 btn w-full bg-blue-600 hover:bg-amber-400 rounded-lg text-md font-bold py-3 text-white border-none' >Review</label>

                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <ReviewForm></ReviewForm>
                                </div>
                            </div>

                        </div>
                    </a>
                </div>
            </section >
        </div >
    );
};

export default SingleService;