import React, { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";

const Private = () => {
  const { user, signInUser } = useContext(authContext);
  return <div></div>;
};

export default Private;
