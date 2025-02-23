import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
  // const [menus, setMenu] = useState([]);
  const axiosPublic = useAxiosSecure();
  // const [loading,setLoading]=useState(true)
  //   useEffect(() => {
  //     fetch("https://bristo-boss-server-chi.vercel.app/menu")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setLoading(false)
  //         setMenu(data)
  //       });
  //   }, []);

  const {
    data: menus = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const {data} = await axiosPublic.get("/menu");
      return data
    },
  });
  return [menus, loading, refetch];
};

export default useMenu;
