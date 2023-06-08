import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SigninWithSocial from "../SigninWithSocial/SigninWithSocial";

const Login = () => {
  const { user, signInUser } = useContext(authContext);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    signInUser(email, password)
      .then((loggedUser) => {
        const user = loggedUser.user;
        console.log(user);
        Swal.fire({
          title: "Login Successful",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        setError("");
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
        setError(message);
        setSuccess("");
        navigate(from, { replace: true });
      });
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const validateCaptchaHandler = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src="" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={loginHandler} className="card-body">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <div className="text-center">
                <p className="text-success">{success}</p>
                <p className="text-error">{error}</p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
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
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  onBlur={validateCaptchaHandler}
                  placeholder="Type Same Captcha"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  disabled={disabled}
                  type="submit"
                  value="Login"
                />
              </div>
              <div>
                <p>
                  New Here!
                  <Link className="text-blue-500" to="/register">
                    Register
                  </Link>
                </p>
              </div>
              <div className="divider">OR</div>
              <SigninWithSocial></SigninWithSocial>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
