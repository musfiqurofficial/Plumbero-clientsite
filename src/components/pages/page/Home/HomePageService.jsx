import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PlusLottie from '../../../lottie/PlusLottie';

const HomePageService = () => {
    const services = useLoaderData({})
    return (
        <div className='w-10/12 mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    services.map(service =>
                        <div key={service._id}>
                            <div className="card bg-base-100 shadow-xl relative">
                                <figure ><img className='w-full h-60 object-cover' src={service.img} alt="plumber" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {service.serviceName}
                                    </h2>
                                    <p>{service.details.slice(0, 100)}... <Link to={`/service/${service._id}`}>Read More</Link></p>
                                    <div className="card-actions justify-between">
                                        <div className="">Price: <span className='text-amber-300 font-bold'>{service.price}<span className='text-xs text-black'>Tk</span></span></div>
                                        <Link to={`/service/${service._id}`} className="absolute w-16 -right-5 -bottom-8"><PlusLottie></PlusLottie></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                }
            </div>
        </div>
    );
};

export default HomePageService;