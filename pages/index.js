import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { auth } from "../firebase/index"
import { db } from "../firebase/index"
import toast from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth'
import Navbar from '@/components/Navbar/Navbar'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { handleAlan, handleCount, handleUserData, handleFullName } from '@/redux/slices/slice1'
const alanKey = 'c411c68b1472d0c9b61616ccb9a09ec72e956eca572e1d8b807a3e2338fdd0dc/stage'
import Item from '@/components/Item/Item'
import { collection, query, where, getDocs } from "firebase/firestore";
import { Slider } from '@/components/slider/slider'

export default function Home() {
  const state = useSelector((state) => state.Slice1)
  console.log(state?.alan)
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    const getUserData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "addProduct"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        dispatch(handleUserData(data));
        console.log({ data })
      } catch (error) {
        console.log({ error })
        toast.error('Something went wrong')
      }
    }
    getUserData()
    console.log('flag point')
  }, [state.flag])
  useEffect(() => {
    const alanBtn = require('@alan-ai/alan-sdk-web');
    dispatch(handleAlan(
      alanBtn({
        key: alanKey,
        onCommand: ({ command }) => {
          console.log({ command })
          if (command === 'introduce me') {
            alert('i received command')
          }
          if (command === 'ordernow') {
            
          }
          if (command === 'about page') {
            router.push('/about')
          }
          if (command == 'goBack') {
            router.back()
          }
        }
      })
    ))
  }, []);
  useEffect(() => {
    if (state?.alan && !state?.count) {
      state?.alan?.activate()
    }
  }, [state?.alan])
  useEffect(() => {
    if (state?.alan && !state?.count) {
      state?.alan?.playText('Hello i am your voice assistant.Please remember me if you need any help')
      dispatch(handleCount(1))
    }
  }, [state?.alan])
  useEffect(() => {
    console.log(state?.auth?.email)
    const getFullName = async () => {
      const q = query(collection(db, "registeredUsers"), where("email", "==", state?.auth?.email));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => doc.data());
      console.log({ data })
      console.log('check check')
      dispatch(handleFullName(data[0]));
    }
    getFullName()
  }, [])
  const handleClick = async (e) => {
    e.preventDefault();
    await signOut(auth)
    toast.success('Successfully sign out');
  }
  const playText = () => {
    console.log('called lannn')
    state?.alan?.activate()
    state.alan.playText('Welcome home buddy')
  }

  console.log(state.fullName)
  return (
    <div className=''>
      <Slider />
    </div>

  )
}
