import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/index"
import { toast } from 'react-hot-toast';
const Login = ({ setIsLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSignIn = async (e) => {
        e.preventDefault()
        if (email && password) {
            try {
                await signInWithEmailAndPassword(auth, email, password)
                toast.success('Success')
            } catch (error) {
                toast.error('Invalid Credentials')

                console.log(error)
            }
        }
        else {
            toast.error('Please fill all the required fields')
        }
    }
    return (
        <div className="transition-all mt-[-5vh] ease-out duration-200 flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
            <div className="w-full max-w-md space-y-8 shadow-md p-5 py-14">
                <div>
                    <img className="mx-auto h-40 w-auto" src="https://github.com/pandeyprashant123-coder/krishi_bazar/blob/main/src/images/logo.png?raw=true" alt="Your Company" />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Login</h2>

                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div className='my-4'>
                            <label for="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autocomplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='my-2 '>
                            <label for="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autocomplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleSignIn} className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                            </span>
                            Sign in
                        </button>
                        <div className='my-2 '>
                            <p className='text-purple-600 text-center'>Don't have an account?</p>
                        </div>
                        <button onClick={() => setIsLogin((prev) => !prev)} type="submit" className="group my-2 relative flex w-full justify-center rounded-md text-black border-transparent  py-2 px-4 text-sm font-medium text-indig0-600 border-2 border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                            </span>
                            Sign up
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login