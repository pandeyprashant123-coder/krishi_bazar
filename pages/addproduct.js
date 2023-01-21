import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { db } from "../firebase/index"
import { collection, addDoc } from "firebase/firestore";
import { useSelector, useDispatch } from 'react-redux';
import { handleFlag } from '@/redux/slices/slice1';
import Addproduct from '@/components/Addproduct/addproduct';
const addproduct = () => {

    const dispatch = useDispatch()
    const state = useSelector((state) => state.Slice1)
    const [loading, setLoading] = useState(false)
    const [farmerName, setFarmerName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productName, setProductName] = useState('')
    const [productImage, setProductImage] = useState(null)
    const [farmerAddress, setFarmerAddress] = useState('')
    const [farmerPhone, setFarmerPhone] = useState('')
    const [productQuantity, setProductQuantity] = useState('')
    const [category, setCategory] = useState('')
    const [farmerCoordinates, setFarmerCoordinates] = useState(null)


    const addMyLocation = () => {
        const getAddress = async () => {
            let pos = await new Promise((resolve, reject) => {
                navigator?.geolocation?.getCurrentPosition(resolve, reject)
            })
            const { latitude, longitude } = pos.coords
            console.log({ latitude, longitude })
            setFarmerCoordinates({ lat: latitude, lng: longitude })
        }
        getAddress()
    }
    const handleOrder = async (e) => {
        e.preventDefault()
        if (!farmerPhone || !farmerName || !productImage || !productQuantity || !farmerAddress || !productImage || !productName || !productPrice || !category || !farmerCoordinates) {
            toast.error('Please fill all the fields')
        }
        else {
            try {
                setLoading(true)
                const data = await addDoc(collection(db, "addProduct"), { farmerName, productPrice, productName, productImage: 'custom', farmerAddress, farmerPhone, productQuantity, category, farmerCoordinates, uid: state?.auth?.uid, email: state?.auth?.email });
                console.log({ data })
                dispatch(handleFlag())
                setLoading(false)
                toast.success('Thank you for adding Product')
            } catch (error) {
                console.log({ error })
                toast.error('Something went wrong')
            }
        }
    }
    const handleFile = (e) => {
        e.preventDefault()
        setProductImage(e.target.files[0])
    }

    return (
        <div className='px-12 my-12 bg-white h-full'>
            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>
            <div>
                <p className='text-3xl font-bold text-black my-4 text-center'>Please add your Product </p>
            </div>
            <div className="mt-1 px-30 sm:mt-0 px-3">
                <div className="md:grid md:grid-cols-3 ">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                            <p className="mt-1 px-3 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                        </div>
                    </div>
                    <div className="mt-5 px-3 md:col-span-2 md:mt-0 px-3">
                        <form>
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                value={farmerName}
                                                onChange={(e) => setFarmerName(e.target.value)}
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="mt-1 px-3 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Product Price
                                            </label>
                                            <input
                                                type="text"
                                                value={productPrice}
                                                onChange={(e) => setProductPrice(e.target.value)}
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="mt-1 px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                Product Name
                                            </label>
                                            <input
                                                value={productName}
                                                onChange={(e) => setProductName(e.target.value)}
                                                type="text"
                                                name="email-address"
                                                id="email-address"
                                                autoComplete="email"
                                                className="mt-1 px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                Category
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                value={category}
                                                onChange={(e) => setCategory(e.target.value)}
                                                autoComplete="country-name"
                                                className="mt-1 px-3 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                <option>Grain</option>
                                                <option>Vegetables</option>
                                                <option>Fruits</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6">
                                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                Your address
                                            </label>
                                            <input
                                                type="text"
                                                value={farmerAddress}
                                                onChange={(e) => setFarmerAddress(e.target.value)}
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="mt-1 px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div className="col-span-6">
                                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                Product Quantity
                                            </label>
                                            <input
                                                value={productQuantity}
                                                onChange={(e) => setProductQuantity(e.target.value)}
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="mt-1 px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div className="col-span-6">
                                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                Your Phone
                                            </label>
                                            <input
                                                value={farmerPhone}
                                                onChange={(e) => setFarmerPhone(e.target.value)}
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="mt-1 px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>






                                    </div>
                                </div>
                                <div>
                                    <label className="block ml-3 text-sm font-medium text-gray-700">Cover photo</label>
                                    <div className="mt-1 px-3 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                        <div className="space-y-1 text-center">
                                            <svg
                                                className="mx-auto h-12 w-12 text-gray-400"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 48 48"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                                >
                                                    <span>Upload a file</span>
                                                    <input onChange={handleFile} id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-4 my-4 max-w-fit'>
                                    <p onClick={addMyLocation} className='p-3 rounded-lg text-white bg-purple-400'>Add my Location</p>
                                </div>

                                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <button
                                        onClick={handleOrder}
                                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default addproduct