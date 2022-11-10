import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import PlusLottie from '../../../lottie/PlusLottie';
import 'react-photo-view/dist/react-photo-view.css';


const HomePageService = () => {
    const services = useLoaderData({})
    return (
        <div className='w-10/12 mx-auto mb-10'>
            <h1 className='lg:text-4xl text-3xl font-bold my-7 hover:underline text-center'>Our<span className='text-amber-300'> Plumbing</span> Service</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    services.map(service =>
                        <div key={service._id}>
                            <div className="card bg-base-100 shadow-xl relative">
                                <PhotoProvider>
                                    <PhotoView src={service.img}>
                                        <figure ><img className='w-full h-60 object-cover' src={service.img} alt="plumber" /></figure>
                                    </PhotoView>
                                </PhotoProvider>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {service.serviceName}
                                    </h2>
                                    <p>{service.details.slice(0, 100)}... <Link to={`/service/${service._id}`}>Read More</Link></p>
                                    <div className="card-actions justify-between items-end">
                                        <img src={service.icon} alt="" />
                                        <div className="">Price: <span className='text-amber-300 font-bold'>{service.price}<span className='text-xs text-black'>Tk</span></span></div>
                                        <Link to={`/service/${service._id}`} className="absolute w-16 -right-5 -bottom-8"><PlusLottie></PlusLottie></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                }
            </div>
            <div className='flex justify-center my-12'>
                <Link to='/services'><button className='btn text-black hover:text-white bg-amber-300 rounded-3xl border-none lg:px-5'>Show ALl Services</button></Link>
            </div>
        </div>
    );
};

export default HomePageService;