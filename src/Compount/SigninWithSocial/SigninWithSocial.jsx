import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { authContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SigninWithSocial = () => {
  const { google } = useContext(authContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const googleHandler = () => {
    google()
      .then((result) => {
        const user = result.user;
        const saveUser = { name: user.displayName, email: user.email };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            //console.log(data);
            if (data.insertedId) {
              navigate(from, { replace: true });
            }
          });
      })
      .then(() => {});
  };
  return (
    <div className="mx-auto">
      <button onClick={googleHandler} className="btn btn-outline rounded-full">
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SigninWithSocial;
