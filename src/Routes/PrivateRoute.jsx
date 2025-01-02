import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location =useLocation()
    const navigate= useNavigate()
    if(loading){
        return <span className="loading loading-bars loading-lg"></span> 
    }
    if(user){
        return children
    }

    return <Navigate to="/login" state={{ from: location }}></Navigate>
    
};

export default PrivateRoute;