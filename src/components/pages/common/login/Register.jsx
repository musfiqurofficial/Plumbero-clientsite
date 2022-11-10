import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../../../../api/auth';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import RegisterLottie from '../../../lottie/RegisterLottie';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [password, setPassword] = useState()
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password !== confirm) {
            setPassword("Password dose not match!")
        } else {
            form.reset()
            console.log(name, email, password, confirm);
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setAuthToken(user);
            }).catch(error => console.error(error))
    }

    return (
        <div className='w-11/12 lg:w-10/12 mx-auto'>
            <div className='lg:flex md:flex justify-center md:items-center lg:items-center my-16'>
                <div className='lg:w-3/5 md:w-3/5 p-16'>
                    <RegisterLottie />
                </div>
                <div className='lg:w-7/12 md:w-7/12'>
                    <div className="flex flex-col p-6 sm:p-10 bg-base-100 text-gray-900 shadow-lg rounded-2xl">
                        <div className="mb-8 text-center">
                            <h1 className="my-3 text-4xl font-bold">Register</h1>
                            <p className="text-sm text-gray-700">Create an account!</p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-12 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-4">
                                <div>
                                    <label className="block mb-2 text-sm">Your Name</label>
                                    <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md border-blue-600 bg-base-100 text-gray-900" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm">Email address</label>
                                    <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-blue-600 bg-base-100 text-gray-900" required />
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm">Password</label>
                                    </div>
                                    <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-blue-600 bg-base-100 text-gray-900" required />
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm">Confirm Password</label>
                                    </div>
                                    <input type="password" name="confirm" id="confirm" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-blue-600 bg-base-100 text-gray-900" required />
                                    <p className='text-blue-600 text-xs'>{password}</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <input type="submit" className="w-full px-8 py-3 font-semibold rounded-md focus:bg-blue-50 active:bg-blue-100 text-lg hover:text-white text-black hover:bg-blue-600 bg-blue-200" value="Register" />
                                </div>
                                <p className="px-6 text-sm text-center text-gray-700">Already have an account?
                                    <Link to="/loginForm" className="hover:underline text-blue-400">Login</Link>.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;