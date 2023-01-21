import { configureStore } from '@reduxjs/toolkit'
import Slice1 from "../redux/slices/slice1"
export const store = configureStore({
    reducer: {
        Slice1: Slice1,
    },
})