import { useState } from 'react'
import apple from '../../assets/svgs/apple 1.svg'
import google from '../../assets/svgs/google-icon 1.svg'
import Input from '../../components/Input'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const responseGoogle = (response) => {
        const userObject = jwt_decode(response.credential);
        //console.log(userObject);
        localStorage.setItem('user', JSON.stringify(userObject));
        navigate('/dashboard')
    }

    return (
        <div className="w-screen h-screen flex">
            <div className="w-2/5 h-full bg-black text-white text-7xl font-bold flex justify-center items-center">
                Board.
            </div>
            <div className="flex justify-center items-center w-3/5 h-full bg-[#f5f5f5]">
                <div className="flex flex-col justify-center items-start gap-5">
                    <div>
                        <div className="text-4xl font-bold mb-2">
                            Sign In
                        </div>
                        <div className="">
                            Sign in to your account
                        </div>
                    </div>
                    <div className="flex gap-5">
                        {/* <button className="bg-[#fff] rounded-xl flex justify-center items-center text-[#858585] py-2 px-6 text-sm">
                            <img src={google} alt="" className="w-4 h-4 mr-2" />
                            Sign in with Google
                        </button> */}
                        <GoogleOAuthProvider 
                            clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
                        >
                            <GoogleLogin
                                render={(renderProps) => (
                                    <button
                                        type="button"
                                        className="bg-[#fff] rounded-xl flex justify-center items-center text-[#858585] py-2 px-6 text-sm"
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                    >
                                        <img src={google} alt="" className="w-4 h-4 mr-2" /> Sign in with google
                                    </button>
                                )}
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy="single_host_origin"
                            />
                        </GoogleOAuthProvider>

                        <button className="bg-[#fff] rounded-xl flex justify-center items-center text-[#858585] py-2 px-6 text-sm">
                            <img src={apple} alt="" className="w-4 h-4 mr-2" />
                            Sign in with Apple
                        </button>
                    </div>
                    <div className='bg-white p-6 rounded-xl flex flex-col gap-4 justify-center items-start w-full'>
                        <Input
                            label="Email"
                            value={credentials.email}
                            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                            inputProps={{
                                type: 'email',
                                id: 'email'
                            }}
                            labelProps={{
                                htmlFor: 'email'
                            }}
                        />
                        <Input
                            label="Password"
                            value={credentials.password}
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            inputProps={{
                                type: 'password',
                                id: 'password'
                            }}
                            labelProps={{
                                htmlFor: 'password'
                            }}
                        />
                        <div className="text-[#346BD4] cursor-pointer">
                            Forgot password?
                        </div>
                        <button className="bg-[#000] text-white py-2 px-4 rounded-[0.625rem] w-full font-bold">
                            Sign In
                        </button>
                    </div>
                    <div className="self-center flex gap-1">
                        <span className="text-[#858585]">
                            Don't have an account?
                        </span>
                        <span className="text-[#346BD4] cursor-pointer">
                            Register here
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn