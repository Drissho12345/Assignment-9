import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const ProtectedRoute = ({children}) => {
    const location  = useLocation()
    console.log(children)
    const {uesr} = useContext(AuthContext)
    if(uesr){
        return children
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>
   
    
};

export default ProtectedRoute;