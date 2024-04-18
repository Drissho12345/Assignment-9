import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from './../Firebase/Firebase.config';
import { useState } from "react";
import { FiEye ,FiEyeOff} from "react-icons/fi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterForm = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e =>{
        e.preventDefault();
        const text = e.target.text.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const url = e.target.url.value;
        const accepted = e.target.terms.checked;

        setRegisterError('');
        setSuccess('');

        if(password.length < 6){
            // setRegisterError('Password should be at least 6 characters or longer')
            toast.error("Password should be at least 6 characters or longer!")
            return;
        }
        else if(!/[A-Z]/.test(password)){
            // setRegisterError('Your password should have at least one upper case characters.');
            toast.error("Your password should have at least one upper case characters!")
            return;
        }
        else if(!accepted){
            // setRegisterError('Please accept our terms and condition');
            toast.error("Please accept our terms and condition!")
            return;
        }

        createUserWithEmailAndPassword(auth, email, password, text, url)
        .then(register =>{
            console.log(register.user);
            // setSuccess('User created Successfully')
            toast.success("User created Successfully!");

            // email verify
            sendEmailVerification(register.user)
            .then(() =>{
                toast("Please check your email and verify your account")
            })

            // update profile
            updateProfile(register.user,{
                displayName: text,
                photoURL: url,
            })
            .then(()=>{
                toast("profile update")
            })

        })
        .catch(error =>{
            console.error(error)
            // setRegisterError('Already account created');
            toast.error("Already account created!");
        })
    }
    return (
        <div>
            <div  className="lg:pl-[300px] mb-10">
                <form onSubmit={handleRegister} className="rounded-2xl  lg:w-[600px] p-5 bg-gray-300">
                    <h1 className="text-5xl font-bold text-center mb-4">Register Now</h1>
                    <div  className="mb-6">
                    <h3 className="font-bold">Name:</h3>
                        <label className="input  input-bordered flex items-center gap-2">
                        <input type="text" name="text" placeholder="Username" required/>
                        </label>
                    </div>
                    <div  className="mb-6">
                    <h3 className="font-bold">Photo URL:</h3>
                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        <input type="url" name="url" placeholder="Input Photo URL" required/>
                    </label>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-bold">Email:</h3>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="email" name="email" placeholder="Email" required/>
                        </label>
                    </div>
                    <div className="mb-10">
                        <h3 className="font-bold">Password:</h3>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type={ showPassword ? "text" : "password" }name="password" placeholder="password" required/>
                            <span className="ml-48 md:ml-[590px] lg:ml-[500px] text-xl absolute " onClick={()=>setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FiEye></FiEye> : <FiEyeOff></FiEyeOff> 
                                }
                            </span>
                        </label>
                    </div>


                    {/* <div className="mb-10">
                        <h3 className="font-bold">Confirm Password:</h3>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type={ show ? "text" : "password" }name="password" placeholder="password" required/>
                            <span className="ml-48 md:ml-[590px] lg:ml-[500px] text-xl absolute " onClick={()=>setShow(!show)}>
                                {
                                    show ? <FiEye></FiEye> : <FiEyeOff></FiEyeOff> 
                                }
                            </span>
                        </label>
                    </div> */}


                    <div className="mb-2">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms and Condition</a></label>
                    </div>
                    <button className="btn bg-emerald-400 w-full">Register</button>
                </form>
                {
                    registerError && <p className="text-red-700 pt-3">{registerError}</p>
                }
                {
                    success && <p className="text-green-600 pt-3">{success}</p>
                }
                <p className="mt-2">Already have an account? Please <Link to={"/login"} className="font-bold">Login</Link></p>
            </div>
        </div>
    );
};

export default RegisterForm;