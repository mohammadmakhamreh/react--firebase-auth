import { useContext } from "react";
import CommonForm from "../../components/common-form";
import { AuthContext } from "../../context";
import { registerFormControls } from "../../config";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebaseConfig";



function RegisterPage() {

    const {registerFormData, setRegisterFormData, registerWithFirebase, setLoading} = useContext(AuthContext);
    useContext(AuthContext);
    console.log(registerFormData);
    const navigate = useNavigate();

    function handleRegisterFormSubmit(event){
        event.preventDefault();
        registerWithFirebase()
        .then((result) => {
            if(result.user){
                updateProfile(result.user, {
                    displayName: registerFormData.name
                }).then(() => { 
                    // navigate('/profile');


                    console.log(auth.currentUser.displayName);
                    if(auth.currentUser.displayName){
                        setLoading(false);
                        navigate('/profile');
                    }
                })
            }
        })
        .catch((error) => console.log(error));


    }




    return (
        <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
            <div className="px-6 py-5">
                <h3 className="font-bold">Welcome back</h3>
                <p>Register Page</p>
                <CommonForm
                formControls={registerFormControls}
                formData={registerFormData}
                setFormData={setRegisterFormData}
                onSubmit={handleRegisterFormSubmit}
                buttonText={"save"}
                />
            </div>
        </div>
    );
}

export default RegisterPage;