import React, { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";

const TabSection = ({ items }) => {
  //console.log(items);
  const { name, image, price, recipe } = items;
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [data, refetch] = useCart();

  const cartHandler = (item) => {
    //console.log(item);
    const { name, image, price, _id } = item;
    if (user) {
      const orderItem = {
        foodId: _id,
        name,
        image,
        price,
        email: user?.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Card added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Are you Login?",
        text: "You are not logged in!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
  //(state = { from: location })

  return (
    <div className="card w-80 mt-10 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <p className=" absolute text-white bg-slate-400 px-2 right-0 top-0 mt-5 me-8">
          {price}
        </p>
        {recipe}
        <div className="card-actions justify-center">
          <button
            onClick={() => cartHandler(items)}
            className="btn btn-primary"
          >
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
