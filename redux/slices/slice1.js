import { createSlice } from '@reduxjs/toolkit'
import { HiSelector } from 'react-icons/hi'
const initialState = {
    auth: null,
    alan: null,
    count: null,
    userData: null,
    topRatedFarmers: null,
    products: null,
    userProfile: null,
    fullName: null,
    adminOrders: null,
    flag: true,
    showLogin: false,
    mapLocation: null
}
export const Slice1 = createSlice({
    name: 'global',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        signIn: (state, action) => {
            state.auth = action.payload
        },
        signOut: (state, action) => {
            state.auth = null;
        },
        handleAlan: (state, action) => {
            state.alan = action.payload;
        },
        handleCount: (state, action) => {
            state.count = action.payload;
        },
        handleUserData: (state, action) => {
            state.userData = action.payload;
        },
        handleTopRatedFarmers: (state, action) => {
        },
        handleUserProfile: (state, action) => {
            state.userProfile = action.payload;
        },
        handleFullName: (state, action) => {
            state.fullName = action.payload;
        },
        handleAdminOrders: (state, action) => {
            state.adminOrders = action.payload;
        },
        handleFlag: (state, action) => {
            state.flag = !state.flag
        },
        changeLogin: (state, action) => {
            state.showLogin = !state.showLogin
        },
        handleMapLocation: (state, action) => {
            state.mapLocation = action.payload
        }
    },

})
export const { handleMapLocation, changeLogin, handleFlag, increment, decrement, incrementByAmount, signIn, signOut, handleAlan, handleCount, handleUserData, handleFullName, handleAdminOrders } = Slice1.actions
export default Slice1.reducer
