
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { AuthContext } from "../Auth/AuthProvider";
const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext)
    const handleGoogleLogin =() =>{
        googleLogin()
        .then(result =>console.log(result.user))
    }
    return (
        <div className="flex gap-2 item-center justify-center">
            <button onClick={handleGoogleLogin}  type="button" className="py-2 flex gap-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black">
            < FcGoogle className=" text-white rounded-full h-6 w-6" />
            Login with Google</button>

            <button type="button" className="py-2 flex gap-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black">
            < SiGithub className="rounded-full h-6 w-6" />
            Login with Github</button>
        </div>
    );
};

export default SocialLogin;