import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';


const SocialLogin = () => {

    const { user, gooleLogin, githubLogin } = useContext(AuthContext);
    // console.log(user)
    const handleSocialLogin = (media) => {
        media()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className="divider text-green-600">continue with</div>


            <button

                onClick={() => handleSocialLogin(gooleLogin)}
                className="btn bg-blue-600 text-xl">
                <FcGoogle></FcGoogle>
                <span className='text-white '>Google Login</span></button>

            <button
                onClick={() => handleSocialLogin(githubLogin)}
                className="btn border text-white text-xl bg-black">
                <FaGithub></FaGithub>
                <span className='text-yellow-50'>GitHub Login</span></button>
        </> 
    );
};

export default SocialLogin;