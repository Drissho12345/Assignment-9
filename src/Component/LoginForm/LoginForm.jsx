import { Link } from "react-router-dom";
import auth from "../Firebase/Firebase.config";
import { signInWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
// import Register from './../Register/Register';
import { FiEye ,FiEyeOff} from "react-icons/fi";

import { toast } from "react-toastify";

// social auth provider
// const googleProvider =new GoogleAuthProvider()

const LoginForm = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin= e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        setRegisterError('');
        setSuccess('');

        if(password.length < 6){
            setRegisterError('Password should be at least 6 characters or longer')
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
        .then(register =>{
            console.log(register.user);
            if(register.user.emailVerified){
                // setSuccess('User Login Successfully')
                toast.success("User Login Successfully")
            }
            else{
                toast("Please verify your email address")
            }
            
        })
        .catch(error =>{
            console.error(error)
            // setRegisterError('no account here');
            toast.error("No account here. Please Register")
        })
    }
    // google login
    // const googleLogin =()=>{
    //     return signInWithPopup (auth,googleProvider)
    // } 
    return (
        <div>
            <div  className="lg:pl-[300px] mb-10">
            <form onSubmit={handleLogin} className="rounded-2xl  lg:w-[600px] p-5 bg-gray-300">
                <div className="mb-6">
                    <h1 className="text-6xl font-bold text-center mb-4">Login</h1>
                    <h3 className="font-bold">Email:</h3>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="email" name="email" className="grow" placeholder="Email" />
                    </label>
                </div>
                <div className="mb-10">
                    <div >
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
                    <div className="flex justify-between">
                        <p className="text-center pt-3 text-[16px] font-bold cursor-pointer">Forget Password</p>
                        <h1 className="text-center pt-3 text-[16px]">Don't have an account?<Link to={"/Register"}> <u className="font-bold">Register</u></Link></h1>
                    </div>
                </div>
                <button className="btn mb-7 bg-emerald-400 w-full">Submit</button>
                <div className="flex gap-4 justify-center">
                    <hr className="w-2/3 mt-4"/>
                    <h3 className="text-xl font-bold">OR</h3>
                    <hr className="w-2/3 mt-4"/>
                </div>
                <div className="flex gap-2 item-center justify-center">
                    <button type="button" className="py-2 flex gap-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black">
                    < FcGoogle className=" text-white rounded-full h-6 w-6" />
                    Login with Google</button>
                    <button type="button" className="py-2 flex gap-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black">
                    < SiGithub className="rounded-full h-6 w-6" />
                    Login with Github</button>
                </div>
            </form>
                {
                    registerError && <p className="text-red-700 pt-3">{registerError}</p>
                }
                {
                    success && <p className="text-green-600 pt-3">{success}</p>
                }
            </div>
        </div>
    );
};

export default LoginForm;