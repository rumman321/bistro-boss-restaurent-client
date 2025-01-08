import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const GoogleLogin = () => {
    const {googleSignIn} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(res=>{
            console.log(res.user);
            const userInfo ={
                email: res?.user?.email,
                name: res?.user?.displayName
            }
            axiosPublic.post("/users", userInfo)
            .then(res =>{
                console.log(res.data)
                navigate("/")
            })
        })
    }
  return (
    <div className="text-center my-2">
      <button onClick={handleGoogleSignIn} className="btn">
      <FaGoogle />
        GOOGLE
      </button>
    </div>
  );
};

export default GoogleLogin;
