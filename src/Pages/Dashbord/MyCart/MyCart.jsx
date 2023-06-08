import React from "react";
import useCart from "../../../Hooks/useCart";
import { Helmet } from "react-helmet-async";
import Cart from "./Cart";

const MyCart = () => {
  const [data] = useCart();
  const sumWithInitial = data?.reduce(
    (accumulator, item) => item.price + accumulator,
    0
  );
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="flex text-3xl justify-between mb-3 font-semibold">
        <h2>Total Order: {data?.length}</h2>
        <h3>Total Price: {sumWithInitial}</h3>
      </div>
      <div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i) => (
              <Cart item={i} key={i._id}></Cart>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
