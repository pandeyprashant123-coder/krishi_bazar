// import { useRouter } from 'next/router'

// import React from 'react'
// import Link from 'next/link'
// import { useSelector, useDispatch } from 'react-redux'
// import { toast } from 'react-hot-toast'
// const Navbar = () => {
//   const router = useRouter()
//   const dispatch = useDispatch()
//   const state = useSelector((state) => state.Slice1)
//   const links = [
//     {
//       name: '/',
//       display: 'Home',
//       // icon: <AiOutlineHome className='text-2xl ' />,
//     },
//     {
//       name: 'profile',
//       display: 'Profile',

//       // icon: <IoSchoolOutline className='text-2xl' />,
//     },
//     {
//       name: 'map',
//       display: 'Google Map',

//       // icon: <GrMoney className='text-2xl' />,
//     },
//     {
//       name: 'addproduct',
//       display: 'Add Product',

//       // icon: <IoSearchCircleOutline className='text-2xl' />,
//     }
//     ,

//     {
//       name: 'blog',
//       display: 'Blogs',

//       // icon: <ImBlogger className='text-lg' />
//     }
//     , {
//       name: 'about',
//       display: 'About us',

//       // icon: <ImInfo className='text-2xl' />
//     }
//   ]
//   const handleLogOut = async () => {
//     var flag = false;
//     try {
//       const data = await signOut(auth)
//       toast.success('Success', {
//         position: 'top-right',
//         autoClose: 3000,
//       })
//     } catch (error) {
//       console.log(error)
//       toast.error('Error', {
//         position: 'top-right',
//         autoClose: 3000,
//       })
//     }
//   }

//   // var route = router.pathname
//   // if (route == '/') {
//   //   route = 'Home'
//   // }
//   // else if (route.includes('/scholarships')) {
//   //   route = 'Services'
//   // }
//   // else if (route.includes('/apply')) {
//   //   route = 'Product'
//   // }
//   // else if (route.includes('/research-topic')) {
//   //   route = 'Items'
//   // }
//   // else if (route.includes('/abroad')) {
//   //   route = 'Education'
//   // }
//   // else if (route.includes('/blog')) {
//   //   route = 'Blogs'
//   // }
//   // else if (route.includes('/blogs')) {
//   //   route = 'blogs'
//   // }
//   // else {
//   //   route = router.pathname.split('/')[1]
//   // }

