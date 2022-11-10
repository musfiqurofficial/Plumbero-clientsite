import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../../../api/auth';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import LoginLottie from '../../../lottie/LoginLottie';

const Login = () => {
    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();

        login(email, password)
            .then(result => {
                const user = result.user;
                // const currentUser = {
                //     email: user.email
                // }

                setAuthToken(user);

                // console.log(currentUser);
                navigate(from, { replace: true });
            }).catch(error => console.error(error))
    }

    return (
        <div className='w-11/12 lg:10/12 mx-auto'>
            <div className='md:flex lg:flex justify-center items-center my-16'>
                <div className='mx-auto lg:mr-12'>
                    <LoginLottie></LoginLottie>
                </div>
                <div className="flex flex-col p-6 sm:p-10 bg-base-100 text-gray-900 shadow-lg px-10 py-20 rounded-2xl lg:w-4/12 mx-auto">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Log in</h1>
                        <p className="text-sm text-gray-700">Log in to access your account</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-12 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            <div>
                                <label className="block mb-2 text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-blue-600 bg-base-100 text-gray-900" required />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm">Password</label>
                                </div>
                                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-blue-600 bg-base-100 text-gray-900" required />
                                <Link to='' className="text-xs hover:underline text-gray-700">Forgot password?</Link>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <input type="submit" className="w-full px-8 py-3 font-semibold rounded-md focus:bg-blue-50 active:bg-blue-100 text-lg hover:text-white text-black hover:bg-blue-600 bg-blue-200" value="Login" />
                            </div>
                            <p className="px-6 text-sm text-center text-gray-700">Don't have an account yet?
                                <Link to="/register" className="hover:underline text-blue-400">Register</Link>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;