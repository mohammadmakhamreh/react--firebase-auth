import { createContext, useEffect } from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebaseConfig";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);


export default function AuthState({ children }) {


    const [registerFormData, setRegisterFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [loginFormData, setloginFormData] = useState({
        email: '',
        password: ''
    });

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    function registerWithFirebase(){
        setLoading(true);
        const {email, password} = registerFormData;
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function loginWithFirebase(){
        setLoading(true);
        const {email, password} = loginFormData;
        return signInWithEmailAndPassword(auth, email, password);
    }

    function handleLogout(){
        return auth.signOut();
    }

    useEffect(() => {
        const checkAuthState = onAuthStateChanged(auth, (currentUser) => { 
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            checkAuthState();
            };

    },[]);

    useEffect(() => {
        if(user) navigate('/profile');
    },[user]);

    if(loading) return <p>Loading...</p>;

        console.log(user,'currentUser');

    return (
        <AuthContext.Provider value={{ registerFormData, setRegisterFormData, registerWithFirebase, user, loading, loginFormData, setloginFormData,loginWithFirebase, handleLogout, setLoading }}>
            {children}
        </AuthContext.Provider>
);
}