import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const blog = () => {
    return (
        <div >
            <div className='min-h-[105vh] md:min-h-0 bg-gradient-to-r from-orange-400 to-rose-400 mt-[-12vh]'>
                <div className="pt-24">
                    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                            <p className="uppercase text-5xl lg:px-1 font-bold tracking-loose w-full text-purple-200">Looking for Blogs ?</p>
                            <h1 className="text-slate-200 font-google my-4 lg:px-7 text-2xl leading-tight">
                                The first step in blogging is not writing them but reading them.
                            </h1>

                        </div>
                        <div className="w-full md:w-3/5 py-6 text-center">
                            <img className="rounded-lg  duration-150 ease-out w-full md:w-4/5 z-50" src="/hero.png" />
                        </div>

                    </div>
                </div>
            </div>

            <section className="bg-white border-b py-8">

                <div className="container max-w-5xl mx-auto m-8">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-pink-600">
                        Blogs
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-5/6 sm:w-1/2 p-6  hover:shadow-md">
                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Safe use of Insecticides
                            </h3>
                            <p className="text-gray-600 mb-8">
                            Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip
                              Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip
                              Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip
                              Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip
                                <br />
                                <br />
                                Last updated:
                                <a className="text-pink-500 underline" href="https://undraw.co/"> 5 days ago</a>
                            </p>
                        </div>
                        <div className="w-full sm:w-1/2 p-6 mt-6">
                            <Link href={'/blog/pearl-harbour'}>
                                <img className="rounded-lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out w-full md:w-4/5 z-50" src="/aaa.webp" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                        <Link href={'/blog/web3'}>
                            <div className="w-full sm:w-1/2 p-6 mt-6">
                                <img className="rounded-lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out w-full md:w-4/5 z-50" src="/aaa.webp" />
                            </div>
                        </Link>

                        <div className="w-full sm:w-1/2 p-6 mt-6">
                            <div className="align-middle hover:shadow-md p-4">
                                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                    NPK Fertilizers
                                </h3>
                                <p className="text-gray-600 mb-8">
                                Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip
                              Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip
                              Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip
                              Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip
                                    <br />
                                    <br />
                                    Last updated:
                                    <a className="text-pink-500 underline" href="https://undraw.co/"> 7 days ago</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container max-w-5xl mx-auto m-8">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-pink-600">
                        More Blogs
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-5/6 sm:w-1/2 p-6  hover:shadow-md">
                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Modern Agriculture
                            </h3>
                            <p className="text-gray-600 mb-8">
                              Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip
                              Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip
                              Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip
                              Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip
                                <br />
                                <br />
                                Last updated:
                                <a className="text-pink-500 underline" href="https://undraw.co/"> 5 days ago</a>
                            </p>
                        </div>
                        <div className="w-full sm:w-1/2 p-6 mt-6">
                            <Link href={'/blog/pearl-harbour'}>
                                <img className="rounded-lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out w-full md:w-4/5 z-50" src="/aaa.webp" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                        <Link href={'/blog/web3'}>
                            <div className="w-full sm:w-1/2 p-6 mt-6">
                                <img className="rounded-lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out w-full md:w-4/5 z-50" src="/aaa.webp" />
                            </div>
                        </Link>

                        <div className="w-full sm:w-1/2 p-6 mt-6">
                            <div className="align-middle hover:shadow-md p-4">
                                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                    Irrigation
                                </h3>
                                <p className="text-gray-600 mb-8">
                                Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip
                              Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip
                              Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip
                              Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip
                                    <br />
                                    <br />
                                    Last updated:
                                    <a className="text-pink-500 underline" href="https://undraw.co/"> 7 days ago</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </section>













           
            {/* <section className="bg-gray-100 py-8">
            <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                    Pricing
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
                    <div className="flex flex-col w-5/6 lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out:w-1/4 mx-auto lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out:mx-0 rounded-none lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out:rounded-l-lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out bg-white mt-4">
                        <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                            <div className="p-8 text-3xl font-bold text-center border-b-4">
                                Free
                            </div>
                            <ul className="w-full text-center text-sm">
                                <li className="border-b py-4">Thing</li>
                                <li className="border-b py-4">Thing</li>
                                <li className="border-b py-4">Thing</li>
                            </ul>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                                £0
                                <span className="text-base">for one user</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    className="mx-auto lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out focus:outline-none focus:shadow-outline transform cursor-pointer transition hover:scale-105 cursor-pointer transition-all duration-150 ease-out duration-300 ease-in-out">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-5/6 lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out:w-1/3 mx-auto lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out:mx-0 rounded-lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out bg-white mt-4 sm:-mt-6 shadow-lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out z-10">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <div className="w-full p-8 text-3xl font-bold text-center">Basic</div>
                            <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                            <ul className="w-full text-center text-base font-bold">
                                <li className="border-b py-4">Thing</li>
                                <li className="border-b py-4">Thing</li>
                                <li className="border-b py-4">Thing</li>
                                <li className="border-b py-4">Thing</li>
                            </ul>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div className="w-full pt-6 text-4xl font-bold text-center">
                                £x.99
                                <span className="text-base">/ per user</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    className="mx-auto lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out focus:outline-none focus:shadow-outline transform cursor-pointer transition hover:scale-105 cursor-pointer transition-all duration-150 ease-out duration-300 ease-in-out">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-5/6 lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out:w-1/4 mx-auto lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out:mx-0 rounded-none lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out:rounded-l-lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out bg-white mt-4">
                        <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                            <div className="p-8 text-3xl font-bold text-center border-b-4">
                                Pro
                            </div>
                            <ul className="w-full text-center text-sm">
                                <li className="border-b py-4">Thing</li>
                                <li className="border-b py-4">Thing</li>
                                <li className="border-b py-4">Thing</li>
                            </ul>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                                £x.99
                                <span className="text-base">/ per user</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    className="mx-auto lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out focus:outline-none focus:shadow-outline transform cursor-pointer transition hover:scale-105 cursor-pointer transition-all duration-150 ease-out duration-300 ease-in-out">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
            {/* <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
                    <g className="wave" fill="#f8fafc">
                        <path
                            d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z">
                        </path>
                    </g>
                    <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                        <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                            <path
                                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                                opacity="0.100000001"></path>
                            <path
                                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                                opacity="0.100000001"></path>
                            <path
                                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                                opacity="0.200000003"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg> */}
            <section className="container mx-auto text-center py-6 mb-12">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
                    Call to Action
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <h3 className="my-4 text-3xl leading-tight">
                    Just Love us
                </h3>
                <button
                    className="mx-auto lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out focus:outline-none focus:shadow-outline transform cursor-pointer transition hover:scale-105 cursor-pointer transition-all duration-150 ease-out duration-300 ease-in-out">
                    By registering in..
                </button>
            </section>
            {/* <footer className="bg-white">
            <div className="container mx-auto px-8">
                <div className="w-full flex flex-col md:flex-row py-6">
                    <div className="flex-1 mb-6 text-black">
                        <a className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg hover:scale-105 cursor-pointer transition-all duration-150 ease-out:text-4xl" href="#">
                            <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                                <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502"
                                    transform="matrix(1,0,0,1,0,0)" />
                                <path className="plane-take-off"
                                    d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z " />
                            </svg>
                            LANDING
                        </a>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Links</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Legal</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Social</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Company</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <a href="https://www.freepik.com/free-photos-vectors/background" className="text-gray-500 text-center">Background vector
                created by freepik - www.freepik.com</a>
        </footer> */}

            <div>
                <p className="text-center p-3">Special credits to : <a href="https://themewagon.com/">Dipesh Pandit</a></p>
            </div>
        </div>
    )
}
export default blog