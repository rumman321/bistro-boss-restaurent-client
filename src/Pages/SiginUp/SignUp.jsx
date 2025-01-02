import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  
  const navigate = useNavigate()
  const location = useLocation()

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => { 
    console.log(data)
    createUser(data.email, data.password)
    .then(res=>{
      console.log(res)
      Swal.fire({
        title: "SignUp Success!",
        icon: "success",
        draggable: true
      });
      updateUserProfile(data.name, data.photo)
      .then(()=>{
        console.log("Profile Updated")
        reset()
        navigate("/")
      })
      
    })
  };
  console.log(watch("password")); // watch input value by passing the name of it
  return (
    <div  className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Bistro||SignUp</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            {/* errors will return when field validation fails  */}
            {errors.name && (
              <span className="text-red-600">Name is required</span>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                {...register("photo", { required: true })}
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            {/* errors will return when field validation fails  */}
            {errors.photo && (
              <span className="text-red-600">Photo is required</span>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            {errors.email && (
              <span className="text-red-600">email is required</span>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%#*?&]+$/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            {errors.password?.type === "required" && (
              <span className="text-red-600">Password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-600">
                Password must be 6 characters or more
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-red-600">
                Password must have one uppercase letter, one special character,
                one digit, and one lowercase letter
              </span>
            )}

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary"
              />
              
              {/* <button className="btn btn-primary">SignUp</button> */}
            </div>
          </form>
          <p> Already Have an Account <Link to="/login"> login</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
