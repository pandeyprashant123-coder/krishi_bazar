import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/index"
import { toast } from 'react-hot-toast';
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";

const Signup = ({ setIsLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [userCoordinates, setUserCoordinates] = useState(null)
    const addMyLocation = () => {
        const getAddress = async () => {
            let pos = await new Promise((resolve, reject) => {
                navigator?.geolocation?.getCurrentPosition(resolve, reject)
            })
            const { latitude, longitude } = pos.coords
            console.log({ latitude, longitude })
            setUserCoordinates({ lat: latitude, lng: longitude })
        }
        getAddress()
    }
    const handleSignUp = async (e) => {
        e.preventDefault()
        if (email && password && userCoordinates) {
            console.log(email, password)
            try {
                const data = await createUserWithEmailAndPassword(auth, email, password)
                toast.success('Registered successfully')
                const check = await addDoc(collection(db, "registeredUsers"), { fullName, email, userCoordinates });
                console.log({ check })
            } catch (error) {
                console.log({ error })
                toast.error('Something went wrong')
            }
        }
        else {
            toast.error('Please fill all the required fields')
        }
    }
    return (
        <div className="transition-all mt-[-14vh] duration-150 ease-out flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 shadow-md ">
            <div className="w-full max-w-md space-y-8 p-7 shadow-lg py-14">
                <div>
                    <img className="mx-auto h-40 w-auto" src="https://github.com/pandeyprashant123-coder/krishi_bazar/blob/main/src/images/logo.png?raw=true" alt="Your Company" />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign Up</h2>

                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div className='my-4'>
                            <label for="email-addre" className="sr-only">Full Name</label>
                            <input id="email-addre" type="text" autocomplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Full Name"
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div className='mb-5'>
                            <label for="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autocomplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='my-4 pt-4'>
                            <label for="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autocomplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <p href="#" onClick={addMyLocation} className="font-medium hover:bg-slate-300 bg-slate-200 text-indigo-600 hover:text-indigo-500">Add Location</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleSignUp} className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">

                            Sign up
                        </button>
                        <div className='my-2 '>
                            <p className='text-purple-500 text-center'>Already have an account?</p>
                        </div>
                        <button onClick={() => setIsLogin((prev) => !prev)} type="submit" className="group my-3 relative flex w-full justify-center rounded-md border-2 border-indigo-600 border-transparent  py-2 px-4 text-sm font-medium text-black  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">

                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup