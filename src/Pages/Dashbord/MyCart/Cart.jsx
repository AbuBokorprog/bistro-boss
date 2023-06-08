import React from "react";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";

const Cart = ({ item }) => {
  const { name, image, price, _id } = item;
  const [refetch] = useCart();

  const deletebtnHandler = (item) => {
    const { _id } = item;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };

  return (
    <tr>
      <td></td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">{name}</div>
      </td>
      <td>{price}</td>
      <th>
        <button
          onClick={() => deletebtnHandler(item)}
          className="btn  btn-ghost"
        >
          <AiFillDelete className="text-red-600 text-3xl"></AiFillDelete>
        </button>
      </th>
    </tr>
  );
};

export default Cart;
