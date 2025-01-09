import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
  // const [menus, setMenu] = useState([]);
  const axiosPublic = useAxiosSecure();
  // const [loading,setLoading]=useState(true)
  //   useEffect(() => {
  //     fetch("http://localhost:5000/menu")
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
