import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SigninWithSocial from "../SigninWithSocial/SigninWithSocial";

const Register = () => {
  const { user, createUser, updateUser } = useContext(authContext);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //const onSubmit = (data) => console.log(data);

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const name = data.name;
    const photo = data.photo;
    createUser(email, password)
      .then((loggedUser) => {
        const user = loggedUser.user;
        console.log(user);
        setSuccess("successfully Registered");
        setError("");
        updateUser(name, photo)
          .then(() => {})
          .catch((error) => {
            //error
          });
        navigate("/");
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
        setError(message);
        setSuccess("");
      });
    const saveUser = { name: name, email: email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(saveUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          reset();
          Swal.fire({
            icon: "success",
            title: "Registered successfully",
            text: "Success! Register",
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src="" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-5xl font-bold">Register!</h1>
              <div className="text-center">
                <p className="text-success">{success}</p>
                <p className="text-error">{error}</p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">This Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">This Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500" role="alert">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500" role="alert">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500" role="alert">
                    Password is must be At least one upper case English letter
                    At least one lower case English letter At least one digit At
                    least one special character
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Past your photo url"
                  {...register("photo")}
                  className="input input-bordered"
                />
                {errors.photo?.type === "photo" && (
                  <p className="text-red-500" role="alert">
                    Photo is required
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
              <div>
                <p>
                  Already registered?
                  <Link className="text-blue-500" to="/login">
                    Login
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

export default Register;
