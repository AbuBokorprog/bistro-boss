import React from "react";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { FaUserShield } from "react-icons/fa";

const AllUsersCard = ({ users, index, refetch }) => {
  const { name, email } = users;

  const adminCreateHandler = (users) => {
    fetch(`http://localhost:5000/users/admin/${users._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${users.name} an Admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const deletebtnHandler = (user) => {
    refetch();
    console.log(user);
  };

  return (
    <tr>
      <td>{index}</td>
      <td>
        <div className="font-bold">{name}</div>
      </td>
      <td>{email}</td>
      <td>
        {users.role === "admin" ? (
          "admin"
        ) : (
          <button
            className="btn btn-outline"
            onClick={() => adminCreateHandler(users)}
          >
            <span>
              <FaUserShield className="text-orange-600"></FaUserShield>
            </span>
          </button>
        )}
      </td>
      <th>
        <button
          onClick={() => deletebtnHandler(users)}
          className="btn btn-ghost"
        >
          <AiFillDelete className="text-red-600 text-3xl"></AiFillDelete>
        </button>
      </th>
    </tr>
  );
};

export default AllUsersCard;
