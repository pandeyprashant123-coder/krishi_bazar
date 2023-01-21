import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { collection, query, where, getDocs, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/index"
import { handleUserProfile, handleAdminOrders } from "../redux/slices/slice1"
import { getDatabase, ref, child, get } from "firebase/database";
import { toast } from 'react-hot-toast';
const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
    console.log("Current data: ", doc.data());
});
const profile = () => {
    const state = useSelector((state) => state.Slice1)
    const dispatch = useDispatch()

    useEffect(() => {
        const getUserData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "orderItem"));
                const data = querySnapshot.docs.map((doc) => doc.data());
                dispatch(handleAdminOrders(data));
                console.log("called hai state.flag")
            } catch (error) {
                console.log({ error })
                toast.error('Something went wrong')
            }
        }
        getUserData()
    }, [state.flag])

    // useEffect(() => {
    //     const dbRef = ref(getDatabase());
    //     get(child(dbRef, `orderItem`)).then((snapshot) => {
    //         if (snapshot.exists()) {
    //             console.log(snapshot.val());
    //         } else {
    //             console.log("No data available");
    //         }
    //     }).catch((error) => {
    //         console.error(error);
    //     });
    // }, [])
    console.log(state?.userData)
    console.log(state?.adminOrders)
    const profile = state?.userData?.filter((item) => item.uid === state?.auth?.uid)
    const orders = state?.adminOrders?.filter((item) => item?.buyer.uid === state?.auth?.uid)
    console.log({ profile })
    console.log({ orders })

    const getUser = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "cities"));
            const data = querySnapshot.docs.map((doc) => doc.data());
            dispatch(handleUserProfile(data));
            if (data) {
                toast.success('Successfully retrieved user')
                // console.log("Document data:", docSnap.data());
            } else {
                toast.error('Sorry, no documents were retrieved')
                console.log("No such document!");
            }
        } catch (error) {
            console.log({ error })
            toast.error('Something went wrong')
        }
    }
    return (
        <>
            <div className="subcontainer single-product py-12">
                <div className='text-center text-5xl font-bold text-orange-400'>My Profile</div>
                <div className="farmer_produced mt-6 ml-40">

                    <div className="supplyer_card">
                        <img className='supplyer_img' src={'https://thumbs.dreamstime.com/b/portrait-young-man-beard-hair-style-male-avatar-vector-portrait-young-man-beard-hair-style-male-avatar-105082137.jpg'} alt="" />
                        <div className="">
                            <h2 className="name font-bold ">Sanduk Ruit</h2>
                            <h3 className="occupation ml-8">+97798140000</h3>
                            <div className="mb-3">sanduk_ruit@gmail.com</div>
                            <h5 className="Phone Number"></h5>
                            <div className="rating text-orange-500">Rating ****</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, numquam atque similique aliquam cum, dignissimos error adipisci corporis assumenda a repellendus porro dolore aliquid modi!</p>
                        </div>
                    </div>
                </div>

                <h1 className='text-5xl font-bold text-center'>My Orders</h1>
                <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 mx-12">
                    <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                        <thead class="bg-red-300">
                            <tr>
                                <th scope="col" class="px-6 py-4 font-medium text-gray-200">Name</th>
                                <th scope="col" class="px-6 py-4 font-medium text-gray-200">Quantity</th>
                                <th scope="col" class="px-6 py-4 font-medium text-gray-200">Product Name</th>
                                <th scope="col" class="px-6 py-4 font-medium text-gray-200">Buyer Name</th>
                                <th scope="col" class="px-6 py-4 font-medium text-gray-200">Price</th>
                                <th scope="col" class="px-6 py-4 font-medium text-gray-200">Status</th>
                            </tr>
                        </thead>
                        {orders?.map((item) => (
                            <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                                <tr class="hover:bg-gray-50">
                                    <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                        <div class="relative h-10 w-10">
                                            <img
                                                class="h-full w-full rounded-full object-cover object-center"
                                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                            <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                                        </div>
                                        <div class="text-sm">
                                            <div class="font-medium text-gray-700">{item?.farmerOrSeller?.farmerName}</div>
                                            <div class="text-gray-400">{item?.farmerOrSeller?.farmerAddress}</div>
                                        </div>
                                    </th>
                                    <td class="px-6 py-4">
                                        <span
                                            class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                                        >
                                            {item?.farmerOrSeller?.productQuantity}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4"> {item?.farmerOrSeller?.productName}</td>
                                    <td class="px-6 py-4">
                                        <div class="flex gap-2">
                                            <span
                                                class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                                            >
                                                {item?.buyer?.fullName}
                                            </span>

                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="flex justify-start gap-4">
                                            <span
                                                class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                                            >
                                                Rs. {item?.farmerOrSeller?.productPrice}
                                            </span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="flex justify-start gap-4">
                                            <span
                                                class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-yellow-600"
                                            >
                                                {item?.orderStatus}
                                            </span>
                                        </div>
                                    </td>

                                </tr>
                            </tbody>
                        ))}
                    </table>
                    <thead>
                    </thead>
                </div>

            </div>


        </>

    )
}

export default profile

