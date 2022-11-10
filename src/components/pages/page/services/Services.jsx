import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import PlusLottie from '../../../lottie/PlusLottie';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../../../hooks/useTitle';

const Services = () => {
    useTitle('Services')
    const services = useLoaderData({});
    return (
        <div className='my-10'>
            <div className='w-10/12 mx-auto'>
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
            </div>
        </div>
    );
};

export default Services;