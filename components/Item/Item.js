import React from 'react'
import { toast } from 'react-hot-toast'
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase/index"
import { useSelector } from 'react-redux';
const Item = ({ item }) => {
    const state = useSelector((state) => state.Slice1)
    const { uid, email } = state?.auth
    const fullName = state?.fullName?.fullName
    const userCoordinates = state?.fullName?.userCoordinates
    const handleOrder = async () => {
        try {
            console.log({ item })
            const data = await addDoc(collection(db, "orderItem"), { orderStatus: 'pending', farmerOrSeller: item, date: new Date(), buyeruid: uid, buyer: { uid, email, userCoordinates, fullName } });
            console.log({ data })
            // setLoading(true)
            toast.success('Thank you for adding Product')
        } catch (error) {
            console.log({ error })
            toast.error('Something went wrong')
        }
    }
    return (
        <div className='p-5 bg-red-500'>
            <p>Name : {item?.productName}</p>
            <p>Price : {item?.productPrice}</p>
            <p onClick={handleOrder}>Order Now</p>
        </div>
    )
}
export default Item

