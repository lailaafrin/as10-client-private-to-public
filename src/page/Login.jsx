import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../Provider/AuthProvider';
import SocialLogin from '../sheard/SocialLogin';
import toast from 'react-hot-toast';


const Login = () => {
    
    const { singIn,loading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [ password, setPassword ] = useState("");
    
    const [ error, setError ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ success, setSuccess ] = useState('');

    const [ showPassword, setShowPassword ] = useState(false);

    if (loading) {
        return <span className="loading loading-spinner text-warning "></span>
    }

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)


        setError('');
        setError('');
        setSuccess('');

        if (password.length < 6) {
            setError('password must be 6');
            return;
        }
        else if (!/[ A - Z ]/.test(password)) {
            setError('your password at least one capital letter')
            return;
        }

        if (!/(?=.*? [# ? !@$ %^&* -])/) {
            setError("At least one special character")
            return;
        }
        


        singIn(email, password)

            .then(result => {
                console.log(result.user);

                setSuccess();
                if (setSuccess) {
                    toast.success("successfully login")
                }

                navigate(location?.state ? location.state : '/')

                })

            .catch(error => {
                toast.error(error.message)
            })

    }


    return (
        <>
            <div className="hero min-h-screen bg-base-200  ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className=" text-center animate-text bg-gradient-to-r from-blue-500 via-pink-900 to-roange-500 bg-clip-text text-transparent text-5xl font-bla  font-semibold  ">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                        <div className="card-body">

                             {
                                error && <p className='text-red-500'>{error}</p>
                            }
                            {
                                success && <p className='text-red-500'>{success}</p>
                            }
                            <form onSubmit={handleLogin}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                        name="email" required
                                        placeholder="Email" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label ">
                                        <span className="label-text ">Password</span>
                                    </label>
                                    <div className='relative'>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password" required
                                            placeholder="password"
                                            className="input input-bordered  w-full" />


                                        <span className='absolute top-4 right-8' onClick={() => setShowPassword(!showPassword)} >

                                            {
                                                showPassword ? <AiOutlineEye></AiOutlineEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                                            }
                                        </span>
                                    </div>

                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button

                                        type='submit' className="btn bg-blue-500 text-white ">Login</button>
                                </div>

                            </form>
                            <p>Already account? Please register<Link to='/register'>
                                <button className="btn btn-link">Regiter</button>
                            </Link></p>

                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;