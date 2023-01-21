import React, { useEffect, useState } from 'react'
import { auth } from "../../firebase/index"
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux'
import { signIn, signOut } from "../../redux/slices/slice1"
import Auth from '../auth/Auth';
import { Toaster } from 'react-hot-toast';
import Navbar from '../Navbar/Navbar';
import { MessengerChat } from "react-messenger-chat-plugin";
const pageID = '108679325425567'
import { Slider } from '../slider/slider';


const Layout = ({ children }) => {
    const state = useSelector((state) => state.Slice1)
    const dispatch = useDispatch()
    useEffect(() => {
        try {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    console.log({ user })
                    const data = { email: user.email, uid: user.uid }
                    dispatch(signIn(data))
                } else {
                    dispatch(signOut())
                }
            })
        } catch (error) {
            console.log(error)
        }
    }, [])
    console.log('rendered', state)
    if (!state.auth) {
        return (<>
            <Toaster />
            {
                state?.showLogin ? (
                    <Auth />
                ) : (
                    <>
                        <Navbar />
                        <Slider />
                    </>
                )
            }


        </>)
    }
    return (
        <>
            <Toaster />
            <Navbar />
            <div className='mt-[-12px]'>
                < MessengerChat
                    pageId={pageID}
                    language="en_US"
                    themeColor={"#fc3468"}
                    bottomSpacing={30}
                    loggedInGreeting="Welcome to BugLovers"
                    loggedOutGreeting="Please login to continue !"
                    greetingDialogDisplay={"fade"}
                    debugMode={true}
                    onMessengerShow={() => {
                        console.log("onMessengerShow");
                    }
                    }
                    onMessengerHide={() => {
                        console.log("onMessengerHide");
                    }}
                    onMessengerDialogShow={() => {
                        console.log("onMessengerDialogShow");
                    }}
                    onMessengerDialogHide={() => {
                        console.log("onMessengerDialogHide");
                    }}
                    onMessengerMounted={() => {
                        console.log("onMessengerMounted");
                    }}
                    onMessengerLoad={() => {
                        console.log("onMessengerLoad");
                    }}
                />
                {children}
            </div>
            <div className="footer">
                Copyright © 2023 All rights reserved by <b>Krishi Bazar</b>
            </div>
        </>
    )
}
export default Layout