//   return (
//     <>
//       <div
//         className={`transition-all bg-red-500 ${router.pathname==='/map'?'bg-green-300':''} ease-out duration-700 fixed top-0  w-screen  z-10 md:z-50 px-4 flex h-14  items-center justify-between md:justify-start lg:justify-between py-8 pb-10`}
//       >
//       {/* <div
//         className={`transition-all ${router.pathname === '/blogs' || router.pathname === '/scholarship' || router.pathname==='/abroad/test-preparation/topics' || router.pathname === '/grand' || router.pathname === '/abroad/study-abroad/topics' ? 'bg-transparent shadow-sm' : ''} ${router.pathname === '/' || router.pathname === '/research' ? 'bg-white ' : 'bg-black'} ease-out duration-700 fixed top-0  w-screen ${activeState ? 'w-full' : 'w-screen'
//           } z-10 md:z-50 px-4 flex h-14  items-center justify-between md:justify-start lg:justify-between py-8 pb-10`}
//       > */}
//         <Link href={'/contact'}>
//           <p className="bg-blue-500 invisible shadow-sm hidden md:block font-google  hover:scale-110 transition-all duration-150 ease-out cursor-pointer  fixed top-28 text-white  px-6 left-[-41px] -rotate-90 p-1" >Contact Us</p>
//         </Link>
//         {/* <div className={`  none md:invisible rounded-full bg-light-gray md:pl-3 pl-4 `}>
//           <Tooltip
//             title={activeState ? 'Hide Sidebar' : 'Show Sidebar'}
//             className={activeState ? 'hidden md:block' : 'block'}
//           >
//             <button>
//               <AiOutlineMenu
//                 onClick={handleSidebar}
//                 className="xs:ml-1 xs:ml-2 sm:ml-6  lg:ml-6  mt-1 cursor-pointer text-2xl text-blue-500 md:text-2xl"
//               />
//             </button>
//           </Tooltip>
//         </div> */}
//         <div className='hidden  lg:ml-30 md:flex items-center justify-start md:justify-center space-x-2 lg:space-x-6 xl:space-x-8 '>
//           {links?.map((item, i) => (
//             <Link key={i} href={`${item?.name === '/' ? '/' : `/${item.name}`}`}>
//               <div className={`text-white  font-bold  transition-all z-50 ease-out duration-100 cursor-pointer hover:text-blue-700 `}>{item?.display}</div>
//             </Link>
//           ))}
//         </div>
//         <div
//           className={` mr-1 flex items-center md:mr-2 `}
//         >
//           <div className="flex lg:hideen xs:mr-1 mr-3 xl:flex justify-around items-center xs:space-x-5 sm:space-x-7">
//             {state?.auth && (
//               <div className='hidden xl:flex mr-2  items-center'>
//                 {/* <Avatar alt="Man"
//                   className="h-3 w-3 md:h-4 md:w-4  " sx={{ bgcolor: '#0096FF' }} >{loginData?.fullName[0]?.toUpperCase()}</Avatar>
//                 <MdKeyboardArrowDown
//                   className=" sm:ml-3 xs:ml-1 cursor-pointer text-xl text-slate-200"
//                 /> */}
//                 <p className={`${router.pathname === '/abroad/study-abroad/topics' ? 'text-slate-100' : ''} shadow-sm font-semibold ${router.pathname === '/' || router.pathname === '/scholarship' || router.pathname === '/research' ? 'text-slate-100' : 'text-slate-200'} p-1 xs:px-1 sm:px-2 rounded-md hover:text-blue-700`}>Hey, {'Raju'}</p>
//               </div>
//             )}
//             {state?.auth? (
//               <div onClick={handleLogOut} className='md:hidden xl:flex items-center ml-2  space-x-1 cursor-pointer hover:text-red-400 backdrop:items-center'>
//                 <span className='text-md bg-blue-500 text-white px-3 mt-2 md:mt-0 hover:bg-blue-600 p-2 font-medium  cursor-pointer shadow-md rounded-md'>Sign Out</span>
//               </div>
//             ) : (
//               <div onClick={() => router.push('/auth')} className='hidden lg:flex items-center ml-2  space-x-1 cursor-pointer hover:text-red-400 backdrop:items-center'>
//                 {
//                   router.pathname !== '/auth' && (
//                     <span className='text-md bg-green-500 text-white hover:bg-orange-600 p-2 font-medium  cursor-pointer shadow-md rounded-md px-3'>Sign In</span>
//                   )
//                 }
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
// export default Navbar


// // const Navbar = () => {
// //     const state = useSelector((state) => state.Slice1)
// //     const router = useRouter()
// //     const handleSignOut = async () => {
// //         await signOut(auth)
// //         toast.success('Success')
// //     }
// //     return (
// //         <>
// //             {/* <div className='bg-gray-800 p-2 flex justify-center items-center space-x-20'>
// //                 <div className=' text-purple-800 flex justify-center items-center space-x-5 '>
// //                     <p onClick={() => router.push('/')} className='hover:text-white font-bold cursor-pointer'>Home</p>
// //                     <p onClick={() => router.push('/about')} className='hover:text-white font-bold cursor-pointer'>About</p>
// //                     <p onClick={() => router.push('/about')} className='hover:text-white font-bold cursor-pointer'>Blogs</p>
// //                     <p onClick={() => router.push('/about')} className='hover:text-white font-bold cursor-pointer'>Tech</p>
// //                     <p onClick={() => router.push('/about')} className='hover:text-white font-bold cursor-pointer'>Services</p>
// //                     <p onClick={() => router.push('/about')} className='hover:text-white font-bold cursor-pointer'>Product</p>
// //                     <p onClick={handleSignOut} className='hover:text-white font-bold cursor-pointer'>Sign Out</p>
// //                 </div>
// //             </div> */}




