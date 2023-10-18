import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import SocialLogin from '../sheard/SocialLogin';
import toast from 'react-hot-toast';


const Register = () => {

    const [ showPassword, setShowPassword ] = useState(false);
    const [ error, setError ] = useState('');
    const { createUser, handleUpdateProfile } = useContext(AuthContext);

    const navigate = useNavigate();
    
    
    
    

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const img = e.target.img.value;
        const password = e.target.password.value;
        console.log(name, email, img, password);

        setError('');
        setError('');
        

       

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


        createUser(email, password)
            .then(res => {
                handleUpdateProfile(name, img)
                    .then(() => {
                        toast.success('User created successfully');
                        navigate('/')

                    })
            })
            .catch(error => {
                toast.error(error.message)
            })
     }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="animate-text bg-gradient-to-r from-pink-500 via-blue-500 to-roange-500 bg-clip-text text-transparent text-5xl font-bla   font-semibold">Register now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white-300">
                    <div className="card-body">
                        {
                            error && <p className='text-red-500'>{error}</p>
                        }

                        <form onSubmit={handleRegister}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    name="name" required
                                    placeholder="Your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name="email" required
                                    placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text">Image Url</span>
                                </label>
                                <input type="text" placeholder="image url" className="input input-bordered" name='img' />

                            </div>

                            <div className="form-control ">
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

                                    className="btn bg-blue-500 text-white">Register</button>
                            </div>
                        </form>
                        <p>Already account? Please login<Link to='/login'>
                            <button className="btn btn-link">Login</button>
                        </Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;