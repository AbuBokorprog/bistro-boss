import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useAdmin = () => {
  const { user } = useAuth();

  //const token = localStorage.getItem("access-token");

  /* const { data: isAdmin = [], isLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/users/admin/${user?.email}`,
        { headers: { authorized: `bearer${token}` } }
      );
      return response.json();
    },
  });
  return [isAdmin, isLoading]; */

  const [axiosSecure] = useAxios();
  const { data: isAdmin = [], isLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log(res);
      return res.data.admin;
    },
  });
  return [isAdmin, isLoading];
};
export default useAdmin;
