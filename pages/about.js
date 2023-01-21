// import Navbar from '@/components/Navbar/Navbar'
// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { getDoc, collection, addDoc, doc, setDoc, getDocs } from "firebase/firestore";
// import { toast } from 'react-hot-toast';
// import { handleUserData } from '@/redux/slices/slice1';
// import { db } from "../firebase/index"
// import axios from 'axios';
// const API_KEY = '496bdb6a6b012b965f3a45c5063597a3'
// const city_name = 'Pokhara'
// const about = () => {
//     const state = useSelector((state) => state.Slice1)
//     const dispatch = useDispatch()
//     console.log(state?.userData)

//     const saveUser = async () => {
//         try {
//             const docRef = await addDoc(collection(db, "cities"), {
//                 name: "Tokyo",
//                 country: "Japan"
//             });
//             console.log(docRef)
//             toast.success('Successfully created user')
//         } catch (error) {
//             console.log({ error })
//             toast.error('Something went wrong')
//         }
//     }
//     const getUser = async () => {
//         try {
//             const querySnapshot = await getDocs(collection(db, "cities"));
//             const data = querySnapshot.docs.map((doc) => doc.data());
//             dispatch(handleUserData(data));
//             if (data) {
//                 toast.success('Successfully retrieved user')
//                 // console.log("Document data:", docSnap.data());
//             } else {
//                 toast.error('Sorry, no documents were retrieved')
//                 console.log("No such document!");
//             }
//         } catch (error) {
//             console.log({ error })
//             toast.error('Something went wrong')
//         }
//     }
//     const playText = () => {
//         console.log('called lannn')
//         state.alan.playText('A metaverse is a user-created virtual world that relies on the power of 3D graphics and user-generated content')
//     }
//     return (
//         <>
//             <div className='bg-red-500 h-screen mt-[-9vh] flex justify-center items-center'>
//                 <p className='p-2 bg-yellow-400 rounded-md m-3 ' onClick={saveUser}>save user</p>
//                 <p className='p-2 bg-yellow-400 rounded-md m-3' onClick={getUser}>Get user</p>

//                 <div>
//                     {state?.userData?.map((item) => (<p className='p-4 my-3'>{item?.name}</p>))}
//                 </div>
//             </div>
//         </>
//     )
// }
// export default about


import React from "react";
// import Achive from '../images/achieve.png'
// import Mission from '../images/mission.png'
// import Vision from '../images/vision.png'


const About = () => {
    return (
        <div>
            <div className="heading">About Us</div>
            <div className="aboutInfo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nostrum
                quae incidunt dolore doloremque sapiente amet nemo odio rerum unde
                provident vero sequi illo, quis praesentium omnis fuga hic nihil
                commodi. Sit, sequi quod! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Fuga, corporis corrupti nisi rerum voluptate assumenda
                necessitatibus illo similique dolor expedita, omnis enim error,
                obcaecati inventore voluptates est. Id dignissimos facilis molestiae
                unde ut, accusantium fuga aliquam, inventore, sequi magni ad quam minima
                excepturi laboriosam dolores!
            </div>

            <div className="about">
                <div className="mission">
                    <img src={'https://github.com/pandeyprashant123-coder/krishi_bazar/blob/main/src/images/mission.png?raw=true'} alt="Error loading image" />
                    <h2>
                        <u>MISSION</u>
                    </h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
                        recusandae odit accusantium dolorem possimus doloribus a consectetur
                        ratione modi quis.
                    </p>
                </div>

                <div className="vision">
                    <img src={'https://github.com/pandeyprashant123-coder/krishi_bazar/blob/main/src/images/vision.png?raw=true'} alt="" />
                    <h2>
                        <u>VISION</u>
                    </h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
                        minus corporis nostrum voluptate enim praesentium impedit, iusto
                        deleniti dolorem fugiat.
                    </p>
                </div>

                <div className="achieve">
                    <img src={'https://github.com/pandeyprashant123-coder/krishi_bazar/blob/main/src/images/achieve.png?raw=true'} alt="" />
                    <h2>
                        <u>ACHIEVE</u>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                        iste, eaque distinctio debitis cupiditate error nostrum quasi autem
                        commodi? Ea.
                    </p>
                </div>
            </div>
           
        </div>
    );
};
export default About