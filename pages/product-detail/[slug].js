import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase/index"
import { handleMapLocation } from "../../redux/slices/slice1"
const Nilesh = '/hero.png'


const slug = () => {
    const state = useSelector((state) => state.Slice1)
    const router = useRouter()
    const [isOrdered, setIsOrdered] = useState(false)
    const dispatch = useDispatch()
    console.log({ state })
    const { uid } = state?.auth
    const Email = state?.auth?.email
    const fullName = state?.fullName?.fullName
    const userCoordinates = state?.fullName?.userCoordinates

    console.log({ uid, Email, fullName, userCoordinates })
    const slug = router?.query?.slug
    console.log({ slug })
    console.log(state?.userData)
    const filterData = state?.userData?.filter((item) => item?.productName == slug)
    console.log({ filterData })
    // const { farmerName, farmerPhone, productName, productPrice, productQuantity, farmerCoordinates, farmerAddress, category, email } = filterData[0]

    const handleLocation = () => {
        dispatch(handleMapLocation(userCoordinates))
        router.push('/map')
    }

    const handleOrder = async () => {
        try {
            const data = await addDoc(collection(db, "orderItem"), { orderStatus: 'pending', farmerOrSeller: filterData[0], date: new Date(), buyeruid: uid, buyer: { uid, email: Email, userCoordinates, fullName } });
            console.log({ data })
            setIsOrdered(true)
            // setLoading(true)
            toast.success('Thank you for adding Product')
        } catch (error) {
            console.log({ error })
            toast.error('Something went wrong')
        }
    }
    return (
        <>


            <div className="subcontainer single-product">
                <div className="row">
                    <div className="cols">
                        <img src="https://www.shutterstock.com/image-photo/assorted-organic-vegetables-fruits-wicker-260nw-1720876849.jpg" width="100%" id="product-img" />
                    </div>
                    <div className="cols">
                        {/* <h2>{filterData[0]?.farmerName}</h2> */}
                        {/* <h1>{filterData[0]?.productName}</h1> */}
                        <h1 className='text-5xl font-bold'>{filterData[0]?.productName}</h1>
                        <h4 className='ml-8'>Rs. {filterData[0]?.productPrice}</h4>
                        {/* <h4>Rs. {filterData[0]?.productPrice}</h4> */}

                        {isOrdered ? (
                            <p onClick={handleOrder} href="#" className="p-2 bg-green-400 text-white font-medium">Thank you for Ordering...</p>

                        ) : (
                            <p onClick={handleOrder} href="#" className="btn cursor-pointer">Order Now</p>
                        )}
                        <h3 className='ml-3 text-orange-600 font-bold text-lg'>Product details</h3>
                        <br />
                        <div>  Rice, (Oryza sativa), edible starchy cereal grain and the grass plant (family Poaceae) by which it is produced. Roughly...</div>
                    </div>
                </div>
                <p className='w-full border-2 border-slate-300 my-6'></p>
                <div className="farmer_produced mt-12">

                    <div className="supplyer_card">
                        <img className='supplyer_img' src={'https://cdn-icons-png.flaticon.com/512/147/147144.png'} alt="" />
                        <div className="">
                            <h2 className="name ">Seller Name</h2>
                            <h3 className="occupation ml-8">+97798140000</h3>
                            <h4 className="email">seller_email@gmail.com</h4>
                            <h5 className="Phone Number"></h5>
                            <div className="rating">stars</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, numquam atque similique aliquam cum, dignissimos error adipisci corporis assumenda a repellendus porro dolore aliquid modi!</p>
                            <div onClick={handleLocation} className="cursor-pointer btn">Track me</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default slug


