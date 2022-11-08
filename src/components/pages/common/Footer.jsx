import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from "../../../assets/plumbero-logo-white.png";
import footerImg from "../../../assets/plumbero-footer.png";

const Footer = () => {
    return (
        <div className='bg-blue-900 text-gray-200 '>
            <div className='w-10/12 mx-auto relative'>
                <footer className="footer py-20 text-base grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 items-end">
                    <div>
                        <img className='mb-4' src={footerLogo} alt="" />
                        <p>Eleifend praesentium molestiae nisl dolorum varius! Luctus inceptos felis odio! Hac diamlorem. Rem minima, eum explicabo dicta blandit male.</p>
                    </div>
                    <div className='mx-auto'>
                        <span className="footer-title">About</span>
                        <Link to='/home' className="link link-hover">Home</Link >
                        <Link to='/services' className="link link-hover">Services</Link >
                        <Link to='/blog' className="link link-hover">Blog</Link >
                        <Link to='/contact' className="link link-hover">Contact</Link >
                    </div>
                    <div className=''>
                        <span className="footer-title">Company</span>
                        <Link to='' className="link link-hover">Why car doctor</Link >
                        <Link to='' className="link link-hover">About</Link >
                    </div>
                    <div className=''>
                        <span className="footer-title">Support</span>
                        <Link to='' className="link link-hover">Terms of use</Link >
                        <Link to='' className="link link-hover">Privacy policy</Link >
                        <Link to='' className="link link-hover">Support Center</Link >
                        <Link to='' className="link link-hover">Cookie policy</Link >
                    </div>
                    <div className=''>

                    </div>
                </footer>
                <footer className="footer py-10 border-t border-gray-300 text-white">
                    <div className="">
                        <p>Copyright © 2022 Plumbero. All rights reserved.</p>
                        <img className='w-1/3 lg:visible md:visible invisible absolute bottom-0 -right-10' src={footerImg} alt="" />
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;