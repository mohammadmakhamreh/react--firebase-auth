import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCuiLdu6c5UMpijuQxjwMASBNDQ-HStgKg",
    authDomain: "react-firebase-auth-2026.firebaseapp.com",
    projectId: "react-firebase-auth-2026",
    storageBucket: "react-firebase-auth-2026.firebasestorage.app",
    messagingSenderId: "925325620538",
    appId: "1:925325620538:web:4e166cb5dab73a207c8c03",
    measurementId: "G-E7YHJEQT4L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
