import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ButtonLottie from '../../lottie/ButtonLottie';

const Header = () => {

    const menuItems = <>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/service">Services</NavLink></li>
        <li><NavLink to="/reviews">Reviews</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>

    return (
        <div className='shadow-md sticky top-0 z-40 bg-white py-3'>
            <div className="navbar bg-base-100 w-10/12 mx-auto">
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
                    <ul className="menu menu-horizontal p-0 font-semibold">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/loginForm' className="w-1/3"><ButtonLottie></ButtonLottie></Link>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;