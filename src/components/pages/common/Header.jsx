import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import ButtonLottie from '../../lottie/ButtonLottie';
import UserLottie from '../../lottie/UserLottie';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menuItems = <>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>

    return (
        <div className='shadow-md sticky top-0 z-40 bg-white bg-opacity-60 py-2'>
            <div className="navbar w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden pl-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className=""><img src="https://demo.bosathemes.com/plumbero/wp-content/uploads/sites/30/2022/06/plumbero-logo.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 font-semibold text-lg">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    
                    {
                        user?.uid ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-full rounded-full">
                                        <img src={user?.photoURL ? user?.photoURL : "https://placeimg.com/80/80/people"} alt='' />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <span className="text-xs font-light">{user.email}</span>
                                    </li>
                                    <li><NavLink to="/reviews">My Reviews</NavLink></li>
                                    <li><NavLink to="/addService">Add Service</NavLink></li>
                                    <li><NavLink onClick={handleLogOut} to='/login'>Log Out</NavLink></li>
                                </ul>
                            </div>
                            :
                            <><Link to='/loginForm' className="bg-blue-700 px-8 py-3 rounded-md text-white hover:bg-blue-900 font-semibold hover:shadow-md">Login</Link></>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;