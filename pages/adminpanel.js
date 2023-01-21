import React, { useEffect } from 'react'
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase/index"
import { handleAdminOrders, handleFlag } from '@/redux/slices/slice1';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import Table from '@/components/Table/Table';
const adminpanel = () => {
    const state = useSelector((state) => state.Slice1)
    const dispatch = useDispatch()
    useEffect(() => {
        const getUserData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "orderItem"));
                const data = querySnapshot.docs.map((doc) => doc.data());
                dispatch(handleAdminOrders(data));
            } catch (error) {
                console.log({ error })
                toast.error('Something went wrong')
            }
        }
        getUserData()
    }, [])
    const orders = state?.adminOrders
    console.log({ orders })
    const handleAccept = () => {

        // <p onClick={handleReject} className='bg-green-600 text-white'>Click me</p>

    }
    const handleReject = () => { }

    return (
        <div className='bg-blue-50 '>
            {/* <p onClick={handleAccept} className='bg-green-600 my-4 text-white'>Click me</p> */}
            <div className='justify-center items-center flex pt-8'>
                <p className='text-5xl text-black font-bold'>Admin Dashboard</p>
            </div>

            <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead class="bg-red-500">
                        <tr>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-200">Seller Name</th>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-200">Quantity</th>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-200">Product Name</th>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-200">Buyer Name</th>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-200">Price</th>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-200">Status</th>
                            <th scope="col" class="px-6 py-4 font-medium text-gray-200">Actions</th>
                        </tr>
                    </thead>
                   
                    {orders?.map((item) => (
                        <>
                            <Table item={item} />
                        </>
                    ))}
                </table>
                <thead>
                </thead>
            </div>
        </div>
    )
}

export default adminpanel


// import { doc, updateDoc } from "firebase/firestore";
// const washingtonRef = doc(db, "orderItem");
// await updateDoc(washingtonRef,
//     { orderStatus: 'success', farmerOrSeller: item, date: new Date(), buyeruid: uid, buyer: { uid, email, userCoordinates, fullName } }
// );