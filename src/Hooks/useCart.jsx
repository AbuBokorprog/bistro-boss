import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useCart = () => {
  const { user, loader } = useAuth;
  const [axiosSecure] = useAxios();

  //const token = localStorage.getItem("access-token");

  const { isLoading, refetch, data } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loader,
    //   queryFn: async () => {
    //     const response = await fetch(
    //       `http://localhost:5000/carts?email=${user?.email}`,
    //       { headers: { authorized: `bearer${token}` } }
    //     );
    //     return response.json();
    //   },

    queryFn: async () => {
      const response = await axiosSecure(`/carts?email=${user?.email}`);
      console.log(response);
      return res.data;
    },
  });
  return [data, refetch, isLoading];
};

export default useCart;
