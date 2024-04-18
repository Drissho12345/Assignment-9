
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FiEye ,FiEyeOff} from "react-icons/fi";
import { toast } from "react-toastify";
import { AuthContext } from "../Auth/AuthProvider";
import { updateProfile } from "firebase/auth";
// import { sendEmailVerification } from "firebase/auth";

const Register = () => {

    const {registerUser,setUser} = useContext(AuthContext)
    
    const [ showPassword ,setShowPassword] = useState()
    const [show , setShow] = useState()
    const handleRegister = (e) => {
        e.preventDefault();
        const text = e.target.text.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const url = e.target.url.value;
        const confirmPassword =e.target.confirmPassword.value;
        const accepted = e.target.terms.checked;
        console.log(text,email,password,url,confirmPassword);
        

        if(password.length < 6){
            toast.error("Password should be at least 6 characters or longer!")
            return;
        }
        else if(!accepted){
            toast.error("Please accept our terms and condition!")
            return;
        }
        else if(password !== confirmPassword){
            toast.error("Password didn't match!")
            return;
        }
        else if(!/[A-Z]/.test(password)){
            toast.error("Your password should have at least one upper case characters!")
            return;
        }

        registerUser(email,password,text)
        .then(register =>{
            console.log(register.user);
            // setSuccess('User created Successfully')
            toast.success("User created Successfully!");
            updateProfile(register.user, {
                displayName: name, 
                photoURL: url
              })
            setUser(register.user)

            // // email verify
            // sendEmailVerification(register.user)
            // .then(() =>{
            //     toast("Please check your email and verify your account")
            // })

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
                <form className="rounded-2xl  lg:w-[600px] p-5 bg-gray-300"  onSubmit={handleRegister}>
                    <h1 className="text-5xl font-bold text-center mb-4">Register Now</h1>
                    <div  className="mb-6">
                    <h3 className="font-bold">Name:</h3>
                        <label className="input  input-bordered flex items-center gap-2">
                            <input type="text" name="text" placeholder="Username"required/>
                        </label>
                       
                    </div>

                    <div  className="mb-6">
                    <h3 className="font-bold">Photo URL:</h3>
                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <input type="url" name="url" placeholder="Input Photo URL"  required/>
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
                            <input type={ showPassword ? "text" : "password" } name="password" placeholder="password"  required/>
                            <span className="ml-48 md:ml-[590px] lg:ml-[500px] text-xl absolute " onClick={()=>setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FiEye></FiEye> : <FiEyeOff></FiEyeOff> 
                                    }
                                </span>
                        </label>
                        
                    </div>
                    <div className="mb-10">
                        <h3 className="font-bold">Confirm Password:</h3>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type={ show ? "text" : "password" } name="confirmPassword" placeholder="password" required/>
                            <span className="ml-48 md:ml-[590px] lg:ml-[500px] text-xl absolute " onClick={()=>setShow(!show)}>
                                {
                                    show ? <FiEye></FiEye> : <FiEyeOff></FiEyeOff> 
                                }
                            </span>
                        </label>
                    </div>
                    <div className="mb-2">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms and Condition</a></label>
                    </div>
                    <button className="btn bg-emerald-400 w-full">Register</button>
                
                    <p className="mt-2"> Have an account? Please <Link to={"/login"} className="font-bold">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;