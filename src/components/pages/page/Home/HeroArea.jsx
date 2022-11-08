import React from 'react';
import { Link } from 'react-router-dom';
import heroArea from "../../../../assets/plumbero-img39.png";

const HeroArea = () => {
    return (
        <div className='w-10/12 mx-auto lg:flex md:flex items-end'>
            <div className='my-auto'>
                <h6 className='lg:text-base lg:font-bold my-1'>Welcome to <span className='text-amber-300'>Plumbero</span> Services!</h6>
                <h1 className='lg:text-7xl text-5xl font-bold my-2'>Expert In Fix Your <br /> <span className='text-amber-300'>Plumbing</span> Problems</h1>
                <p className='w-9/12 my-5'>Numquam bibendum ultricies, sociosqu libero, minus irure possimus. Provident laboriosam cras omnis sagittis quam cumque posuere soluta nam risus nostra tempus taciti nesciunt, natoque.</p>
                <Link to='/about'><button className='btn text-black hover:text-white bg-amber-300 rounded-3xl border-none lg:px-5'>LEARN MORE</button></Link>
            </div>
            <div>
                <img className='lg:w-full md:w-full w-8/12 ' src={heroArea} alt="" />
            </div>
        </div>
    );
};

export default HeroArea;