// //         </>
// //     )
// // }
// // export default Navbar



import { signOut } from 'firebase/auth'
import { auth } from "../../firebase/index"
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-hot-toast'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { changeLogin } from '@/redux/slices/slice1'
import { useRouter } from 'next/router'

const links = [
  {
    name: '/',
    display: 'Home',
    // icon: <AiOutlineHome className='text-2xl ' />,
  },

  {
    name: 'product',
    display: 'Product',

    // icon: <GrMoney className='text-2xl' />,
  },
  {
    name: 'askexpert',
    display: 'Ask Expert',

    // icon: <GrMoney className='text-2xl' />,
  },
  // {
  //   name: 'map',
  //   display: 'Google Map',

  //   // icon: <GrMoney className='text-2xl' />,
  // },
  // {
  //   name: 'addproduct',
  //   display: 'Add Product',

  //   // icon: <IoSearchCircleOutline className='text-2xl' />,
  // }
  ,

  {
    name: 'blog',
    display: 'Blogs',

    // icon: <ImBlogger className='text-lg' />
  }
  , {
    name: 'about',
    display: 'About us',

    // icon: <ImInfo className='text-2xl' />
  },
  {
    name: 'profile',
    display: 'Profile',
    checkAuth: true

    // icon: <IoSchoolOutline className='text-2xl' />,
  },
  {
    name: 'addproduct',
    display: 'Add Product',
    checkAuth: true
    // icon: <IoSearchCircleOutline className='text-2xl' />,
  }
]
const Navbar = () => {
  const state = useSelector((state) => state.Slice1)
  const user = state?.auth?.uid
  const dispatch = useDispatch()
  const router = useRouter()
  const handleLogOut = async () => {
    var flag = false;
    try {
      const data = await signOut(auth)
      toast.success('Success', {
        position: 'top-right',
        autoClose: 3000,
      })
    } catch (error) {
      console.log(error)
      toast.error('Error', {
        position: 'top-right',
        autoClose: 3000,
      })
    }
  }
  const handleSignIn = () => {
    dispatch(changeLogin())
  }
  return (
    <div className={`${router.pathname === '/adminpanel' ? 'hidden' : ''}`
    }>
      <div className="container">
        <div className="navbar space-x-32">
          <div className="logo">
            <a href="#"><img src={'https://github.com/pandeyprashant123-coder/krishi_bazar/blob/main/src/images/logo.png?raw=true'} alt="logo" width="125px" /></a>
          </div>
          <nav className=''>
            <ul id="menuitems">
              {
                links?.map((item, i) => (
                  <>
                    {
                      item?.checkAuth ? (user && (
                        <Link href={`/${item.name}`}>
                          <p className="text-black font-bold  hover:text-gray-500" >{item?.display}</p>
                        </Link>
                      )) : (
                        <>
                          <Link href={`/${item.name}`}>
                            <p className="text-black font-bold  hover:text-gray-500" >{item?.display}</p>
                          </Link>
                        </>

                      )
                    }

                  </>
                ))
              }


            </ul>
          </nav>
          {/* <div className="icon">
            <FaUser />
          </div> */}
          <div>
            {
              state?.auth?.uid ? (
                <p onClick={handleLogOut} className='p-2 hover:scale-105 hover:cursor-pointer border-2 border-red-300  text-md font-bold rounded-xl'>Sign Out &rarr; </p>
              ) : (
                <p onClick={handleSignIn} className='p-2 hover:scale-105 hover:cursor-pointer border-2 border-red-300  text-md font-bold rounded-xl'>Sign In &rarr; </p>
              )
            }

          </div>
        </div>
      </div>
    </div >
  )
}
export default Navbar