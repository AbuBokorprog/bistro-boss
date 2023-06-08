import React from "react";
import { Helmet } from "react-helmet-async";
import AllUsersCard from "./AllUsersCard";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";

const AllUsers = () => {
  const { axiosSecure } = useAxios();
  const { refetch, data: user = [] } = useQuery({
    queryFn: async () => {
      const response = await axiosSecure.get(`/users`);
      return response.data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold my-3">
          Total Users: {user.length}
        </h1>
        <div>
          <button className="btn btn-warning">Pay</button>
        </div>
      </div>
      <table className="table bg-sky-200">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user?.map((u, index) => (
            <AllUsersCard
              users={u}
              key={u._id}
              index={index + 1}
              refetch={refetch}
            ></AllUsersCard>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
