import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import GoogleLogin from "../../Componnets/socialLogin/GoogleLogin";
import lottieLogin from "../../assets/mylottie/login2.json"
import Lottie from "lottie-react";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  
  const [text, setText] = useState("Check");
  const [disable, setDisable] = useState(true);
  const navigate= useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log("User : ", user);
      Swal.fire({
              title: "SignUp Success!",
              icon: "success",
              draggable: true
            });
            navigate(from, { replace: true })
    });
  };
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      alert("Captcha Matched");
      setDisable(false);
      setText("Matched");
    } else {
      alert("Captcha Not Matched");
      setDisable(true);
    
    }

    
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Bistro||Login</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center ">
          <h1 className="text-3xl font-bold">Login now!</h1>
          <div className="w-96">
          <Lottie animationData={lottieLogin} loop={true} ></Lottie>
        </div>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleValidateCaptcha}
                type="text"
                
                name="captcha"
                placeholder="type the captcha"
                className="input input-bordered"
                required
              />
              <p>{text}</p>
              

              
            </div>
            <div className="form-control mt-6">
              <input
              //applying disable attribute for re Captcha
                disabled={false}
                value="login"
                type="submit"
                className="btn btn-primary"
              />
            </div>
          </form>
          <p className="text-center font-bold card-footer">
            {" "}
            <small>
              new here ! Please <Link to="/signup"><span className="text-red-600">SignUp</span></Link>
            </small>
          </p>
          <GoogleLogin></GoogleLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
