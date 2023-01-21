import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
function initializeAppIfNecessary() {
    try {
        return getApp();
    } catch (any) {
        const firebaseConfig = {
            apiKey: "AIzaSyA9599_XUbUglVFZh6BCToJBfk25nd4-VM",
            authDomain: "akielts-web.firebaseapp.com",
            projectId: "akielts-web",
            storageBucket: "akielts-web.appspot.com",
            messagingSenderId: "291650732134",
            appId: "1:291650732134:web:25f6f9815ec7f98cfceda7"
        };
        return initializeApp(firebaseConfig);
    }
}
const app = initializeAppIfNecessary();
export const db = getFirestore(app);
export const auth = getAuth(app);

